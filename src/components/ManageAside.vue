<template>
    <!-- router开启路由模式，通过下面的index进行路由跳转 -->
    <el-menu active-text-color="grey" background-color="white" text-color="black" :default-active="default_path"
        router>
        <el-menu-item :index="item.path" v-for="item in menus" :key="item.path">
            <span class="menu-title">{{item.meta.title}}</span>
            
        </el-menu-item>
        <!-- <el-divider /> -->
    </el-menu>
</template>
<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router';

const router = useRouter();
// const route = useRoute();//活跃状态路由
console.log(router.getRoutes());//获取所有路由信息

//筛选要展示的路由信息
const menus = router.getRoutes().filter(v => v.meta.isShow)

// 获取要转发的路由信息
// const default_path = router.getRoutes().filter(v => v.redirect)[0].redirect
const default_path = router.currentRoute.value.path//获取当前路线的path

// console.log(menus,default_path);
console.log(router);
console.log(default_path);

// const active_menu = route.path


</script>
<style lang="scss" scoped>
.el-menu {
    background-color: gainsboro;
    // 100vh整个页面高度-顶部菜单栏高度，撑满屏幕
    height: calc(100vh - 80px);
}
// .menu-title{
//     height: 95%;
//     width: 100%;

// }
</style>