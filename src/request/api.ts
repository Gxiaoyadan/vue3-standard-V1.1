import service from "@/request/index";
import type { LoginDataItf } from "@/type/login";
import type { UserItf, UserRegisterItf } from "@/type/user";

//登录
export function login (data:LoginDataItf){
    return service({
        url:"/login",
        method:"POST",
        data:data
    })
}
//用户注册
export function register(data:UserRegisterItf){
    return service({
        url:"/register",
        method:"POST",
        data:data
    })
}

//获取用户信息
export function getUserInfo (pageIndex:number,searchParam:string){
    return service({
        url:"/user/qryPageUser",
        method:"get",
        params:{
            pageIndex:pageIndex,
            param:searchParam
        }
    })
}

//修改用户信息
export function modUserInfo(data:UserItf){
    return service({
        url:"/user/modUserInfo",
        method:"POST",
        data:data
    })
}

//删除用户信息
export function delUserInfo (id:string){
    return service({
        url:"/user/delUser",
        method:"get",
        params:{
            id:id
        }
    })
}