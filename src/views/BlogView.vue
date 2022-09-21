<template>
    <div class="common-layout">
        <el-container>
            <el-aside width="200px">Aside</el-aside>
            <el-main>
                <div class="main-head">

                </div>
                <div class="main-content">
                    <div v-for="item in list">
                        <el-descriptions column="1">
                            <el-descriptions-item>{{item.title}}</el-descriptions-item>
                            <el-descriptions-item>{{item.content}}</el-descriptions-item>
                            <!-- <el-descriptions>
                                <el-descriptions-item label="Username">{{item.userName}}</el-descriptions-item>
                                <el-descriptions-item label="publishTime">{{item.publishTime}}</el-descriptions-item>
                                <el-descriptions-item label="Place">Suzhou</el-descriptions-item>
                            </el-descriptions> -->
                        </el-descriptions>

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
    width: 80%;
    background-color: aliceblue;
    margin: auto;
}

.el-aside {
    background-color: rebeccapurple;
}

.el-descriptions {
    // padding--内边距
    padding-top: 10px;
}
</style>