<script setup>
import {ref,reactive} from 'vue'
import ModuleTitle from './moduleTitle.vue'
import ModuleFirst from './moduleFirst.vue'
import ModuleSecond from './moduleSecond.vue'


</script>

<template>
  <dv-full-screen-container>
    <!-- 标题 -->
    <ModuleTitle />
    <!-- 第一行 -->
    <ModuleFirst />
    <!-- 第二行 -->
    <ModuleSecond />
    
</dv-full-screen-container>
</template>

<style scoped>

</style>
