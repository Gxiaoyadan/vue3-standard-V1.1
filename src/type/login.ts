export interface LoginDataItf{
    name:string
    password:string
}

export class LoginData{
    ruleForm: LoginDataItf = {
        name:"",
        password:""
    }
}