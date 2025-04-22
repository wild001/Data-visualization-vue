<script setup>
import {ref,reactive} from 'vue'
const option = ref({
    title:{
        text:'数据情况雷达图',
        style:{
            fill:'#fff',
            fontSize:14
        }
    },
   radar: {
    indicator: [
      { name: 'there1', max: 300 },
      { name: 'there2', max: 300 },
      { name: 'there3', max: 300 },
      { name: 'there4', max: 300 },
      { name: 'there5', max: 300 },
      { name: 'there6', max: 300 }
    ],
    polygon: true,
    axisLine: {
      style: {
        stroke: 'rgba(251, 114, 147, .3)'
      }
    },
    splitLine: {
      style: {
        stroke: 'rgba(251, 114, 147, .5)',
        fill: 'rgba(251, 114, 147, .2)'
      }
    },
    axisLabel:{
        style:{
            fill:'#fff',
        }
    },
    splitArea:{
        show:true,
        color: ['rgba(159, 230, 184, .9)', 'rgba(251, 114, 147, .2)']
    }
  },
  series: [
    {
      type: 'radar',
      data: [111, 256, 178, 152, 266, 132]
    }
  ]
})
</script>

<template>
<dv-border-box12 style="width: 100%;height: 380px;paddign:0 20px">   
    <dv-charts :option="option" style="width:100%;height:100%;"/>
</dv-border-box12>
</template>

<style scoped>

</style>
