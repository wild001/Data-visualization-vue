<script setup>
import {ref} from 'vue'
const option = ref({
    title:{
      text:'今日任务通过率',
      offset:[0, -40],  //位置偏移量
      style:{
        fill:'#fff',
        fontSize:14
      }
    },
    series: [
    {
      type: 'gauge',
      startAngle: -Math.PI / 2,
      endAngle: Math.PI * 1.5,
      arcLineWidth: 10,
      data: [
        { name: 'itemA', value: 55, gradient: ['#fb7293', '#e690d1', '#2fded6'] }
      ],
      axisLabel: {
        show: false
      },
      axisTick: {
        show: false
      },
      pointer: {
        show: false
      },
      dataItemStyle: {
        lineCap: 'round'
      },
      details: {
        show: true,
        formatter: '{value}%',
        style: {
            fill: '#fb7293',
            fontSize: 20
        }
      }
    }
  ]
})
const option1 = ref({
    series: [
    {
      type: 'gauge',
      startAngle: -Math.PI / 2,
      endAngle: Math.PI * 1.5,
      arcLineWidth: 10,
      data: [
        { name: 'itemA', value: 65, gradient: ['#03c2fd', '#1ed3e5', '#2fded6'] }
      ],
      axisLabel: {
        show: false
      },
      axisTick: {
        show: false
      },
      pointer: {
        show: false
      },
      dataItemStyle: {
        lineCap: 'round'
      },
      details: {
        show: true,
        formatter: '{value}%',
        style: {
            fill: '#1ed3e5',
            fontSize: 20
        }
      }
    }
  ]
})
</script>

<template>
<div class="d-flex" style="height:180px;padding-top:20px">
    <dv-charts :option="option"/>
    <dv-charts :option="option1"/>
</div>
</template>

<style scoped>

</style>