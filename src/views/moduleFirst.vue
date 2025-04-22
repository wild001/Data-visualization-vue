<script setup>
import {ref,reactive} from 'vue'
import Piechart from './chart/piechart.vue'
import Radarchart from './chart/radarchart.vue'
import Scrollboard from './chart/scrollboard.vue'
import Gaugechart from './chart/gaugechart.vue'
import Capsulechart from './chart/capsulechart.vue'
import Water from './chart/water.vue'

</script>

<template>
<!-- 第一行 -->
<div class="module-box">
    <div style="flex:0 1 20%">
        <Piechart />
    </div>
    <div style="flex:0 1 20%">
        <Radarchart />
    </div>
    <div style="flex:0 1 40%">
      <div demo-bg>
        <dv-border-box8 :dur="5" style="width:100%;height:380px">
          <Gaugechart />
          <div class="d-flex" style="height: 200px;padding:0 20px">
              <Capsulechart />
              <Water />
          </div>
        </dv-border-box8>
      </div>
    </div>
    <div style="flex:0 1 20%">
        <Scrollboard />
    </div>
</div>
</template>

<style scoped>

</style>