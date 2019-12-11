import {  httpGet, httpPost } from "../utils/http"
import base from "./base"

const api = {
    getList(){
        return httpGet(base.baseUrl + base.cx)
    },
    getLogin(params){
        return httpPost(base.baseUrl+base.login,params)
    }
}

export default api