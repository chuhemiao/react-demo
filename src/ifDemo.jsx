import  React from "react"
import { element } from "prop-types";

export default class IfDemo extends React.Component{
// 试图渲染  缺省框
    constructor(){
        super();
        this.state = {
            isLogin : false,
            names:["chuhe miao","jj"]
        }
    }

    clickLogin = () =>{
        this.setState({
            isLogin:true
        })
    }

    render(){
        const { names }  = this.state
        let showView = this.state.isLogin ? 
        <div>登陆了</div> : 
        <div>login</div>
        return(
            <div>
                条件渲染:{showView}
                <button onClick={this.clickLogin}>登陆</button>
                {
                    names.length > 0 ?
                    <div>
                        {
                            names.map((element,index)=>{
                            return <p key={index}>{element}</p>
                            })
                        }
                    </div>
                    :
                    <div>请等待登陆.....</div>

                }
            </div>
        )
    }
}