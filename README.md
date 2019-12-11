### react 项目学习


### react项目创建

+ 文档地址：https://zh-hans.reactjs.org/docs/hello-world.html
+ npx create-react-app my-app
+ cd my-app
+ npm start

### 环境介绍

+ nodes_modules 包目录

+ public 入口文件

+ src 源码文件

### React 基础知识

+ JSX语法介绍
    - Javascript+ XML形式衍生出的语法
    - 遇到<>按照HTML语法解析 遇到{}按照Javascript 语法解析

### 组件

+ 组件的后缀可以是js也可以是jsx  jsx有react语法提示
+ 每个功能都可以当成一个组件用来使用  减少耦合

### props 属性

+ 组件的复用性，使用props承载传递不同的数据

### state 用来页面传值
+ this.state.xxxxxx

### React 生命周期函数

+ staer props => state
+ 函数列表：
    - componentWillMount:在组件渲染之前执行
    - componentDidMount:在组件渲染之后执行
    - shouldComponentUpdate：返回true和false，true代表可改变 false不可以改变
    - componentWillUpdate:数据在改变之前执行（state，props）
    - componentDidUpdate：数据修改完成（state，props）
    - componentWillReceiveProps:props发生改变执行
    - componentWillUnmount:组件卸载前执行
+ 父传子： props
+ 子传父：事件回传事件

### setState更新是同步还是异步
+ 会引起视图的重绘
+ 在可控的情况下是异步 在非可控的情况下是同步
+ 合并所有的异步执行  然后异步执行完毕之后才会执行异步回调函数

###　条件渲染

+ 一般是视图渲染和缺省框

### 列表渲染和 key

+ key的存在意义是为了让列表渲染视图不发生重绘，加key会直接重新在后面添加数据,数据索引不发生变化则不重新加载

+ push()函数返回的是数组的长度

### 表单

+ 受控组件  官方推荐使用此组件

+ 非受控组件
    - refs和dom  的三种情况：
        + 管理焦点，文本选择或媒体播放。
        + 触发强制动画。
        + 集成第三方 DOM 库。


### 状态提升

+ 组件数据之间的交互


### 组合和继承

+ his.props.children 传递给组件值  在组件内直接可以使用

### 使用propsTypes 进行检查

+ 增强程序的健壮性

+ PropTypes 提供一系列验证器，可用于确保组件接收到的数据类型是有效的。

+ 类型有以下

```

 optionalArray: PropTypes.array,
  optionalBool: PropTypes.bool,
  optionalFunc: PropTypes.func,
  optionalNumber: PropTypes.number,
  optionalObject: PropTypes.object,
  optionalString: PropTypes.string,
  optionalSymbol: PropTypes.symbol,

``` 

### react ui 组件  antd

+ npm install antd --save

+ 引入react的webpack配置  使用npm run eject
+ 按需加载使用`babel-plugin-import，npm install babel-plugin-import --save-dev`   
+ [babel-plugin-import地址](https://github.com/ant-design/babel-plugin-import)
+ 引入文件后，修改根目录下的·package.json babel·处，在persets后面添加

```

"plugins": [
    ["import", {
      "libraryName": "antd",
      "libraryDirectory": "es",
      "style": "css" // `style: true` 会加载 less 文件
    }]
  ]

  ```
+ 然后就可以使用 `import { DatePicker } from 'antd';`  单个引用某个组件

### 网络请求 fetch


+ fetch 是基于promise
+ 提供了对 Request 和 Response （以及其他与网络请求有关的）对象的通用定义
+ fetch() 必须接受一个参数——资源的路径。无论请求成功与否，它都返回一个 Promise 对象，resolve 对应请求的 Response。你也可以传一个可选的第二个参数init（参见 Request）。
+ 一旦 Response 被返回，就有一些方法可以使用了，比如定义内容或者处理方法（参见 Body）。
+ Body.arrayBuffer()
    - 使Response挂起一个流操作并且在完成时读取其值，它返回一个Promise对象，其resolve参数类型是ArrayBuffer。此操作会将bodyUsed状态改为已使用（true）。
+ Body.blob()
    - 使Response挂起一个流操作并且在完成时读取其值，它返回一个Promise对象，其resolve参数类型是Blob。此操作会将bodyUsed状态改为已使用（true）。
+ Body.formData()
    - 使Response挂起一个流操作并且在完成时读取其值，它返回一个Promise对象，其resolve参数类型是FormData表单。此操作会将bodyUsed状态改为已使用（true）。
+ Body.json()
    - 使Response挂起一个流操作并且在完成时读取其值，它返回一个Promise对象，其resolve参数类型是使用JSON解析body文本的结果。此操作会将bodyUsed状态改为已使用（true）。
+ Body.text()
    - 使Response挂起一个流操作并且在完成时读取其值，它返回一个Promise对象，其resolve参数类型是USVString（文本）。此操作会将bodyUsed状态改为已使用（true）。

###  跨域解决方案

+ 开发模式
    - vue\react 框架自带解决方案
+ 生产模式
    - jsonp cors  iframe postMessage


+ 跨域问题解决方案1  `package.json 修改 "proxy": "http://tingapi.ting.baidu.com"`

+ 跨域解决方案2 

    - 安装 npm install http-proxy-middleware --save  
    - 新建文件  src/setupProxy.js  修改target的端口

### 封装网络请求

+ get post 请求封装

### react router 

+ 安装react-router-dom  `npm install react-router-dom`

+ 使用 `<Router>   <Route path="/homes"  component={Homes} ></Route> </Router>` path为当前跳转路径  component为当前注册组件页面

+ BrowserRouter和HashRouter的区别

    - HashRouter 锚点连接
    - BrowserRouter：h5的新特性 / history.push模式  访问以/的形式

### 错误处理

+ 生命周期函数 componentDidMount(error,errorInfo)  子元素发生错误时触发


### hook

+ hook 文档 https://zh-hans.reactjs.org/docs/hooks-intro.html

+ Hook 是什么？ Hook 是一个特殊的函数，它可以让你“钩入” React 的特性。例如，useState 是允许你在 React 函数组件中添加 state 的 Hook。

+ 什么时候我会用 Hook？ 如果你在编写函数组件并意识到需要向其添加一些 state，以前的做法是必须将其它转化为 class。

+ 不编写 class 的情况下使用 state 以及其他的 React 特性。

+ useState 会返回一对值：当前状态和一个让你更新它的函数，你可以在事件处理函数中或其他一些地方调用这个函数。
+ useState 唯一的参数就是初始 state。

+ // 声明多个 state 变量！

```

const [age, setAge] = useState(42);
const [fruit, setFruit] = useState('banana');
const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);

```
+ useEffect 就是一个 Effect Hook，给函数组件增加了操作副作用的能力。它跟 class 组件中的 componentDidMount、componentDidUpdate 和 componentWillUnmount 具有相同的用途，只不过被合并成了一个 API。

+ Hook 本质就是 JavaScript 函数，但是在使用它时需要遵循两条规则。
    - 只在最顶层使用 Hook,不要在循环，条件或嵌套函数中调用 Hook
    - 只在 React 函数中调用 Hook,不要在普通的 JavaScript 函数中调用 Hook。


