import service from "@/request/index";

export function findBlogApi(pageIndex:number,param:string){
    return service({
        // url:"/blog/"+pageIndex+"/"+param,
        url:"/blog/findBlog",
        method:"GET",
        params:{
            pageIndex:pageIndex,
            param:param
        }
    })
}

export function findBlogByIdApi(blogId:string){
    return service({
        url:"/blog/findBlogById",
        method:"GET",
        params:{
            blogId:blogId,
        }
    })
}

export function addBlogApi(title:string,inputIntro:string,content:string){
    return service({
        url:"/blog/addBlog",
        method:"POST",
        data:{
            title:title,
            intro:inputIntro,
            content:content,
        },
    })
}

export function addReviewApi(originalId:string| undefined,content:string,reviewType:string){
    return service({
        url:"/blog/addReview",
        method:"POST",
        data:{
            originalId:originalId,
            content:content,
            reviewType:reviewType,
        },
    })
}