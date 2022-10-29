<template>
    <div class="visitLogTitle">
        <h4>VisitLog Manager</h4>
    </div>
    <div class="visitLogSearch">
        <el-input v-model="searchParam" placeholder="Please input userId or IP" clearable />
        <el-button type="primary" round v-on:click="getData">Search</el-button>

    </div>
    <el-table :data="tableData" stripe highlight-current-row style="width: 100%" size="large"
        height="600">
        <el-table-column prop="id" label="Id" width="200" />
        <el-table-column prop="target" label="Target" width="700" />
        <el-table-column prop="userId" label="UserId" width="200" />
        <el-table-column prop="visitTime" label="VisitTime" width="300" />
        <el-table-column prop="userIP" label="UserIP" width="200" />
    </el-table>

    <div class="page">
        <el-pagination v-model:current-page="pageData.pageIndex" @current-change="getData" background
            layout="prev, pager, next" :page-count="pageData.pageCount" />
    </div>
</template>
  
<script lang="ts" setup>
import { getVisitLogInfo } from '@/request/visitLogApi';
import { PageData } from '@/type/page';
import { VisitLogData } from '@/type/visitLog';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const tableData = ref(new VisitLogData().VisitLogTableData)
const pageData = ref(new PageData().pageData)
const searchParam = ref('')

//打开即执行
onMounted(() => {
    getData()
})

const getData = () => {
    getVisitLogInfo(pageData.value.pageIndex, searchParam.value).then((res) => {
        console.log(res.data);

        tableData.value = res.data.dataList
        pageData.value.pageCount = res.data.pageCount
    })
}


</script>
<style lang="scss" scoped>
.visitLogTitle {
    text-align: center;
    width: 60%;
    height: 60px;
    line-height: 60px;
    float: left;
}

.visitLogSearch {
    //   background-color: aliceblue;
    float: right;
    width: 350px;
    height: 60px;
    padding-top: 30px;
    margin-right: 10%;

    .el-input {
        width: 250px;
    }

    .el-button {
        margin-left: 20px;
    }
}



.page {
    /* background-color: antiquewhite; */
    margin-right: 100px;
    float: right;
}
</style>