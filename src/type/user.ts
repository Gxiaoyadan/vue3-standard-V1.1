
export interface UserItf {
    id: string
    name: string
    phone: string
    sex: string
    birthday: string
    email: string
    role: string
    registerDateTime: string
    accountStatus: string
}

export interface UserRegisterItf {
    name: string
    password: string,
    checkPass:string,
    phone: string
    sex: string
    birthday: string
    email: string
}

export class UserData {
    userTableData: UserItf[] = [{
        id: "",
        name: "",
        phone: "",
        sex: "",
        birthday: "",
        email: "",
        role: "",
        registerDateTime: "",
        accountStatus: "",
    }]
    userData: UserItf = {
        id: "",
        name: "",
        phone: "",
        sex: "",
        birthday: "",
        email: "",
        role: "",
        registerDateTime: "",
        accountStatus: "",
    }
    userRegisterData: UserRegisterItf = {
        name: '',
        password: '',
        checkPass:'',
        phone: '',
        sex: '',
        birthday: '',
        email: '',
    }
    userOption = {
        sex: [
            {
                value: 'Male',
                label: 'Male',
            },
            {
                value: 'Female',
                label: 'Female',
            }
        ],
        role: [
            {
                value: 'Ordinary',
                label: 'Ordinary',
            },
            {
                value: 'Administrator',
                label: 'Administrator',
            }
        ],
        status: [
            {
                value: 'Normal',
                label: 'Normal',
            },
            {
                value: 'Freeze',
                label: 'Freeze',
            },
            {
                value: 'Logout',
                label: 'Logout',
            }
        ]
    }
}
