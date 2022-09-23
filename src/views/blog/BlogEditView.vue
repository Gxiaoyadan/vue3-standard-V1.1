<template>
    <div class="edit-box">
        <div class="edit-head">
            <h2 class="edit-head-p">标题：</h2>
            <el-input v-model="inputTitle" class="edit-head-input" size="large" placeholder="Please input title" />
        </div>
        <div class="edit-intro">
            <h4 class="edit-intro-p">简 介：</h4>
            <el-input v-model="inputIntro" class="edit-intro-input" :rows="2" type="textarea" placeholder="Please input intro" />
        </div>
        <div style="border: 1px solid #ccc">
            <Toolbar style="border-bottom: 1px solid #ccc" :editor="editorRef" :defaultConfig="toolbarConfig"
                :mode="mode" />
            <Editor style="height: 500px; overflow-y: hidden;" v-model="valueHtml" :defaultConfig="editorConfig"
                :mode="mode" @onCreated="handleCreated" />
        </div>
        <div class="">
            <el-button class="submit-btn" type="primary" size="large" @click="release">Release</el-button>
        </div>
    </div>
</template>
<script lang="ts" setup>
import '@wangeditor/editor/dist/css/style.css' // 引入 css

import { onBeforeUnmount, ref, shallowRef, onMounted } from 'vue'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import { addBlogApi } from '@/request/blogApi';
import { ElNotification } from 'element-plus';
import router from '@/router';


// 编辑器实例，必须用 shallowRef
const editorRef = shallowRef()

const editor = editorRef.value

const inputTitle = ref('')
const inputIntro = ref('')

const mode = 'default';//simple
// 内容 HTML
const valueHtml = ref('')
const toolbarConfig = {}
const editorConfig = { placeholder: '请输入内容...' }



// 模拟 ajax 异步获取内容
// onMounted(() => {
//     setTimeout(() => {
//         valueHtml.value = '<p>模拟 Ajax 异步设置内容</p>'
//     }, 1500)
// })



// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
    if (editor == null) return
    editor.destroy()
})

const handleCreated = (editor: any) => {
    editorRef.value = editor // 记录 editor 实例，重要！
}

const release = ()=>{
    addBlogApi(inputTitle.value,inputIntro.value,valueHtml.value).then((resp)=>{
        if(resp.code==2001){
            successTip(resp.message)
            router.push("/blog")
        }
        console.log(resp)
    })
}

const successTip = (message:any) => {
  ElNotification.success({
    title: 'Success',
    message: message,
    showClose: false,
  })
}

</script>    
<style lang="scss">
.edit-box {
    width: 75%;
    height: 100%;
    margin: auto;
    padding: 10px;
    background-color: whitesmoke;
}

.edit-head {
    margin-top: 30px;
    margin-bottom: 30px;
    padding-left: 5%;
    .edit-head-p {
        float: left;
        padding: auto;
    }

    .edit-head-input {
        width: 40%;
        height: 40px;
    }


}
.edit-intro{
    margin-top: 30px;
    margin-bottom: 30px;
    padding-left: 5%;
    .edit-intro-p {
        float: left;
        padding: auto;
    }

    .edit-intro-input {
        width: 80%;
    }
}

.submit-btn {
    width: 200px;
    height: 50px;
    margin-top: 10px;
    float: right;
}
</style>