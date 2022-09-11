export interface PageItf{
    pageIndex:number,
    pageCount:number
}

export class PageData{
    pageData: PageItf={
        pageIndex:1,
        pageCount:5,
    }
}