<script lang="ts" setup>
import HomeHeader from '@/components/HomeHeader.vue';
import ManageAside from '@/components/ManageAside.vue';
</script>
<template>
  <div class="manage-box">
    <el-container>
      <el-header class="manage-head">
        <HomeHeader />
      </el-header>
      <el-container>
        <el-aside class="manage-aside">
          <ManageAside />
        </el-aside>
        <el-main class="manage-main">
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<style lang="scss">
.manage-box{
  background-image: url("../../assets/homebg.jpg");
}
.manage-head {
  //background-color: #c6c1a1;
  height: 80px;
}

.manage-aside {
  // background-color: #545c64;
  width: 200px;
}

.manage-main {
  background-color: ghostwhite;
}
</style>