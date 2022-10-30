<template>
    <div class="head-box">
        <el-row :gutter="20">
            <el-col :span="4">
                <img class="logo" @click="backHome" src="../assets/logo.png" alt="">
            </el-col>
            <el-col :span="2">
            </el-col>
            <el-col :span="14">
                <el-button class="navigation-button" color="#c6c1a1" @click="blog">Blog cicles</el-button>
                <el-button class="navigation-button" color="#c6c1a1">Forum</el-button>
                <el-button class="navigation-button" color="#c6c1a1">Announcement</el-button>
                <el-button class="navigation-button" color="#c6c1a1" @click="manage">Manage</el-button>
            </el-col>
            <!-- <el-col :span="4">
                <el-button class="button-head" type="success" @click="login">Login in</el-button>
                <el-button class="button-head" type="success" @click="register">Register</el-button>
            </el-col> -->
            <el-col :span="4">
                <el-dropdown v-if="isLogin">
                    <span class="el-dropdown-link">
                        <div>
                            <el-avatar  class="user-portrait" :icon="UserFilled" />
                        </div>
                    </span>
                    <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item @click="login">Login in</el-dropdown-item>
                            <el-dropdown-item @click="register">Register</el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>

                <el-dropdown v-else >
                    <span class="el-dropdown-link">
                        <div>
                            <el-avatar class="user-portrait" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
                        </div>
                    </span>
                    <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item>Personal center</el-dropdown-item>
                            <el-dropdown-item>My blogs</el-dropdown-item>
                            <el-dropdown-item @click="userOut">Log out</el-dropdown-item>
                            <!-- <el-dropdown-item divided>Log out</el-dropdown-item> -->
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
            </el-col>
        </el-row>
    </div>
</template>
<script lang="ts" setup>

import router from '@/router';
import { logOut } from '../request/userApi';

import { UserFilled } from '@element-plus/icons-vue'
import { ref, watch } from 'vue';

let isLogin:boolean = true;
let tokenTmp = ref(localStorage.getItem("token"));

const userOut = () => {
    console.log(localStorage.getItem("token"))
    if (localStorage.getItem("token") == null) {
        login()
    } else {
        logOut().then((res) => {
            console.log(res);
            localStorage.removeItem("token")
            router.push("/login")
        })
    }
}

watch(tokenTmp,(newVal)=>{
    // console.log(newVal)
    if(newVal!=null){
        isLogin=false;
    }
    
},{immediate:true})

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
.head-box {
    //background-color: red;
}

.logo {
    height: 80px;
    float: right;
    margin: auto;
    cursor: pointer;
    /*鼠标悬停变小手*/

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

.user-portrait {

    text-align: center;
    height: 40px;
    margin-top: 20px;
    cursor: pointer;
    /*鼠标悬停变小手*/
}

</style>