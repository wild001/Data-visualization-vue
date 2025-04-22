<script setup>
import {ref,reactive} from 'vue'
const config = reactive({
  data: [
    {
      name: '南阳',
      value: 167
    },
    {
      name: '周口',
      value: 123
    },
    {
      name: '漯河',
      value: 98
    },
    {
      name: '郑州',
      value: 75
    },
    {
      name: '西峡',
      value: 66
    },
  ],
  colors: ['#e062ae', '#fb7293', '#e690d1', '#32c5e9', '#96bfff'],
})
</script>

<template>
<div style="flex:2">
    <div>
      <i class="icon iconfont icon-tubiao"></i>
      产品销售渠道分析
    </div>
     <dv-capsule-chart :config="config" style="width:100%;height:200px;padding-right:20px" />
</div>
</template>

<style scoped>

</style>