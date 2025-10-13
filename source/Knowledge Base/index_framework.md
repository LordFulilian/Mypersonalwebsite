---
title: {{POST_TITLE}}
date: 2025-10-13
tags: [JavaScript, 教程, 对象]
categories: [前端技术]
author: zhangqi
---

<!--
说明：
- 这是一个可直接用于 Hexo 的 Markdown 模板（纯 Markdown + <details> 折叠）。
- 把 {{POST_TITLE}} 改成你的文章标题，修改 date、tags 等 front-matter。
- 每个方法块下面有占位符（待你填写），包括：简介、代码示例、优缺点、常见注意事项、扩展阅读/链接。
- 保持代码块使用 ```language 格式以便 Hexo/highlight.js 正确高亮。
- 如果想把整段简介也做成可折叠的 summary（点击展开），第一个 <details> 已经为你准备好了。
-->

<details>
<summary>{{POST_INTRO_LINE}}（点击展开阅读全文）</summary>

<!-- === 方法一：对象字面量 === -->
<details>
<summary>1. 对象字面量语法 — 简短一句话描述（在此替换）</summary>

### 简介
在此填写对象字面量的详细说明（语法、什么时候使用、原理提示等）。

### 示例代码
```js
// 在此粘贴或编写示例代码
var obj = {
  // ...
};
```

### 优点
- 列出优点 1
- 列出优点 2

### 缺点 / 注意事项
- 列出缺点或兼容性注意事项

### 扩展阅读 / 参考
- 链接或笔记

</details>

<!-- === 方法二：new Object() === -->
<details>
<summary>2. 使用 new Object() 构造函数 — 简短一句话描述</summary>

### 简介
在此填写详细说明。

### 示例代码
```js
var obj = new Object();
obj.name = "Example";
```

### 优点
- ...

### 缺点 / 注意事项
- ...

### 扩展阅读 / 参考
- ...
</details>

<!-- === 方法三：构造函数 === -->
<details>
<summary>3. 使用构造函数 (Function + new)</summary>

### 简介
说明构造函数如何工作、原型链、实例化时的注意点。

### 示例代码
```js
function Person(name, age) {
  this.name = name;
  this.age = age;
}
var p = new Person("Alice", 20);
```

### 优点
- 可复用
- 适合批量实例化

### 缺点 / 注意事项
- 方法会被每个实例复制（可用 prototype 优化）
- ...

### 扩展阅读 / 参考
- ...
</details>

<!-- === 方法四：Object.create === -->
<details>
<summary>4. 使用 Object.create()</summary>

### 简介
说明如何通过指定原型创建对象以及应用场景。

### 示例代码
```js
const proto = { greet() { console.log('hi'); } };
const obj = Object.create(proto);
obj.name = 'Bob';
```

### 优点
- 直接指定原型
- 控制继承链更灵活

### 缺点 / 注意事项
- ...

### 扩展阅读 / 参考
- ...
</details>

<!-- === 方法五：class 语法 === -->
<details>
<summary>5. 使用 class 语法（ES6）</summary>

### 简介
说明 class 的语法糖、本质是原型继承、适合什么时候使用。

### 示例代码
```js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
const p = new Person("Carol", 30);
```

### 优点
- 语法清晰、可读性高

### 缺点 / 注意事项
- 仍基于原型继承
- ...
</details>

<!-- === 进阶 / 对比表格 === -->
<details>
<summary>进阶：方法对比（可填写表格）</summary>

| 方法 | 语法复杂度 | 内存效率 | 继承/扩展性 | 适用场景 |
|---|---:|---:|---|---|
| 对象字面量 | 低 | 高 | 低 | 简短配置 / 临时对象 |
| new Object() | 低 | 中 | 低 | 不常用，一般可替代为字面量 |
| 构造函数 | 中 | 低（若方法放在实例） | 高 | 需要批量创建相似对象 |
| Object.create | 中 | 高 | 高 | 需要精细控制原型链 |
| class | 中 | 中 | 高 | 结构化面向对象风格 |

</details>

<!-- === 结尾 / 版权 === -->
<details>
<summary>结尾与版权</summary>

感谢阅读！你可以在此补充总结、代码沙箱链接、练习题或版权信息。

---
© 2025 zhangqi
</details>

</details>
