<script setup>
import {ref,reactive} from 'vue'
import Barchart from './chart/barchart.vue'
import Linechart from './chart/linechart.vue'
</script>

<template>
<!-- 第二行 -->
<div class="module-box">
    <div style="flex:0 1 50%">
        <div demo-bg>
            <dv-border-box13 style="width:100%;height: 350px">
                <Barchart />
            </dv-border-box13>
        </div>
    </div>
    <div style="flex:0 1 50%">
        <div demo-bg>
            <dv-border-box12 style="width:100%;height: 350px">
                <Linechart />
            </dv-border-box12>
        </div>
    </div>
</div>
</template>

<style scoped>

</style>