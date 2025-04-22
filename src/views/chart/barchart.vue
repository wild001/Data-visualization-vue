<script setup>
import {ref} from 'vue'
const option = ref({
    title: {
    text: '数据统计图',
    style:{
        fill:'#fff',
        fontSize:14
    }
  },
  legend: {
    data: ['已贯通', '贯通率'],
    top: 80,
    textStyle:{
        fill:'#fff'
    }
  },
  xAxis: {
    data: [
    '市区', '江北', '长寿', '南川', '巫山', '奉节',
    '酉阳', '忠县', '武隆'
    ],
    axisLabel: {
      style: {
        rotate: 0,
        textAlign: 'left',
        textBaseline: 'top',
        fill:'#fff'
      }
    },
    axisTick: {
      show: false
    }
  },
  yAxis: [
    {
      data: 'value',
      min: 0,
      max: 300,
      interval: 50,
      splitLine: {
        show:false,  //是否显示分割线
        style: {
          lineDash: [3,3]
        }
      },
      axisLabel: {
        style:{
            fill:'#fff'
        },
        formatter: '{value}'
      },
      axisTick: {
        show: false
      }
    },
    {
      data: 'value',
      position: 'right',
      min: 0,
      max: 30,
      interval: 5,
      splitLine: {
        show: false
      },
      axisLabel: {
        style:{
            fill:'#fff'
        },
        formatter: '{value}',
      },
      axisTick: {
        show: false
      }
    }
  ],
  series: [
    {
      name: '已贯通',
      data: [
        175, 125, 90, 130, 45, 65,
        65, 47, 50
      ],
      type: 'bar',
      gradient: {
        color: ['#37a2da', '#ff9f7f']
      },
      animationCurve: 'easeOutBounce'
    },
    {
      name: '贯通率',
      data: [
      23, 18, 16, 14, 10, 8,
      6, 6, 6
      ],
      type: 'line',
      yAxisIndex: 1,
      animationCurve: 'easeOutBounce',
      color:'#ffdb5c'
    }
  ]
})
</script>

<template>
<div dv-bg>
    <dv-charts :option="option" style="width:100%;height:350px"/>
</div>
</template>

<style scoped>

</style>