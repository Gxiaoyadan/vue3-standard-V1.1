export interface BlogItf {
    id: string
    title: string
    content: string
    publishTime: string
    userId: string
    userName: string
    pv: string
    classify: string
    lastModTime: string
}
export class BlogData {
    blogContent: BlogItf[] = [{
        id: '',
        title: '',
        content: '',
        publishTime: '',
        userId: '',
        userName: '',
        pv: '',
        classify: '',
        lastModTime: '',
    }]
    blogOne: BlogItf = {
        id: '',
        title: '',
        content: '',
        publishTime: '',
        userId: '',
        userName: '',
        pv: '',
        classify: '',
        lastModTime: '',
    }
}