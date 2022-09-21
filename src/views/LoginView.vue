<template>
    <div class="login-box">
        <div class="login-form">
            <el-form ref="ruleFormRef" :model="ruleForm" status-icon :rules="rules" label-width="120px"
                class="demo-ruleForm">
                <el-form-item label="Name" prop="name">
                    <el-input v-model="ruleForm.name" />
                </el-form-item>
                <el-form-item label="Password" prop="password">
                    <el-input v-model="ruleForm.password" type="password" autocomplete="off" />
                </el-form-item>

                <el-form-item>
                    <el-button type="primary" @click="submitForm(ruleFormRef)">Login</el-button>
                    <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script lang="ts" setup>
import type { FormInstance } from 'element-plus/es/components/form';
import { reactive, ref } from 'vue';
import { LoginData } from '../type/login';
import { login } from '../request/userApi';
import { useRouter } from 'vue-router';

//踩坑：想用的push方法是useRouter()才有的，但是引用的却是useRoute()
const router = useRouter();
const loginData = reactive(new LoginData())

const ruleForm = loginData.ruleForm

//表单输入规则
const rules = {
    name: [
        {
            required: true,//是否必输
            message: "Please input name",
            trigger: "blur"//触发时机：当失去焦点时
        },
        {
            min: 1,//最小字符数
            max: 15,//最大字符数
            message: "The user name should be 3-15 characters long",
            trigger: "blur"
        }
    ],
    password: [
        {
            required: true,//是否必输
            message: "Please input password",
            trigger: "blur"//触发时机：当失去焦点时
        },
        {
            min: 1,//最小字符数
            max: 15,//最大字符数
            message: "The password should be 3-15 characters long",
            trigger: "blur"
        }
    ]
}

//Login
const ruleFormRef = ref<FormInstance>()
//Reset
const resetForm = (formEl: FormInstance | undefined) => {
    //表单为空，直接返回，不做任何处理
    if (!formEl) return
    formEl.resetFields()
    ruleForm.name = ""
    ruleForm.password = ""
}

const submitForm = (formEl: FormInstance | undefined) => {
    //提交时对表单内容进行校验
    if (!formEl) return
    formEl.validate((valid) => {
        if (valid) {
            login(ruleForm).then((res) => {
                console.log(res);

                localStorage.setItem("token", res.data)
                router.push("/manage")
            })
        } else {
            console.log('error submit');

            return false
        }
    })
}


</script>
<style lang="scss" scoped>
.login-box {
    width: 100%;
    height: 100vh;
    background-image: url("../assets/bg.jpg");
}

.login-form {
    background-color: aliceblue;
    padding: 20px;
    width: 35%;
    height: 35%;
    border-radius: 10px;
    position: relative;
    top: 20%;

    // 水平居中
    margin: 0 auto;
}
.demo-ruleForm{
   // background-color: saddlebrown;
   padding: 100px;
    
}
.el-input{
    width: 310px;
}
.el-button{
    margin-top: 20px;
    width: 150px;
}
</style>