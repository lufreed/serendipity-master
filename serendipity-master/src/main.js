import { createApp } from 'vue'
import App from './App.vue'
//使用路由
import router from './router/router'
//使用vuex
import store from './store'
//使用naiveui
import naive from 'naive-ui'
//使用字体
import 'vfonts/Lato.css'
import 'vfonts/FiraCode.css'
//媒体查询
import "../public/scss/index.scss"


createApp(App)
.use(router)
.use(store)
.use(naive)
.mount('#app')
