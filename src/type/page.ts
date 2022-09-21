export interface PageItf{
    pageIndex:number,
    pageCount:number
}

export class PageData{
    // 默认初始页面第一页，总页数5条
    pageData: PageItf={
        pageIndex:1,
        pageCount:5,
    }
}