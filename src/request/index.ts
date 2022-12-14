import axios from "axios";
import { ElMessage } from "element-plus";


//创建axios实例
const service = axios.create({
    baseURL:"http://127.0.0.1:8080",
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
        warningTips(res.data.message)
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