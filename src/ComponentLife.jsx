import  React from "react"

// 生命周期
export default class ComponentLife extends React.Component{
    constructor(props){
        super(props);
        this.state  = {
            count: 10
        }
    }
    componentWillMount(){
        console.log("componentWillmount")
    }
    componentDidMount(){
        console.log("componentDidMount")
    }
    shouldComponentUpdate(){
        return true;
    }
    componentWillUpdate(){
        console.log("componentWillUpdate")
    }
    componentDidUpdate(){
        console.log("componentDidUpdate")
    }
    componentWillReceiveProps(){
        console.log("componentWillReceiveProps")
    }
    componentWillUnmount(){
        console.log("componentWillUnmount")
    }
    changeCount = () =>{
        this.setState({
            count : this.state.count +=1
        })
    }
    clickChange = () =>{
        this.props.clickChanges("我是子组件的数据")
    }
    render(){
        const {  count } = this.state;
        return(
            <div>
                <h3>生命周期:{ count } +  {this.props.title}</h3>
                <button onClick={this.changeCount}>增加</button>
                {/* 子传父  */}
                <button onClick = {this.clickChange}>修改文本</button>

            </div>
        )
    }
}