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

//管理页面查询blog
export function findBlogForManageApi(pageIndex:number,param:string){
    return service({
        url:"/blog/findBlogForManage",
        method:"GET",
        params:{
            pageIndex:pageIndex,
            param:param
        }
    })
}
//管理页面删除blog
export function delBlogForManageApi (id:string){
    return service({
        url:"/blog/delBlogForManage",
        method:"get",
        params:{
            id:id
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

export function addReviewApi(reviewBlogId:String| undefined,reviewCommentId:string,content:string,reviewType:string){
    return service({
        url:"/blog/addReview",
        method:"POST",
        data:{
            reviewBlogId:reviewBlogId,
            reviewCommentId:reviewCommentId,
            content:content,
            reviewType:reviewType,
        },
    })
}

export function findReviewApi(reviewBlogId:string| undefined,reviewCommentId:string,reviewType:string){
    return service({
        url:"/blog/findReview",
        method:"POST",
        data:{
            reviewBlogId:reviewBlogId,
            reviewCommentId:reviewCommentId,
            reviewType:reviewType,
        }
    })

}