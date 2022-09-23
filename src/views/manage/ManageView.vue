<script lang="ts" setup>
import HomeHeader from '@/components/HomeHeader.vue';
import ManageAside from '@/components/ManageAside.vue';
</script>
<template>
  <div>
    <el-container>
      <el-header class="manage-head">
        <HomeHeader />
      </el-header>
      <el-container>
        <el-aside class="manage-aside">
          <ManageAside />
        </el-aside>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<style lang="scss">
.manage-head {
  //background-color: #c6c1a1;
  height: 80px;
}

.manage-aside {
  // background-color: #545c64;
  width: 200px;
}

// .el-main {
//   background-color: gray;
// }
</style>