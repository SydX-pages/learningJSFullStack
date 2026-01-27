# Part 01

## a

1. React组件

```js
const App = () => {
  return <div>...</div>;
};
```

2. props传参

```js
const Part = (props) => {
  //必须大写
  return (
    <>
      <p>
        {props.text}
        {props.value}
      </p>
    </>
  );
};
const App = () => {
  const txt = "text";
  const val = 123;
  return (
    <div>
      <Part text={txt} value={val} />
    </div>
  );
};
```

## b

### 数组

1. concat
   返回新的数组包含新加入的项

```js
const t = [1, -1, 3];
const tt = t.concat(5); //tt:[1,-1,3,5]
```

2. map
3. 解构赋值

### 对象

1. 用.或者[]，当键有空格时必须用[]
2. 可以临时添加

### 函数

1. 箭头函数

### 对象方法和this

### 类

## c

1. 辅助函数：组件自己内部的函数
2. 解构变量

```js
const Component = (props) => {return(...)}

const Component = ({var1,var2}) => {...}
```

3. 重新渲染组件
   1. main.jsx中重新调用render
   2. useState()
4. 事件处理（button，onClick中调用函数）
5. 组件模块化，向子组件传递状态
   1. “在React中，通常使用*onSomething*命名代表事件的props，使用*handleSomething*命名处理这些事件的函数。”
6. 调用改变状态的函数会导致组件重新渲染

