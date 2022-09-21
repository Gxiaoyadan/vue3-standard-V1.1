<template>
    <div class="common-layout">
        <el-container>
            <el-aside width="200px">Aside</el-aside>
            <el-main>
                <div class="main-head">
                    <el-button type="success">Release</el-button>
                </div>
                <div class="main-content">
                    <div v-for="item in list">
                        <div class="content-description">
                            <el-row :gutter="20" class="content-title">
                                <el-col :span="24">
                                    {{item.title}}
                                </el-col>
                            </el-row>
                            <el-row :gutter="20" class="content-introductory">
                                <el-col :span="24">
                                    {{item.content}}
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
import { blogData, type blogItf } from '@/type/blog';
import { onMounted, reactive, ref } from 'vue';

//使用reactive无法定义为const（不能被重新赋值），定义为let或var不能同步数据
// let list:blogItf[] = reactive(new blogData().blogContent)
const list = ref(new blogData().blogContent)

//打开即执行
onMounted(() => {
    findBlog()
})

const findBlog = () => {
    findBlogApi().then((res) => {
        console.log("res:", res)
        list.value = res.data
        console.log("list:", list)
    })
}
</script>
<style lang="scss" scope>
.common-layout {
    width: 70%;
    background-color: aliceblue;
    margin: auto;
}

.el-aside {
    background-color: rebeccapurple;
}

.content-description {
    // padding--内边距
    margin-top: 10px;
    background-color: whitesmoke;
}
.content-title{
    font-size: large;
    color: darkblue;
    font-weight: 800;
}
.content-introductory{
    font-size: small;
    color: grey;
}
.content-additional{
    font-size: small;
    color: grey;
}
.el-row{
    // padding:10px;                   四个内边距都是10px
    // padding:5px 10px;   　          上下5px　左右10px
    // padding:5px 10px 15px;          上5px　右10px　下15px   左因为缺省与右相等，则为10px
    // padding:5px 10px 15px 20px;     上5px　右10px　下15px 　左20px

    padding: 5px 50px;
}
</style>