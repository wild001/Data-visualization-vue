<script setup>
import {ref,reactive} from 'vue'

const config = reactive({
  data: [55, 45],
  shape: 'roundRect',
})

</script>

<template>
 <dv-water-level-pond :config="config" style="flex:1;height:150px" />
</template>

<style scoped>

</style>
