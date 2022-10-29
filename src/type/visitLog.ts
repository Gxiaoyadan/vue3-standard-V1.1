export interface VisitLogItf {
    id: string
    target: string
    userId: string
    visitTime: string
    userIP: string
}

export class VisitLogData {
    VisitLogTableData: VisitLogItf[] = [{
        id: "",
        target: "",
        userId: "",
        visitTime: "",
        userIP: "",
    }]
}