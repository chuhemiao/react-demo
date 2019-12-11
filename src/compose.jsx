import  React from "react"

export default class Compose extends React.Component{
// 组合

    render(){
        return(
            <div>
               嘿嘿嘿：{this.props.children}
            </div>
        )
    }
}