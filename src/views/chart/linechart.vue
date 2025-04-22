<script setup>
import {ref} from 'vue'
const option = ref({
    title: {
    text: '周销售额趋势',
    style:{ //图表标题的样式
        fill:'#fff', 
        fontSize:14
    }
  },
  xAxis: {
    name: '第一周',  //坐标轴的名称
    nameTextStyle:{
        fill:'#fff',
        fontSize: 10
    },
    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
    axisLabel:{   // 坐标轴标签配置
        style:{
            fill:'#fff'
        }
    }
  },
  yAxis: {
    name: '销售额',
    nameTextStyle:{
        fill:'#fff',
        fontSize: 10
    },
    data: 'value',
     axisLabel:{   // 坐标轴标签配置
        style:{
            fill:'#fff'
        }
    }
  },
  series: [
    {
      data: [1200, 2230, 1900, 2100, 3500, 4200, 3985],
      type: 'line',
      smooth: true,
      color:'#ffdb5c'
    }
  ]

})
</script>

<template>
<div dv-bg>
     <dv-charts :option="option" style="width:100%;height:350px;"/>
 </div>
</template>

<style scoped>

</style>
