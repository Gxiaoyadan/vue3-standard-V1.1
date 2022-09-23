export interface BlogItf {
    id: string
    title: string
    intro: string
    content: string
    publishTime: string
    userId: string
    userName: string
    pv: string
    classify: string
    lastModTime: string
}
export interface ReviewItf {
    id: string
    content: string
    reviewTime: string
    userId: string
    userName: string
    originalId: string
    reviewType: string
    like: string
    hate: string
}
export class BlogData {
    blogContent: BlogItf[] = [{
        id: '',
        title: '',
        intro: '',
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
        intro: '',
        content: '',
        publishTime: '',
        userId: '',
        userName: '',
        pv: '',
        classify: '',
        lastModTime: '',
    }
}

export class ReviewData {
    reviewContent: ReviewItf[] = [{
        id: '',
        content: '',
        reviewTime: '',
        userId: '',
        userName: '',
        originalId: '',
        reviewType: '',
        like: '',
        hate: '',
    }]
    ReviewOne: ReviewItf = {
        id: '',
        content: '',
        reviewTime: '',
        userId: '',
        userName: '',
        originalId: '',
        reviewType: '',
        like: '',
        hate: '',
    }
}