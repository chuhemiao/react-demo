import React from 'react';
import ReactDOM from 'react-dom';
import App from "./app"
//import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
// jsx 语法
// const name = 'chuhe miao';
// const element = <h1>Hello, {name}</h1>;
// (): 如果存在标签结构，并且标签结构要换行，需要用（）括号括起来

// dom 的渲染函数   参数1  一个标签解读的内容  参数2  获取要插入的容器 root对应public下的index.html下的<div id="root"></div> 属性
//ReactDOM.render(element, document.getElementById('root'));

// function tick(){
//     const element =(
//         <div>
//             <h1>hello chuhe miao</h1>
//             <h2> It is { new Date().toLocaleTimeString()} </h2>
//         </div>
//     )
//     ReactDOM.render(element, document.getElementById('root'));
// }
// setInterval(tick,1000)

// 引入组件
ReactDOM.render(<App />, document.getElementById('root'));


