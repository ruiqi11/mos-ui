import { createApp } from 'vue'
import App from './App.vue'
import mosUI from './packages' // 引入自己的ui库

createApp(App).use(mosUI).mount('#app')