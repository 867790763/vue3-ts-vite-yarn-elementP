<!-- 使用transition包裹组件可以控制组件的动画，设置name属性后，通过name设置style中的样式，去控制动画全程的过渡属性 -->
<template>
    <div style="float: left;">
        <h3>加宽动画</h3>
        <el-button @click="addWidth">加宽</el-button>
        <el-button @click="width = 100">重置宽度</el-button>
        <div class="box" :style="{width: width + 'px' }"></div>
        <h3>移动动画</h3>
        <div class="box1" v-for="item in 3" style="float: left;margin-left: 2px;"></div>
        <h3>淡入淡出</h3>
        <el-button @click="toggle">toggle</el-button>
        <transition name="table">
            <el-table v-if="isShow" :data="tableData" style="width: 100%">
                <el-table-column label="序号" type="selection" width="55" align="center" />
                    <el-table-column label="订单编号" prop="orderNumber"/>
                    <el-table-column label="提交时间" sortable prop="createTime" />
                    <el-table-column label="客户名称" show-overflow-tooltip prop="userName" />
                    <el-table-column label="联系方式" prop="customPhone" />
                    <el-table-column label="诚意金" prop="deposit" />
                    <el-table-column label="支付方式" prop="paymentMethod" />
                    <el-table-column label="房源地址" prop="fyxx" />
                    <el-table-column label="订单状态" prop="status" />
                    <el-table-column label="订单初审" prop="shzt" />
                    <el-table-column label="订单复审" prop="eszt" />
            </el-table>
        </transition>
    </div>
</template>

<script setup lang="ts">
import {ref, onMounted} from 'vue'
import {ElTable, ElTableColumn} from 'element-plus'
let tableData: Array<Object> = ref([])
let isShow: Boolean = ref(true)
let width: Number = ref(100)
const toggle: void = () => {
    isShow.value = !isShow.value
}
const addWidth: void = () => {
    width.value += 100
}
onMounted(() => {
    tableData.value = [
        { orderNumber: 'DF1232432Q312', userName: '微信用户1234', createTime: '2021-02-20' },
    ]
})
</script>

<style scoped>
.box{
    height: 100px;
    background-color: antiquewhite;
    transition: width 0.5s linear;
}
.box1{
    width: 30px;
    height: 30px;
    position: relative;
    background-color: rgb(199, 123, 24);
    animation: move 2s linear infinite;
}
@keyframes move{
    0% {left: 0px;}
    25% {left: 25px;}
    50% {left: 50px;}
    75% {left: 25px;}
    100% {left: 0;}
}
.table-enter-active,
.table-leave-active {
    transition: opacity 0.5s linear;
}
.table-enter-from,
.table-leave-to {
    opacity: 0;
}
</style>