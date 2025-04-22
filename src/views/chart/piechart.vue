<script setup>
import {ref,reactive} from 'vue'
const option =ref({
    title: {
    text: '用户站点访问来源',
    style:{
        fill:'#fff',
        fontSize:14,
    }
  },
  color:['#e690d1','#e062ae','#ff9f7f','#ffdb5c','#9fe6b8',],
  series: [
    {
      type: 'pie',  //类型
      data: [   //图表的数据
        { name: '视频广告', value: 93 },
        { name: '搜索引擎', value: 32 },
        { name: '聪明广告', value: 65 },
        { name: '邮件营销', value: 44 },
        { name: '直接访问', value: 52 },
      ],
      insideLabel: {   //内部标签是否显示
        show: true
      },
      roseType: true,   //是否启用玫瑰图模式
      outsideLabel: {
        labelLineEndLength:10
      }
    }
  ]
})
</script>

<template>
<div demo-bg>
    <dv-border-box12 style="width: 100%;height: 380px;paddign:0 20px">   
        <dv-charts :option="option" style="width:100%;height:100%;"/>
    </dv-border-box12>
</div>
</template>

<style scoped>

</style>
