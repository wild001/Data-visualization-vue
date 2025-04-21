import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
// dataV
import DataVVue3 from '@kjgl77/datav-vue3';
// 引入样式
import '@/assets/css/common.css'
import '@/assets/css/index.css'
import '@/assets/font/iconfont.css'
createApp(App).use(router).use(DataVVue3).mount('#app')
