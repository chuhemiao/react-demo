import  React from "react"

export default class RefsAndDom extends React.Component{
// 受控组件 表单


//ref 的值根据节点的类型而有所不同：

//当 ref 属性用于 HTML 元素时，构造函数中使用 React.createRef() 创建的 ref 接收底层 DOM 元素作为其 current 属性。
//当 ref 属性用于自定义 class 组件时，ref 对象接收组件的挂载实例作为其 current 属性。

    constructor(){
        super();
        this.HelloDiv = React.createRef();
    }

    componentDidMount(){
        console.log(this.HelloDiv.current);
        this.HelloDiv.current.style.color = "red";
    }

  

    render(){
        return(
            <div>
               Refs 和dom
               <div ref = { this.HelloDiv }>
                   Chuhe miao
               </div>
            </div>
        )
    }
}