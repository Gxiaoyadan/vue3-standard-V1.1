<template>
    This is Goods
    <button @click="Down">下载</button>
</template>
<script lang="ts" setup>
import { DownUserInfo } from '@/request/api';
import { requestBase } from '@/type/requestBase';


const Down = () => {
     DownUserInfo().then((res) => {
         console.log(res);
         window.open( requestBase.url+'/download/downUser'+'?checksum='+res.data,'newW')
     })
}
</script>