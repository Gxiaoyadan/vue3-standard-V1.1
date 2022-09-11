<script lang="ts" setup>
import ManageHeader from '@/components/ManageHeader.vue';
import ManageAside from '@/components/ManageAside.vue';
</script>
<template>
  <div>
    <el-container>
      <el-header>
        <ManageHeader />
      </el-header>
      <el-container>
        <el-aside>
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
.el-header {
  background-color: aqua;
  height: 80px;
}

.el-aside {
  // background-color: #545c64;
  width: 200px;
}

// .el-main {
//   background-color: gray;
// }
</style>