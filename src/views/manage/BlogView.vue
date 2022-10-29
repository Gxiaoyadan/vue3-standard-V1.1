<template>
    <div class="BlogTitle">
        <h4>Blog Manager</h4>
    </div>
    <div class="BlogSearch">
        <el-input v-model="searchParam" placeholder="Please input Keyword" clearable />
        <el-button type="primary" round v-on:click="getBlog">Search</el-button>

    </div>
    <el-table :data="tableData" stripe highlight-current-row style="width: 100%" size="default"
        height="600">
        <el-table-column prop="id" label="Id" width="100" />
        <el-table-column prop="title" label="Title" width="600" />
        <el-table-column prop="userId" label="UserId" width="100" />
        <el-table-column prop="userName" label="UserName" width="150" />
        <el-table-column prop="pv" label="PV" width="80" />
        <el-table-column prop="classify" label="Classify" width="140" />
        <el-table-column prop="publishTime" label="PublishTime" width="180" />
        <el-table-column prop="lastModTime" label="LastModTime" width="200" />
        <el-table-column label="Operations" width="120">
            <template #default="scope">
                <el-popconfirm title="Are you sure to delete this?" @confirm="handleDelete(scope, scope.row)"
                    width="300px">
                    <template #reference>
                        <el-button size="default" type="danger">Delete</el-button>
                    </template>
                </el-popconfirm>
            </template>
        </el-table-column>
    </el-table>

    <div class="page">
        <el-pagination v-model:current-page="pageData.pageIndex" @current-change="getBlog" background
            layout="prev, pager, next" :page-count="pageData.pageCount" />
    </div>
</template>
  
<script lang="ts" setup>
import { findBlogForManageApi , delBlogForManageApi } from '@/request/blogApi';
import { BlogData, type BlogItf } from '@/type/blog';
import { PageData } from '@/type/page';
import { ElNotification } from 'element-plus';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const tableData = ref(new BlogData().blogContent)
const pageData = ref(new PageData().pageData)
const searchParam = ref('')



//打开即执行
onMounted(() => {
    getBlog()
})



const getBlog = () => {
    findBlogForManageApi(pageData.value.pageIndex, searchParam.value).then((res) => {
        console.log(res.data);
        tableData.value = res.data.blogList
        pageData.value.pageCount = res.data.pageCount
    })
}

const delBlog = (id: string) => {
    delBlogForManageApi(id).then((res) => {
        console.log("delRes:", res)
        console.log("del:" + pageData.value.pageIndex + "---" + searchParam.value)
        if(res.code==2001){
            successTip("Deleted Success!")
        }
        getBlog()
    })
}

const handleDelete = (index: any, row: BlogItf) => {
    console.log(index, row)
    delBlog(row.id)
    //location.reload()
    //replace无法重新加载当前页面路径，其他路径可以，未解决
    //router.replace({ path: '/manage/user' })
}

const successTip = (message:any) => {
  ElNotification.success({
    title: 'Success',
    message: message,
    showClose: false,
  })
}

</script>
<style lang="scss" scoped>
.BlogTitle {
    text-align: center;
    width: 60%;
    height: 60px;
    line-height: 60px;
    float: left;
}

.BlogSearch {
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