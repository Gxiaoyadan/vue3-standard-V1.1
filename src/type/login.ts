export interface LoginDataItf{
    idOrEmail:string
    password:string
}

export class LoginData{
    ruleForm: LoginDataItf = {
        idOrEmail:"",
        password:""
    }
}