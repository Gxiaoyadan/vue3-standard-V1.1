import service from "@/request/index";

//获取数据
export function getVisitLogInfo (pageIndex:number,searchParam:string){
    return service({
        url:"/visit/findLog",
        method:"get",
        params:{
            pageIndex:pageIndex,
            param:searchParam
        }
    })
}