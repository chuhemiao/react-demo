import  React from "react"

export default class FormDemo extends React.Component{
// 受控组件 表单
    constructor(){
        super();
        this.state = {
            value : '',
        }
    }

    hangdleSubmit = (e) =>{
        e.preventDefault();
        console.log(this.state.value)
    }

    onChangeHadler = (e) =>{
        this.setState({
            value:e.target.value
        })
    }

    render(){
        return(
            <div>
               <form onSubmit={this.hangdleSubmit}>
                   <input type="text" value={this.state.value} onChange={this.onChangeHadler} />
                   <input type="submit" value="提交" />
               </form>
            </div>
        )
    }
}