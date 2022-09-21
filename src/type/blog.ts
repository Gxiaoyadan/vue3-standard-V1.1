export interface blogItf {
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
export class blogData {
    blogContent: blogItf[] = [{
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
}