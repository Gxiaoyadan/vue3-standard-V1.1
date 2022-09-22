<template>
    <div class="edit-box">
        <div class="edit-head">
            <h2 class="edit-head-p">标题：</h2>
            <el-input v-model="inputTitle" class="edit-head-input" size="large" placeholder="Please Input" />
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
        {{valueHtml}}
        {{editor}}
    </div>
</template>
<script lang="ts" setup>
import '@wangeditor/editor/dist/css/style.css' // 引入 css

import { onBeforeUnmount, ref, shallowRef, onMounted } from 'vue'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import { addBlogApi } from '@/request/blogApi';
import { createEditor } from '@wangeditor/editor';


// 编辑器实例，必须用 shallowRef
const editorRef = shallowRef()

const editor = editorRef.value

const inputTitle = ref('')

const mode = 'default';//simple
// 内容 HTML
const valueHtml = ref('<p>hello</p>')
const toolbarConfig = {}
const editorConfig = { placeholder: '请输入内容...' }

const textHtml = createEditor({ valueHtml })

// 模拟 ajax 异步获取内容
onMounted(() => {
    setTimeout(() => {
        valueHtml.value = '<p>模拟 Ajax 异步设置内容</p>'
    }, 1500)
})



// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {

    if (editor == null) return
    editor.destroy()
})

const handleCreated = (editor: any) => {
    editorRef.value = editor // 记录 editor 实例，重要！
}

const release = ()=>{
    addBlogApi(inputTitle.value,valueHtml.value).then((res)=>{
        console.log(res)
    })
}

</script>    
<style lang="scss">
.edit-box {
    width: 75%;
    margin: auto;
}

.edit-head {
    margin-top: 30px;
    margin-bottom: 30px;
    padding-left: 20%;
    .edit-head-p {
        float: left;
        padding: auto;
    }

    .edit-head-input {
        width: 40%;
        height: 40px;
    }

}

.submit-btn {
    width: 200px;
    height: 50px;
    margin-top: 10px;
    float: right;
}
</style>