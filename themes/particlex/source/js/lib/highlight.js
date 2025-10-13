mixins.highlight = {
  data() {
    return { copying: false };
  },
  created() {
    // 保留原来的配置
    hljs.configure({ ignoreUnescapedHTML: true });
    this.renderers.push(this.highlight);
  },
  methods: {
    sleep(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    },

    // 从给定元素或其祖先 figure.highlight 中安全检测语言
    detectLanguageSafe(el) {
      // 优先使用 code 元素的类
      const bad = new Set(['hljs', 'line', 'gutter', 'line-numbers', 'linenumbers', 'copycode', 'code-content']);
      const clsFrom = (node) => (node && node.classList) ? Array.from(node.classList) : [];

      // collect candidates: code -> pre -> nearest figure.highlight
      let candidates = [];
      candidates = candidates.concat(clsFrom(el));
      if (el.parentElement) candidates = candidates.concat(clsFrom(el.parentElement));
      const fig = el.closest && el.closest('figure.highlight');
      if (fig) candidates = candidates.concat(clsFrom(fig));

      // prefer language- or lang- patterns first
      for (const c of candidates) {
        if (/^language-/.test(c)) return c.replace(/^language-/, '').toLowerCase();
        if (/^lang-/.test(c)) return c.replace(/^lang-/, '').toLowerCase();
      }
      // then try bare tokens but filter bad ones
      for (const c of candidates) {
        if (bad.has(c)) continue;
        if (/^[a-z0-9+-]+$/i.test(c)) return c.toLowerCase();
      }
      return null;
    },

    // 基本 HTML 转义
    escapeHtml(str) {
      return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    },

    highlight() {
      // 支持两种常见渲染：figure.highlight（Hexo 默认 highlight）和普通 <pre>
      const figures = Array.from(document.querySelectorAll('figure.highlight'));
      const pres = Array.from(document.querySelectorAll('pre')).filter(p => !p.closest('figure.highlight'));

      const blocks = [];

      // 优先处理 figure.highlight（它包含 gutter & code cell）
      for (const fig of figures) {
        // 如果 figure 已被处理，跳过
        if (fig.dataset && fig.dataset.hljsProcessed) continue;

        // 找到 code element（可能在 td.code pre code）
        const codeEl = fig.querySelector('code') || fig.querySelector('pre');
        if (!codeEl) { fig.dataset.hljsProcessed = '1'; continue; }

        blocks.push({ wrapper: fig, codeEl });
      }

      // 再处理孤立的 pre（不在 figure 内）
      for (const pre of pres) {
        if (pre.dataset && pre.dataset.hljsProcessed) continue;
        // prefer code inside pre
        let codeEl = pre.querySelector('code');
        if (!codeEl) codeEl = pre; // treat <pre> itself as code container
        blocks.push({ wrapper: pre, codeEl });
      }

      // 处理所有收集到的块
      for (const item of blocks) {
        const { wrapper, codeEl } = item;

        // 避免重复
        if (wrapper.dataset && wrapper.dataset.hljsProcessed) continue;

        // 原始文本（用于复制）
        const rawCode = codeEl.textContent || wrapper.textContent || '';

        // 识别语言（安全）
        let language = this.detectLanguageSafe(codeEl);

        // 如果识别到 yaml，并且内容看起来像 front-matter，则忽略语言
        if (language && (language === 'yaml' || language === 'yml')) {
          const trimmed = rawCode.trim();
          if (/^---\s*[\s\S]*?\s*---/.test(trimmed)) {
            language = null;
          }
        }

        // 执行高亮（优先使用注册语言，否则 fallback highlightAuto or escape）
        let highlighted = '';
        try {
          if (language && hljs.getLanguage && hljs.getLanguage(language)) {
            highlighted = hljs.highlight(rawCode, { language }).value;
          } else if (hljs.highlightAuto) {
            const auto = hljs.highlightAuto(rawCode);
            highlighted = (auto && auto.value) ? auto.value : this.escapeHtml(rawCode);
            // 若未指定 language，则可从自动识别里获知（但仅用于展示，不强制）
            if (!language && auto && auto.language) language = auto.language;
          } else {
            highlighted = this.escapeHtml(rawCode);
          }
        } catch (err) {
          console.warn('hljs highlight failed, fallback text', err);
          highlighted = this.escapeHtml(rawCode);
        }

        // 把高亮结果写回真实的 code 元素（不替换 wrapper 或其它 sibling）
        try {
          // NOTE: codeEl 可能是 <code> 或 <pre>，都可以 innerHTML
          codeEl.innerHTML = highlighted;

          // 确保 codeEl 有 hljs + language-xxx class（便于样式）
          if (!codeEl.classList.contains('hljs')) codeEl.classList.add('hljs');
          if (language) codeEl.classList.add(`language-${language}`);
        } catch (err) {
          console.error('writing highlighted html failed', err);
        }

        // 如果 wrapper 已经有 gutter (行号 DOM)，不要再调用 lineNumbersBlock
        const hasGutter = !!wrapper.querySelector('.gutter, .line, .linenumber, .line-numbers');
        if (!hasGutter) {
          try {
            if (typeof hljs.lineNumbersBlock === 'function') {
              // 传入 codeEl 更稳妥
              hljs.lineNumbersBlock(codeEl, { singleLine: true });
            }
          } catch (err) {
            console.warn('lineNumbersBlock failed', err);
          }
        }

        // 语言 badge：只在 language 存在且不是被忽略的情况下显示
        let langDiv = wrapper.querySelector('.language');
        if (language) {
          if (!langDiv) {
            langDiv = document.createElement('div');
            langDiv.className = 'language';
            wrapper.appendChild(langDiv);
          }
          langDiv.textContent = language;
        } else {
          if (langDiv) langDiv.remove();
        }

        // 复制按钮：若不存在则创建（append 到 wrapper）
        if (!wrapper.querySelector('.copycode')) {
          const copyDiv = document.createElement('div');
          copyDiv.className = 'copycode';
          copyDiv.innerHTML = '<i class="fa-solid fa-copy fa-fw"></i><i class="fa-solid fa-check fa-fw"></i>';
          wrapper.appendChild(copyDiv);

          copyDiv.addEventListener('click', async () => {
            if (this.copying) return;
            this.copying = true;
            copyDiv.classList.add('copied');
            try {
              await navigator.clipboard.writeText(rawCode);
              await this.sleep(1000);
            } catch (err) {
              console.error('copy failed', err);
            } finally {
              copyDiv.classList.remove('copied');
              this.copying = false;
            }
          });
        }

        // 标记为已处理（标到 wrapper 上，避免重复处理）
        if (wrapper.dataset) wrapper.dataset.hljsProcessed = '1';
      } // end for blocks
    }, // end highlight
  }, // end methods
};
