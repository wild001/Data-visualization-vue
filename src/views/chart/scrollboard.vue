<script setup>
import {ref,reactive} from 'vue'
// 轮播表
const config = reactive({
  header: ['组件', '分支', '覆盖率'],
  data: [
    ['组件1', '行1列2', '96%'],
    ['组件2', '行2列2', '66%'],
    ['组件3', '行3列2', '50%'],
    ['组件4', '行4列2', '48%'],
    ['组件5', '行5列2', '33%'],
    ['组件6', '行6列2', '79%'],
    ['组件7', '行7列2', '40%'],
    ['组件8', '行8列2', '45%'],
    ['组件9', '行9列2', '89%'],
    ['组件10', '行10列2', '58%'],
  ],
  index: true,
  columnWidth: [50],
  align: ['center'],
  headerBGC:'#090114',
  oddRowBGC:'#1E1628',
  evenRowBGC:'#090114'
})
</script>

<template>
<dv-border-box13 style="width: 100%;height: 380px;padding: 0 20px">
    <div dv-bg>
        <div class="chart-title">
            <p>任务完成排行榜</p>
            <dv-decoration-3 style="width:100px;height:20px;" />
        </div>
        <dv-scroll-board ref="scrollBoard" :config="config" style="width:100%;height:300px;padding-top:10px" />   
    </div>
</dv-border-box13>
</template>

<style scoped>

</style>
