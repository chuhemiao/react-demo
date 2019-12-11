import  React from "react"

export default class SetStateDemo extends React.Component{
    constructor(){
        super();
        this.state = {
            count : 0
        }
    }

    async increment(){
        // this.setState({
        //     count:this.state.count+1
        // },()=>{
        //     // 回调函数 得到同步数据
        //     console.log(this.state.count)

        // })
        // 方式2
        await this.setStateAsync({count:this.state.count+1});
        console.log(this.state.count)
    }
    // promise async  await es6语法
    setStateAsync(state){
        return new Promise((resolve)=>{
            this.setState(state,resolve)
        })
    }
    render(){
        return(
            <div>
                setState是同步还是异步
                <p>{this.state.count}</p>
                <button onClick={this.increment.bind(this)}>修改</button>
            </div>
        )
    }
}