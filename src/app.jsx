import React from "react"
import Home from "./home"
import MyNav from "./MyNav"
import StateComponent from "./StateComponent"
import ComponentLife from "./ComponentLife"
import SetStateDemo from "./setStateDemo"
import IfDemo from "./ifDemo"
import KeyDemo from "./KeyDemo"
import FormDemo from "./FormDemo"
import RefsAndDom from "./RefsAndDom"
import RefsForm from "./RefsForm"
import Parent from "./components/parent"
import Compose from "./compose"
import PropsTypeDemo from "./PropsTypeDemo"
import AntdExample from './antdExample';
import Fetch from './fetch';
import Homes from './pages/Homes';
import Mine from './pages/Mine';
import Book from './Book';
import JavaBook from './JavaBook';
import WebBook from './WebBook';
import Hook from './hook';
import { HashRouter as Router,Route } from 'react-router-dom';


// 用类的形式创建组件

class App extends React.Component{

    constructor(props){
        super();
        this.state = {
            title:'wenben111'
        }
    }
    clickChange = (data) =>{
        this.setState({
            title:data
        })
    }
    

    // 渲染函数
    render(){
        // 区分导航的不同数据 用props传递
        const nav2 = ["首页","新闻","游戏"]
        const nav1 = ["首页1","列表","cosplay"]
        // 多个标签模式需要用括号括起来()
        return (
            <div>
                {/* <h1>Hello Chuhe miao</h1>
                <p>this is bb</p>
                <Home />
                <MyNav nav = {nav1} title="导航" />
                <MyNav nav = {nav2} title="游戏导航" /> */}
                {/* <StateComponent /> */}
                {/* <ComponentLife title={this.state.title} clickChanges = {this.clickChange} /> */}
                {/* <SetStateDemo /> */}
                {/* <IfDemo /> */}
                {/* <KeyDemo /> */}
                {/* <FormDemo /> */}
                {/* <RefsAndDom /> */}
                {/* <RefsForm /> */}
                {/* <Parent /> */}
                {/* <Compose>
                    <div>我是组合啊</div>
                </Compose> */}
                {/* <PropsTypeDemo title="我是string" />   */}
                {/* <p>antd 例子</p> */}
                {/* <AntdExample /> */}
                {/* <Fetch /> */}
                路由功能：
                <Router>
                    <Route path="/homes"  component={Homes} ></Route>
                    <Route path="/mine" component={Mine} ></Route>

                {/* 路由嵌套 */}

                <Book>
                        <Route path="/webbook"  component={WebBook} ></Route>
                        <Route path="/javabook"  component={JavaBook} ></Route>
                </Book>

                </Router>

                <Hook />

                
            </div>
        )
    }
}

// es6 语法 导出当前组件
export default App