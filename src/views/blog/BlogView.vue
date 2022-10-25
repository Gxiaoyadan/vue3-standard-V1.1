<template>
    <div class="blog-layout">
        <el-container>
            <el-aside width="200px">
                <el-button class="release-button" @click="release" type="primary">Release Blog</el-button>
            </el-aside>
            <el-main>
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
                                        {{item.intro}}
                                    </el-link>
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
                        <el-pagination :pager-count="5" v-model:current-page="pageData.pageIndex" @current-change="findBlog" background
                            layout="prev, pager, next" :page-count="pageData.pageCount" />
                    </div>
                </div>
                <!-- <div class="main-below">
                    <h3>嘿，小丫蛋!</h3>
                </div> -->
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
    background-color: whitesmoke;
    margin: auto;
}

.el-aside {
    background-color: white;

    .release-button {
        text-align: center;
        height: 40px;
        width: 90%;
        margin: 10px;
        color: black;
        font-size: large;

    }
}


.blogSearch {
    
    width: 50%;
    height: 60px;
    padding-top: 30px;
    //设置内边距时，必须设置其对应高度或宽度百分比
    padding-left: 50%;
    background-color: white;
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
        background-color: white;


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
        background-color: white; 
        width: 30%;
        height: 60px;
        margin-top: 10px;
        padding-top: 20px;
        padding-left: 70%;
    }

}

.main-below {
    float: left;
}
</style>