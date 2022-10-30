import { requestBase } from "@/type/requestBase";
import axios from "axios";
import { ElMessage } from "element-plus";


//创建axios实例
const service = axios.create({
    baseURL:requestBase.url,
    timeout:5000,
    headers:{
          "Content-type" : "application/json;charset=utf-8"
    }
})

//请求拦截
service.interceptors.request.use((config)=>{
    config.headers = config.headers || {}//定义config.headers类型
    const locakToken = localStorage.getItem("token")
    if(locakToken){
        config.headers.token = locakToken
    }
    return config
})

//响应拦截
service.interceptors.response.use((res)=>{
    const code:number = res.data.code
    if(code != 2001){
        if(code == 2005){//2005token已失效，删除本地token
            localStorage.removeItem("token")
        }
        warningTips(res.data.message)
        //返回Promise时，会在控制台出现异常信息，不会返回给调用方法
        return Promise.reject(res.data)
    }
    return res.data
},(err)=>{
    console.log(err)
})

const warningTips = (msg: string) => {
    ElMessage({
      message: msg,
      type: 'warning',
    })
  }

export default service