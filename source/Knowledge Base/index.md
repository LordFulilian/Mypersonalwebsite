
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