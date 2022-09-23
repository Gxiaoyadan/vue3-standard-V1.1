<template>
    <div class="layout-box">
        <el-container>
            <el-header class="cont-head">
                <p class="cont-head-title">{{blogdata.title}}</p>
                <el-row class="cont-head-addition">
                    <el-col :span="2">
                        作者：{{blogdata.userName}}
                    </el-col>
                    <el-col :span="2">
                        分类：{{blogdata.classify}}
                    </el-col>
                    <el-col :span="2">
                        浏览：{{blogdata.pv}}
                    </el-col>
                    <el-col :span="2">
                    </el-col>
                    <el-col :span="8">

                    </el-col>
                    <el-col :span="6">
                        最后修改于：{{blogdata.lastModTime}}
                    </el-col>
                    <el-col :span="2">
                        <el-button type="danger">Collection</el-button>
                    </el-col>
                </el-row>
            </el-header>
            <el-main class="cont-main">
                <p class="cont-main-intro">
                    简介：{{blogdata.intro}}
                </p>
                <p class="cont-main-content">
                <p v-html="blogdata.content"></p>
                </p>
            </el-main>

            <div class="review-content">
                <BlogReviewView :blogId="blogdata.id"/>
            </div>
        </el-container>
    </div>
</template>
<script lang="ts" setup>
import { findBlogByIdApi } from '@/request/blogApi';
import { BlogData } from '@/type/blog';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router'
import BlogReviewView from './BlogReviewView.vue'


const route = useRoute()
//使用params传参：如果提供了 path，params 会被忽略，但query 没有这种情况，此时需要提供路由的 name 或手写完整的带有参数的 path
//经测试，使用params时，即使使用name也无法传参
// let blogId = route.params
const blogId: any = route.query.blogId
const blogdata = ref(new BlogData().blogOne)


onMounted(() => {
    getBlogCont()
})

const getBlogCont = () => {
    findBlogByIdApi(blogId).then((res) => {
        blogdata.value = res.data
    })
}

</script>
<style lang="scss" scoped>
.layout-box {
    width: 70%;
    background-color: whitesmoke;
    margin: auto;
    padding: 50px;
    //height: 100%;

    .cont-head {
        //根据内容变高度，需设置100%(有的不设置也可以，但这里不设置不行)
        height: 100%;
        background-color: white;

        .cont-head-title {
            //单词间间距，不适用于中文
            //word-spacing: 30px;
            //height: 50px;
            letter-spacing: 2px;
            font-size: 20px;
            font-weight: 800;
            //background-color: aqua;
            //padding-left: 50px;
            margin-top: 20px;
        }

        .cont-head-addition {
            margin-top: 15px;
            padding-bottom: 10px;
            font-size: small;
            color: grey;
            //background-color: rgb(38, 44, 44);
        }


    }


    .cont-main {
        background-color: white;
        margin-top: 5px;

        .cont-main-intro {
            //background-color: rgb(204, 13, 13);
            font-size: normal;
            color: grey;
            //margin-top: 20px;
        }

        .cont-main-content {
            letter-spacing: 2px;
            line-height: 2;
            margin-top: 20px;
            //background-color: rgb(75, 40, 40);


        }
    }

}
</style>