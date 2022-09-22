<template>
    <div class="head-box">
        <el-row :gutter="20">
            <el-col :span="4">
                <img class="logo" @click="backHome" src="../assets/logo.png" alt="">
            </el-col>
            <el-col :span="2">
            </el-col>
            <el-col :span="10">
                <el-button class="navigation-button" color="#c6c1a1" @click="blog">Blog cicles</el-button>
                <el-button class="navigation-button" color="#c6c1a1">Forum</el-button>
                <el-button class="navigation-button" color="#c6c1a1">Announcement</el-button>
                <el-button class="navigation-button" color="#c6c1a1" @click="manage">Manage</el-button>
            </el-col>
            <el-col :span="4">
                <el-button class="button-head" type="success" @click="login">Login in</el-button>
                <el-button class="button-head" type="success" @click="register">Register</el-button>
            </el-col>
            <el-col :span="4">
                <el-button class="button-head" type="danger" @click="userOut">Login out</el-button>
            </el-col>
        </el-row>
    </div>
</template>
<script lang="ts" setup>

import router from '@/router';
import { logOut } from '../request/userApi';

const userOut = () => {
    logOut().then((res) => {
        console.log(res);
        localStorage.removeItem("token")
        router.push("/login")
    })
}

const login = () => {
    router.push("/login")
}
const register = () => {
    router.push("/register")
}
const blog = () => {
    router.push("/blog")
}
const backHome = () => {
    router.push("/")
}
const manage = () => {
    router.push("/manage")
}
</script>
<style lang="scss" scoped>

.logo {
    height: 80px;
    float: right;
    margin: auto;
}

.navigation-button {
    text-align: center;
    height: 50px;
    width: 150px;
    margin-top: 20px;
    // color: darkblue;
    font-size: large;

}

h2,
.button-head {
    text-align: center;
    height: 40px;
    margin-top: 20px;
}
</style>