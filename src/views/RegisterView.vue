<template>
    <div id="register">
        <el-form ref="ruleFormRef" :model="userRegisterData" status-icon :rules="rules" label-width="100px"
            label-position="left" size="large" class="demo-ruleForm" hide-required-asterisk:false >
            <el-form-item label="Name：" prop="name" :required=true>
                <el-input v-model="userRegisterData.name" type="name" />
            </el-form-item>
            <el-form-item label="Password：" prop="password" class="formItem" :required=true>
                <el-input v-model="userRegisterData.password" type="password" />
            </el-form-item>
            <el-form-item label="CheckPass：" prop="checkPass" :required=true>
                <el-input v-model="userRegisterData.checkPass" type="password" />
            </el-form-item>
            <el-form-item label="Phone：" prop="phone">
                <el-input v-model="userRegisterData.phone" type="phone" />
            </el-form-item>
            <el-form-item label="Sex：" prop="sex">
                <el-select v-model="userRegisterData.sex" class="m-2" placeholder="Select" size="large">
                    <el-option v-for="item in userOption.sex" :key="item.value" :label="item.label"
                        :value="item.value" />
                </el-select>
            </el-form-item>
            <el-form-item label="Birthday：" prop="birthday">
                <!-- <el-input v-model="user.birthday" type="birthday"/> -->
                <el-date-picker v-model="userRegisterData.birthday" type="date" value-format="YYYY-MM-DD"
                    placeholder="Pick a day" />
            </el-form-item>
            <el-form-item label="Email：" prop="email">
                <el-input v-model="userRegisterData.email" type="email" />
            </el-form-item>
            <el-form-item style="float: right;">
                <el-button type="primary" @click="submitForm(ruleFormRef)">Register</el-button>
                <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
  
<script lang="ts" setup>
import { reactive, ref, type Ref } from 'vue'
import type { FormInstance } from 'element-plus'
import { useRouter } from 'vue-router'
import { register } from '../request/userApi';
import { UserData } from '@/type/user';


const router = useRouter();
const ruleFormRef = ref<FormInstance>()
const userRegisterData = ref(new UserData().userRegisterData)
const userOption = new UserData().userOption


const validateName = (rule: any, value: any, callback: any) => {
    if (value === '') {
        callback(new Error('Please input the name'))
    } else {
        callback()
    }
}

const validatePass = (rule: any, value: any, callback: any) => {
    if (value === '') {
        callback(new Error('Please input the password'))
    } else {
        if (userRegisterData.value.checkPass !== '') {
            if (!ruleFormRef.value) return
            ruleFormRef.value.validateField('checkPass', () => null)
        }
        callback()
    }
}
const validatePass2 = (rule: any, value: any, callback: any) => {
    if (value === '') {
        callback(new Error('Please input the password again'))
    } else if (value !== userRegisterData.value.password) {
        callback(new Error("Two inputs don't match!"))
    } else {
        callback()
    }
}

const resetForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.resetFields()
}

const rules = reactive({
    name: [{ validator: validateName, trigger: 'blur' }],
    checkPass: [{ validator: validatePass2, trigger: 'blur' }],
    password: [{ validator: validatePass, trigger: 'blur' }],
})

const submitForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.validate((valid) => {
        if (valid) {
            register(userRegisterData.value).then((res)=>{
                console.log(res);
                
                router.push("/login")
            })
            console.log('submit!')
        } else {
            console.log('error submit!')
            return false
        }
    })
}


</script>
<style lang="scss" scoped>
#register {
    /* background-color: green; */
    width: 800px;
    margin-left: 400px;
    margin-top: 100px;
    background-color: aliceblue;
    padding: 50px;
    border-radius: 10px;
}
</style>