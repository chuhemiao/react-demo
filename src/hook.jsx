import React,{  useState,useEffect } from "react"
export default () =>{
    const [count,setCount] =  useState(11)

     // useEffect 相当于 componentDidMount 和 componentDidUpdate   componentWillUnmount 
    useEffect(() => {
        // 使用浏览器的 API 更新页面标题
        document.title = `You clicked ${count} times`;
    });

    return(
        <div>
            hello:{count}
            <button onClick={  ()=>{setCount(count+1)} }>Add</button>
        </div>
    )
}