import service from "@/request/index";

export function findBlogApi(){
    return service({
        url:"/blog",
        method:"GET",
    })
}