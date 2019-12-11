import  qs from "querystring"

// get

export function httpGet(url){
    const result = fetch(url)
    return result;
}

//post

export function httpPost(url,params){
    const result = fetch(url,{
        method:"POST",
        headers:{
            'content-type':'application/x-www-form-urlencode',
            "Accept":"application/json,text/plain,*/*"
        },
        // stringify 解析数据格式
        body:qs.stringify(params)
    })
    return result ;
}