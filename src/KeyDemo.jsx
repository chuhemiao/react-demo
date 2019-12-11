import  React from "react"
import { element } from "prop-types";

export default class KeyDemo extends React.Component{
// 试图渲染  缺省框
    constructor(){
        super();
        this.state = {
            isLogin : false,
            userInfo:[
                {
                    name:"xxxx",
                    age:66,
                    jobs:["aa1","bbb1","cccc1"]
                },
                {
                    name :"pppp",
                    age:774,
                    jobs:["aa2","bbb2","cccc2"]
                },
                {
                    name :"pppp1",
                    age:771,
                    jobs:["aa3","bbb3","cccc3"]
                },
                {
                    name :"pppp2",
                    age:771,
                    jobs:["aagg","bbbbbbb","ggg"]
                },
                {
                    name :"pppp3",
                    age:772,
                    jobs:["bbbdfgfg","xcvxvxv","rtyrtyrty"]
                },
            ]
        }
    }

    clickHandler = () =>{
        this.setState({
            userInfo:this.state.userInfo.concat([{
                name :"6666666",
                age:772,
                jobs:["7777","88888","22222"]
            }])
        })
    }
 

    render(){
        const { names }  = this.state
        return(
            <div>
                <ul>
                    {
                        this.state.userInfo.map((element,index)=>{
                            return(
                                <li key={index}>
                                    <span>{element.name}</span>
                                    <span>{element.age}</span>
                                    <div>
                                        {
                                            element.jobs.map((childElement,chindIndex)=>{
                                            return <span key={chindIndex}>{childElement}<br/></span>
                                            })
                                        }
                                        

                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
                <button onClick={ this.clickHandler }>添加数据</button>
            </div>
        )
    }
}