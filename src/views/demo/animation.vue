<template>
  <div style="float: left;">
    <!-- 使用transition，配置三个参数，语法：transition: property duration timing-function delay 
     1.transition-property：指定需要过渡效果的CSS属性名称，如width、height、background-color
     2.transition-duration：以秒或毫秒为单位指定过渡动画所需的时间。默认为0s，表示不出现过渡动画。
     3.transition-timing-function：来描述这个中间值是怎样计算的,实质上，通过这个函数会建立一条加速度曲线，
     因此在整个 transition 变化过程中，变化速度可以不断改变。
     4.transition-delay：延迟时间，规定了在过渡效果开始作用之前需要等待的时间-->
      <h3>加宽动画</h3>
      <el-button @click="addWidth">加宽</el-button>
      <el-button @click="width = 100">重置宽度</el-button>
      <div class="box" :style="{width: width + 'px' }"></div>

      <!-- animation属性用来指定一组或多组动画，每组之间用逗号相隔，是 、
       animation-name（关键帧@keyframes at-rule 名称，这些 at-rule 描述了要应用于元素的动画），
       animation-duration, animation-timing-function，animation-delay，
       animation-iteration-count（设置动画序列在停止前应播放的次数），
       animation-direction（设置动画是应正向播放、反向播放还是在正向和反向之间交替播放），
       animation-fill-mode（设置 CSS 动画在执行之前和之后如何将样式应用于其目标） 和 animation-play-state（属性设置动画是运行还是暂停） 属性的一个简写属性形式
        -->
      <h3>移动动画</h3>
      <div class="box1" v-for="item in 3" style="margin-top: 2px;"></div>

      <!-- 使用transition包裹组件可以控制组件的动画，设置name属性后，通过name设置style中的样式，去控制动画全程的过渡属性 
      <Transition> 是一个内置组件，这意味着它在任意别的组件中都可以被使用，无需注册。
      它可以将进入和离开动画应用到通过默认插槽传递给它的元素或组件上。进入或离开可以由以下的条件之一触发：
      由 v-if 所触发的切换
      由 v-show 所触发的切换
      由特殊元素 <component> 切换的动态组件
      改变特殊的 key 属性
      <Transition> 仅支持单个元素或组件作为其插槽内容。如果内容是一个组件，这个组件必须仅有一个根元素。-->
      <h3 calss="animate__animated animate__bounce">淡入淡出</h3>
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