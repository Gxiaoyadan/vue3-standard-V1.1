<template>
    <div class="userTitle">
        <h4>User Manager</h4>
    </div>
    <div class="userSearch">
        <el-input v-model="searchParam" placeholder="Please input Id or Name" clearable />
        <el-button type="primary" round v-on:click="getUser">Search</el-button>

    </div>
    <el-table v-loading="loading" :data="tableData" stripe highlight-current-row style="width: 100%" size="default"
        height="600">
        <el-table-column prop="id" label="Id" width="100" />
        <el-table-column prop="name" label="Name" width="120" />
        <el-table-column prop="phone" label="Phone" width="180" />
        <el-table-column prop="sex" label="Sex" width="100" />
        <el-table-column prop="birthday" label="Birthday" width="180" />
        <el-table-column prop="email" label="Email" width="180" />
        <el-table-column prop="role" label="Role" width="140" />
        <el-table-column prop="registerDateTime" label="RegisterDateTime" width="200" />
        <el-table-column prop="accountStatus" label="Status" width="140" />
        <el-table-column label="Operations" width="240">
            <template #default="scope">
                <el-button size="default" type="primary" @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
                <el-popconfirm title="Are you sure to delete this?"  @confirm="handleDelete(scope, scope.row)" width="300px">
                    <template #reference>
                        <el-button size="default" type="danger" >Delete</el-button>
                    </template>
                </el-popconfirm>
            </template>
        </el-table-column>
    </el-table>

    <!-- Edit User Dialog -->
    <el-dialog v-model="dialogFormVisible" title="Edit UserInfo" width="25%">
        <el-form :model="modUserData" label-position="left" label-width="150px">
            <el-form-item label="User Id:">
                <el-input v-model="modUserData.id" autocomplete="off" disabled />
            </el-form-item>
            <el-form-item label="User Name:">
                <el-input v-model="modUserData.name" autocomplete="off" />
            </el-form-item>
            <el-form-item label="User Phone:">
                <el-input v-model="modUserData.phone" autocomplete="off" />
            </el-form-item>
            <el-form-item label="User Sex:">
                <el-select v-model="modUserData.sex" class="m-2" placeholder="Select" size="default">
                    <el-option v-for="item in modUserOption.sex" :key="item.value" :label="item.label"
                        :value="item.value" />
                </el-select>
            </el-form-item>
            <el-form-item label="Birthday：">
                <!-- <el-input v-model="modUserData.birthday" type="birthday"/> -->
                <el-date-picker v-model="modUserData.birthday" type="date" value-format="YYYY-MM-DD"
                    placeholder="Pick a day" />
            </el-form-item>
            <el-form-item label="User Email:">
                <el-input v-model="modUserData.email" autocomplete="off" />
            </el-form-item>
            <el-form-item label="User Role:">
                <el-select v-model="modUserData.role" class="m-2" placeholder="Select" size="default">
                    <el-option v-for="item in modUserOption.role" :key="item.value" :label="item.label"
                        :value="item.value" />
                </el-select>
            </el-form-item>
            <el-form-item label="RegisterTime:">
                <el-input v-model="modUserData.registerDateTime" autocomplete="off" disabled />
            </el-form-item>
            <el-form-item label="User Status:">
                <el-select v-model="modUserData.accountStatus" class="m-2" placeholder="Select" size="default"
                    disabled:true>
                    <el-option v-for="item in modUserOption.status" :key="item.value" :label="item.label"
                        :value="item.value" />
                </el-select>
            </el-form-item>
        </el-form>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="dialogFormVisible = false">Cancel</el-button>
                <el-button type="primary" @click="modUser()">Confirm</el-button>
            </span>
        </template>
    </el-dialog>

    <div class="page">
        <el-pagination v-model:current-page="pageData.pageIndex" @current-change="getUser" background
            layout="prev, pager, next" :page-count="pageData.pageCount" />
    </div>
</template>
  
<script lang="ts" setup>import { delUserInfo, getUserInfo, modUserInfo } from '@/request/api';

import { PageData } from '@/type/page';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { UserData, type UserItf } from '../type/user';

const router = useRouter();
const tableData = ref(new UserData().userTableData)
const modUserData = ref(new UserData().userData)
const modUserOption = new UserData().userOption
const pageData = ref(new PageData().pageData)
const searchParam = ref('')
const dialogFormVisible = ref(false)
const loading = ref(false)



//打开即执行
onMounted(() => {
    getUser()
})



const getUser = () => {
    getUserInfo(pageData.value.pageIndex, searchParam.value).then((res) => {
        console.log(res.data);

        tableData.value = res.data.userList
        pageData.value.pageCount = res.data.pageCount
    })
}

const modUser = () => {
    loading.value = true
    modUserInfo(modUserData.value).then((res) => {
        dialogFormVisible.value = false
        console.log("modRes:", res)
        location.reload();
        loading.value = false
    })
}

const delUser = (id:string) => {
    loading.value = true
    delUserInfo(id).then((res) => {
        console.log("delRes:", res)
        location.reload();
    })
}

const handleEdit = (index: number, row: UserItf) => {
    console.log(index, row)
    modUserData.value = row
    dialogFormVisible.value = true
}
const handleDelete = (index: any, row: UserItf) => {
    console.log(index, row)
    delUser(row.id)
    location.reload();
    //replace无法重新加载当前页面路径，其他路径可以，未解决
    //router.replace({ path: '/manage/user' })
}




</script>
<style lang="scss" scoped>
.userTitle {
    text-align: center;
    width: 60%;
    height: 60px;
    line-height: 60px;
    float: left;
}

.userSearch {
    //   background-color: aliceblue;
    float: right;
    width: 350px;
    height: 60px;
    padding-top: 30px;
    margin-right: 10%;
}

.el-input {
    width: 250px;
}

.el-button {
    margin-left: 20px;
}

.page {
    /* background-color: antiquewhite; */
    margin-right: 100px;
    float: right;
}
</style>