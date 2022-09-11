<template>
    <el-row :gutter="20">
        <el-col :span="4">
            <img class="logo" src="../assets/logo.png" alt="">
        </el-col>
        <el-col :span="12">
            <h2>管理系统</h2>
        </el-col>
        <el-col :span="4">
            <router-link to="/login">Login</router-link><br>
            <router-link to="/register">Register</router-link>
        </el-col>
        <el-col :span="4">

            <el-button class="quit-login" type="danger" @click="userOut">Log out</el-button>
        </el-col>
    </el-row>

</template>
<script lang="ts" setup>

import router from '@/router';
import { logOut } from '../request/api';

const userOut = () => {
    logOut().then((res) => {
        console.log(res);
        localStorage.removeItem("token")
        router.push("/login")
    })
}

</script>
<style lang="scss" scoped>
.logo {
    height: 80px;

}

h2,
.quit-login {
    text-align: center;
    height: 40px;
    margin-top: 20px;
}
</style>