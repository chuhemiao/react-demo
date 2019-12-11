import  React from "react"
import  qs from "querystring"

import api from "./api/index"

export default class Compose extends React.Component{
// fetch 请求

    constructor(){
        super();
        this.state = {
            dataEx:[]
        }
    }

    /*
    * fetch 是基于promise
    *   提供了对 Request 和 Response （以及其他与网络请求有关的）对象的通用定义
    *   fetch() 必须接受一个参数——资源的路径。无论请求成功与否，它都返回一个 Promise 对象，resolve 对应请求的 Response。你也可以传一个可选的第二个参数init（参见 Request）。
    *   一旦 Response 被返回，就有一些方法可以使用了，比如定义内容或者处理方法（参见 Body）。
    * 
    *       Body.arrayBuffer()
    *       使Response挂起一个流操作并且在完成时读取其值，它返回一个Promise对象，其resolve参数类型是ArrayBuffer。此操作会将bodyUsed状态改为已使用（true）。
    *    Body.blob()
    *       使Response挂起一个流操作并且在完成时读取其值，它返回一个Promise对象，其resolve参数类型是Blob。此操作会将bodyUsed状态改为已使用（true）。
    *    Body.formData()
    *       使Response挂起一个流操作并且在完成时读取其值，它返回一个Promise对象，其resolve参数类型是FormData表单。此操作会将bodyUsed状态改为已使用（true）。
    *    Body.json()
    *       使Response挂起一个流操作并且在完成时读取其值，它返回一个Promise对象，其resolve参数类型是使用JSON解析body文本的结果。此操作会将bodyUsed状态改为已使用（true）。
    *    Body.text()
    *       使Response挂起一个流操作并且在完成时读取其值，它返回一个Promise对象，其resolve参数类型是USVString（文本）。此操作会将bodyUsed状态改为已使用（true）。
    */


    /*
    * 跨域解决方案
    *   开发模式
    *       vue\react 框架自带解决方案
    *   生产模式
    *       jsonp cors  iframe postMessage
    */


    componentDidMount(){
        // get 请求
        fetch("https://apisns.cailuw.com/v1/link?limit=50")
        .then(res=>{
            // 返回数据
            return res.json()
        })
        .then(data =>{
            console.log(data)
            this.setState({
                dataEx:data.data.data
            })
        })
        // post请求
        fetch("http://iwenwiki.com/api/blueberrypai/login.php",{
            method:"POST",
            headers:{
                'content-type':'application/x-www-form-urlencode',
                "Accept":"application/json,text/plain,*/*"
            },
            // stringify 解析数据格式
            body:qs.stringify({
                user_id:"iwenaaaaa@qq.com",
                password:"123456",
                verification_code:"crfvw",
            })
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
        })
        // 跨域问题解决方案1 http://tingapi.ting.baidu.com/v1/restserver/ting?method=baidu.ting.billboard.billList&type=1&size=10&offset=0
        // fetch("/v1/restserver/ting?method=baidu.ting.billboard.billList&type=1&size=10&offset=0")
        // .then(res=>res.json())
        // .then(data=>{
        //     console.log(data)
        // })
        // .catch(error=>{
        //     console.log(new Error(error))
        // })
        // 跨域解决方案2
        // https://github.com/facebook/create-react-app/blob/master/docusaurus/docs/proxying-api-requests-in-development.md
        // 安装 npm install http-proxy-middleware --save  
        // 新建文件  src/setupProxy.js  修改target的端口
        // fetch("/api/list")
        // .then(res=>res.json())
        // .then(data=>{
        //     console.log(data)
        // })
        // .catch(error=>{
        //     console.log(new Error(error))
        // })
        // 封装后的请求
        // api.getList().then(res=>res.json()).then(data=>{
        //     console.log(data)
        // })

        api.getLogin({
            user_id:"iwenaaaaa@qq.com",
            password:"123456",
            verification_code:"crfvw",
        }).then(res=>res.json()).then(data=>{
            console.log(data)
        })



    }

    render(){
        const {dataEx}  = this.state
        return(
            <div>
              我是fetch请求！！！

                {
                    dataEx.length >0 ?
                    <ul>
                        {
                            dataEx.map((element,index)=>{
                            return <li key={index}>Id:{element.id}，{element.name}，{element.url}</li>
                            })
                            
                        }
                    </ul>
                    :
                    <div>加载中...</div>
                }
               
            </div>
        )
    }
}