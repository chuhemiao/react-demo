import  React from "react"

// 改变数据的模式不在使用dom  而是使用state
export default class StateComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count:10,
            flag:true
        }
    }
    increment(){
        this.setState({
            count:this.state.count+=1
        })
    }
    decrement(){
        this.setState({
            count: this.state.count-=1
        })
    }
    // 箭头函数
    clickHandler = () =>{
        console.log(this);
    }
    // 修改flag的值
    clickUpdateFlag = () =>{
        this.setState({
            flag: false
        })
    }
    
    render(){
        let showView = this.state.flag ? '我是唐朝大佬 ': ' 我是唐朝败家子'
        return(
            <div>
                <h3>组件的state</h3>
                <p>{this.state.count}</p>
                <button onClick={this.increment.bind(this)} >增加</button>
                <button onClick={this.decrement.bind(this)} >减少</button>
                <button onClick={this.clickHandler} >关于this</button>
                <button onClick={this.clickUpdateFlag} >改变flag的值</button>
                <p>{showView}</p>
            </div>
        )
    }
}