<template>
    <div class="blog-layout">
        <el-container>
            <el-aside width="200px">
                <el-button class="release-button" color="#c6c1a1" @click="release">Release Blog</el-button>
            </el-aside>
            <el-main>
                <div class="main-head">

                    <!-- <el-button type="success">Release</el-button> -->
                </div>
                <div class="blogSearch">
                    <el-input v-model="searchParam" placeholder="Please input Keyword" clearable />
                    <el-button type="primary" round v-on:click="findBlog">Search</el-button>

                </div>
                <div class="main-content">
                    <div v-for="item in list">
                        <div class="content-description">
                            <el-row :gutter="20">
                                <el-col :span="24">
                                    <el-link class="content-title" @click="detail(item.id)" :underline="false">
                                        {{item.title}}
                                    </el-link>
                                </el-col>
                            </el-row>
                            <el-row :gutter="20">
                                <el-col :span="24">
                                    <el-link class="content-introductory" @click="detail(item.id)" :underline="false">
                                        {{item.content}}</el-link>
                                </el-col>
                            </el-row>
                            <el-row :gutter="20" class="content-additional">
                                <el-col :span="4">
                                    {{item.userName}}
                                </el-col>
                                <el-col :span="16">
                                    时间：{{item.publishTime}}
                                </el-col>
                                <el-col :span="4">
                                    浏览：{{item.pv}}
                                </el-col>
                            </el-row>
                        </div>
                    </div>
                    <div class="page">
                        <el-pagination v-model:current-page="pageData.pageIndex" @current-change="findBlog" background
                            layout="prev, pager, next" :page-count="pageData.pageCount" />
                    </div>
                </div>
                <div class="main-below">
                    <h3>嘿，小丫蛋!</h3>
                </div>
            </el-main>
        </el-container>
    </div>
</template>
<script lang="ts" setup>
import { findBlogApi } from '@/request/blogApi';
import router from '@/router';
import { BlogData, type BlogItf } from '@/type/blog';
import { PageData } from '@/type/page';
import { onMounted, reactive, ref } from 'vue';


//使用reactive无法定义为const（不能被重新赋值），定义为let或var不能同步数据
// let list:blogItf[] = reactive(new blogData().blogContent)
const list = ref(new BlogData().blogContent)
const pageData = ref(new PageData().pageData)
const searchParam = ref('')
//打开即执行
onMounted(() => {
    findBlog()
})

const findBlog = () => {
    findBlogApi(pageData.value.pageIndex, searchParam.value).then((res) => {
        console.log("res:", res)
        list.value = res.data.blogList
        pageData.value.pageCount = res.data.pageCount
    })
}

const detail = (blogId: string) => {
    router.push({ path: 'blogcont', query: { blogId: blogId } })
}

const release=()=>{
    router.push("/blogedit")
}

</script>
<style lang="scss" scope>
.blog-layout {
    width: 70%;
    background-color: #c6c1a1;
    margin: auto;
}

.el-aside {
    background-color: #a6c1a1;

    .release-button {
        text-align: center;
        height: 50px;
        width: 98%;
        // color: darkblue;
        font-size: large;

    }
}

.main-head {
    float: left;
}

.blogSearch {
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

.main-content {
    float: left;
    width: 100%;

    .content-description {
        // padding--内边距
        margin-top: 10px;
        background-color: gainsboro;


        .content-title {
            font-size: large;
            color: darkblue;
            font-weight: 800;
        }

        .content-introductory {
            font-size: small;
            color: grey;
        }

        .content-additional {
            font-size: small;
            color: grey;
        }

        .el-row {
            // padding:10px;                   四个内边距都是10px
            // padding:5px 10px;   　          上下5px　左右10px
            // padding:5px 10px 15px;          上5px　右10px　下15px   左因为缺省与右相等，则为10px
            // padding:5px 10px 15px 20px;     上5px　右10px　下15px 　左20px

            padding: 5px 50px;
        }
    }

    .page {
        /* background-color: antiquewhite; */
        margin-right: 100px;
        float: right;
    }

}

.main-below {
    float: left;
}
</style>