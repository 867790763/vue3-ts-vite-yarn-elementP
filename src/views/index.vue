<template>
    <el-table :data="tableData" style="width: 100%">
        <el-table-column label="序号" type="selection" width="55" align="center" />
            <el-table-column label="订单编号" prop="orderNumber"/>
            <el-table-column label="提交时间" sortable prop="createTime" />
            <el-table-column label="客户名称" show-overflow-tooltip prop="userName" />
            <el-table-column label="联系方式" prop="customPhone" />
            <el-table-column label="诚意金" prop="deposit" />
            <el-table-column label="支付方式" prop="paymentMethod" />
            <!-- <el-table-column label="项目名称" width="200" align="left" show-overflow-tooltip prop="xsmc" /> -->
            <el-table-column label="房源地址" prop="fyxx" />
            <el-table-column label="订单状态" prop="status" />
            <el-table-column label="订单初审" prop="shzt" />
            <el-table-column label="订单复审" prop="eszt" />
    </el-table>
</template>

<script setup lang="ts">
import {ref, onMounted} from 'vue'
import {ElTable, ElTableColumn} from 'element-plus'
const tableData: Array<Object> = ref([])

onMounted(() => {
    tableData.value = [
        { orderNumber: 'DF1232432Q312', userName: '微信用户1234', createTime: '2021-02-20' },
    ]
})
</script>