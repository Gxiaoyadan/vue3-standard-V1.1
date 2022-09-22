<template>
    <div class="layout-box">
        <el-container>
            <el-header class="cont-head">
                <p class="blog-title">{{blogdata.title}}</p>
                <el-row class="title-addition">
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
            <el-main>
                <p class="blog-content">
                    {{blogdata.content}}
                </p>
            </el-main>
            <el-footer class="blog-footer">
                <el-input v-model="textarea" :rows="10" type="textarea" placeholder="Please input" />
                <p class="reviewCount-p">总共已有 0 条评论</p>
                <el-button class="review-button" type="primary" size="large">Submit Review</el-button>
                <div class="review-content">
                    这里是回复区
                </div>
            </el-footer>
        </el-container>
    </div>
</template>
<script lang="ts" setup>
import { findBlogByIdApi } from '@/request/blogApi';
import { BlogData } from '@/type/blog';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
const route = useRoute()
//使用params传参：如果提供了 path，params 会被忽略，但query 没有这种情况，此时需要提供路由的 name 或手写完整的带有参数的 path
//经测试，使用params时，即使使用name也无法传参
// let blogId = route.params
const blogId: any = route.query.blogId
const blogdata = ref(new BlogData().blogOne)
const textarea = ref('')

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
    background-color: #c6c1a1;
    margin: auto;
    padding: 50px;
    height: 100vh;

    .cont-head {
        height: 100px;
    }

    .blog-title {
        //单词间间距，不适用于中文
        //word-spacing: 30px;
        height: 70px;
        letter-spacing: 2px;
        font-size: 25px;
        font-weight: 800;

    }

    .title-addition {
        margin-top: 10px;
        font-size: small;
        color: grey;
    }

    .blog-content {
        letter-spacing: 2px;
        line-height: 2;
    }

    .blog-footer {
        height: 300px;

        .review-button {
            float: right;
            margin-top: 10px;
        }

        .reviewCount-p {
            margin-top: 10px;
            float: left;
        }

        .review-content {
            width: 100%;
            float: left;
            margin-top: 20px;
            background-color: royalblue;
        }
    }

}
</style>