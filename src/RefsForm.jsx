import  React from "react"

export default class RefsForm extends React.Component{
//  非受控组件 表单

    constructor(){
        super();
        this.username = React.createRef();
        this.pwd = React.createRef();
    }

    clickHandler = (e) =>{
        console.log(this.username.current.value);
        console.log(this.pwd.current.value);
    }

   
    render(){
        return(
            <div>
                非受控组件<br/>
               <input type="text" ref={ this.username } /><br/>
               <input type="text" ref={ this.pwd } /><br/>
               <button onClick={this.clickHandler} >新数据获取</button>
               
            </div>
        )
    }
}