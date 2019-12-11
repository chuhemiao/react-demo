import  React from "react"

// props 不可被修改  需要从原组件修改  React 组件都必须像纯函数一样保护它们的 props 不被更改。
export default class MyNav extends React.Component{
    render(){
        return(
            <div>
                {/* 注释 map遍历数据 */}
                <h3>{this.props.title}</h3>
               <ul>
                   {
                       this.props.nav.map((element,index)=>{
                       return <li key={index}>{element}</li>
                       })
                   }
               </ul>
            </div>
        )
    }
}