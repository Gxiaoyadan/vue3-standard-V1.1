<template>
    <div class="Review-edit">
        <el-input v-model="textarea" :rows="5" type="textarea" placeholder="Please input" />
        <p class="Review-edit-p">总共已有 0 条评论</p>
        <el-button class="Review-edit-button" type="primary" size="large" @click="addReview">Submit Review</el-button>
    </div>
    <div class="Review-show">
        <el-row :gutter="20">
            <el-col :span="6">
                {{textarea}}
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="6" :offset="6">
                <p>Hello Review</p>
            </el-col>
            <el-col :span="6" :offset="6">
                <div class="grid-content ep-bg-purple" />
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="12" :offset="6">
                <div class="grid-content ep-bg-purple" />
            </el-col>
        </el-row>
    </div>
</template>
<script lang="ts" setup>
import { addReviewApi } from '@/request/blogApi';
import { ReviewData } from '@/type/blog';
import { ElNotification } from 'element-plus';
import { ref } from 'vue';

const reviewOne = ref(new ReviewData().ReviewOne)
const textarea = ref('')
const reviewType = ref('1')//回复类型，默认1：回复博客内容

const addReview = () => {
    addReviewApi(props.blogId , textarea.value, reviewType.value).then((res) => {
        successTip(res.message)
    })
}

//语法糖使用defineProps接收父组件参数
const props = defineProps({
    blogId: String,
});

const successTip = (message:any) => {
  ElNotification.success({
    title: 'Success',
    message: message,
    showClose: false,
  })
}

</script>
<style lang="scss">
.Review-edit {
    height: 100%;
    background-color: white;
    margin-top: 5px;
    .Review-edit-p {
        margin-top: 10px;
        float: left;
    }

    .Review-edit-button {
        float: right;
        margin-top: 10px;
    }
}
.Review-show{
    height: 100%;
    width: 100%;
    background-color: white;
    margin-top: 10px;
    padding: 10px;
    float: left;
}
</style>