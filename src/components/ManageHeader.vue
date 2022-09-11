<template>
    <el-row :gutter="20">
        <el-col :span="4">
            <img class="logo" src="../assets/logo.png" alt="">
        </el-col>
        <el-col :span="16">
            <h2>管理系统</h2>
        </el-col>
        <el-col :span="4">
            <span class="quit-login">退出登录</span>
        </el-col>
    </el-row>

</template>
<style lang="scss" scoped>
    
.logo {
    height: 80px;

}
h2,
.quit-login {
    text-align: center;
    height: 80px;
    line-height: 80px;
}
</style>