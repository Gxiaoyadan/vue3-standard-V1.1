export interface blogItf {
    id: string
    title: string
    content: string
    publishTime: string
    userId: string
    userName: string
    PV: string
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
        PV: '',
        classify: '',
        lastModTime: '',
    }]
}