
javascript基础

<details>
<summary>在 JavaScript 中创建对象有多种方法，下面将详细介绍几种常用方式：</summary>

<details>
<summary>1. 对象字面量语法</summary>

一组用逗号分隔的名称-值对，用大括号括起来：

```js
var object = {
  name: "Sudheer",
  age: 34,
};
```

对象字面量属性值可以是任何数据类型，包括数组、函数、嵌套对象。

> 注意：这是创建对象最简单的方法之一，常用于创建简单的临时对象。

</details>

<details>
<summary>2. 使用 new Object() 构造函数</summary>

通过 `new Object()` 创建一个空对象，然后动态添加属性：

```js
var object = new Object();
object.name = "Sudheer";
object.age = 34;
```

- 优点：直观、灵活  
- 缺点：代码较繁琐，不如字面量简洁

</details>

<details>
<summary>3. 使用构造函数</summary>

定义一个函数作为对象模板，然后用 `new` 实例化：

```js
function Person(name, age) {
  this.name = name;
  this.age = age;
}
var person = new Person("Sudheer", 34);
```

- 优点：可复用，适合批量创建类似对象  
- 缺点：方法会被每个实例复制一份，占内存

</details>

<details>
<summary>4. 使用 Object.create()</summary>

从指定原型对象创建一个新对象：

```js
var proto = { 
  greet() { console.log("Hi"); } 
};
var object = Object.create(proto);
object.name = "Sudheer";
```

- 优点：可直接指定原型，更灵活的继承控制

</details>

<details>
<summary>5. 使用类（class）语法</summary>

使用 ES6 的 `class` 创建对象：

```js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
const person = new Person("Sudheer", 34);
```

- 优点：语法清晰，结构化强  
- 缺点：语法糖，本质仍基于原型继承

</details>

</details>


数据库基础
<details>
<summary>sql支持以下三种注释</summary>
```sql
select *
from mytable;--注释
/*注释1
   注释2*/
```

</details>

html,css
<details>
<summary>DOCTYPE 的作用是什么？</summary>
- <!DOCTYPE>声明位于HTML文档中的第一行，处于< html>标签之前。告知浏览器的解析器用什么文档标准解析这个文档
</details>
<details>
<summary>标准模式与兼容模式各有什么区别？</summary>
- 标准模式的渲染方式和JS引擎的解析方式都是以该浏览器支持的最高标准运行。兼容模式中，页面以宽松的向后兼容的方式显示，模拟老式浏览器的行为防止站点无法工作
</details>
<details>
<summary>讲一下盒模型，普通盒模型和怪异盒模型有什么区别？</summary>
- 盒模型content,内边距padding，边框border,外边距margin。<br>
- box-sizing: content-box（普通盒模型）：width/height只包含内容宽高，padding/border叠加在外面。<br>
- box-sizing：border-box（怪异盒模型）：width/height包含content+padding<br>
</details>
<details>
<summary>块元素和行内元素区别是什么？常见块元素和行内元素有哪些？</summary>
-块级元素独占一行可设置宽高；行内元素不独占行、不可设置宽高（可用inline-bock或flex改变行为 
</details>
<details>
<summary>HTML语义化标签 有哪些？</summary>
-header,nav,main,article,section,aside,footer,figure,figcaption,time,adress等
</details>
<details>
<summary>伪类和伪元素的区别是什么？</summary>
-伪类（：hover）表示状态/位置；伪元素（::before）创建虚拟子元素插入内容
</details>
<details>
<summary>CSS如何实现垂直居中？</summary>
-最通常的方式是Flex：display:flex;align-items:center;justify-content:center;
</details>
<details>
<summary>CSS常见的选择器有哪些？</summary>
-元素、类、id、后代、子选择器、相邻兄弟、通用兄弟、属性选择器、伪类、伪元素。
</details>
<details>
<summary>CSS的优先级如何计算？</summary>
-优先级：内联>id>class/attribute/pseudo-class>element/pseudo-element;!important可打断常规规则
</details>
<details>
<summary>长度单位px、em和rem的区别是什么？</summary>
-px绝对，em相对当前字体（会累积），rem相对根（html）字体
</details>
<details>
<summary>讲一下flex弹性盒布局？</summary>
-父容器display:flex定义主轴与交叉轴，常用属性：justify-content，align-items，flex-wrap；子项flex控制伸缩
</details>
<details>
<summary>浮动塌陷问题解决方法是什么？</summary>
-父元素包含浮动子元素导致高度塌陷；解决：clearfix（::after）、overflow：auto或display：flow-root
</details>
<details>
<summary>position属性的值有哪些？各个值是什么含义？</summary>
-static，relative，absolute，fixed，sticky。分别说明是否脱离文档流与参考物
</details>
<details>
<summary>BFC、IFC是什么？</summary>
-BFC(Block Formatting Context)是独立布局环境（防止margin折叠、包含浮动），触发方式包括overflow非visible、float、display:flow-root等
</details>

javascript
<details>
<summary>谈谈对原型链的理解。</summary>
- 对象通过内部[[prototype]]链接到另一个对象；属性查找沿原型链向上直到null。
</details>
<details>
<summary>js如何实现继承？</summary>
-常见方式：原型链继承、构造函数继承、组合继承、寄生组合继承（优化）、ES6class
</details>
<details>
<summary>js有哪些判断类型的方法？</summary>
-基本类型Undefined，Null，Boolean，Number，String，Symbol，BigInt
</details>
<details>
<summary>如何判断一个变量是否数组？</summary>
-推荐Array.isArray
(arr);备选Object.prototype.toString.call(arr) === '[object Array]'。
</details>
<details>
<summary>Null 和 undefined 的区别？</summary>
-
</details>