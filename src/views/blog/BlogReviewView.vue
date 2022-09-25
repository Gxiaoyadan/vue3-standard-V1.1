<template>
    <div class="Review-edit">
        <el-input v-model="textarea" :rows="5" type="textarea" placeholder="Please input" />
        <p class="Review-edit-p">总共已有 0 条评论</p>
        <el-button class="Review-edit-button" type="primary" size="large" @click="addReview">Submit Review</el-button>
    </div>
    <div class="Review-show">
        <div v-for="review in reviewContent">
            <div class="Review-show-content">
                <el-row :gutter="20">
                    <el-col :span="24" class="Review-show-content-name">
                        {{review.userName}}
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="24" class="Review-show-content-content">
                        {{review.content}}
                    </el-col>
                </el-row>
                <el-row :gutter="20" class="Review-show-content-additional">
                    <el-col :span="10">
                        时间：{{review.reviewTime}}
                        
                    </el-col>
                    <el-col :span="2">
                        赞: {{review.likeTotal}}
                    </el-col>
                    <el-col :span="12">
                        踩：{{review.hateTotal}}
                    </el-col>
                </el-row>
            </div>
            <el-divider></el-divider>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { addReviewApi, findReviewApi } from '@/request/blogApi';
import { ReviewData } from '@/type/blog';
import { ElNotification } from 'element-plus';

import { nextTick, onMounted, ref } from 'vue';

const reviewContent = ref(new ReviewData().reviewContent)
const textarea = ref('')
const reviewType = ref('1')//回复类型，默认1：回复博客内容

//打开即执行
onMounted(() => {
    //加载该页面等待1s后，加载回复（否则获取不到blogId),目前没有查到其他好的方案---------待优化
    setTimeout(() => {
        findReview()
    }, 1000)
    // nextTick(()=>{
    //     findReview()
    // })
})


const addReview = () => {
    //暂时没有回复评论功能，评论ID送空---后期扩展
    addReviewApi(props.blogId, "", textarea.value, reviewType.value).then((res) => {
        successTip(res.message)
        //成功回复后，刷新回复内容
        textarea.value=''
        findReview()
    })
}

const findReview = () => {
    findReviewApi(props.blogId, "", reviewType.value).then((res) => {
        console.log(res)
        reviewContent.value = res.data
    })
}

//语法糖使用defineProps接收父组件参数
const props = defineProps({
    blogId: String,
});

const successTip = (message: any) => {
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

.Review-show {
    height: 100%;
    width: 100%;
    background-color: white;
    margin-top: 10px;
    padding: 10px;
    float: left;

    .Review-show-content {
        // padding--内边距
        margin-top: 10px;
        background-color: white;


        .Review-show-content-name {
            font-size: small;
            color: gray;
        }

        .Review-show-content-introductory {
            font-size: small;
            color: grey;
        }

        .Review-show-content-additional {
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
}
</style>