<script lang="ts" setup>
import HomeHeader from '@/components/HomeHeader.vue';

</script>
<template>
    <div class="home-box">
        <el-container>
            <el-header>
                <HomeHeader />
            </el-header>
            <el-container>
                <el-main>
                    <router-view />
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>
<style lang="scss" scoped>
.home-box {
    width: 100%;
    height: 100vh;
    background-image: url("../../assets/homebg.jpg");
}

</style>