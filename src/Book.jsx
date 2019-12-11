import  React from "react"

export default class Book extends React.Component{
// 路由嵌套
    render(){
        return(
            <div>
               book:
               {/* 路由嵌套显示位置 */}
               {  this.props.children }
            </div>
        )
    }
}