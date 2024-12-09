import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import App from './App.vue'
import Axios from './apis/ajax'
import 'virtual:uno.css'

import i18n from './i18n'

// import mountElementUI from './utils/elementUI'

document.title = import.meta.env.VITE_APP_TITLE

const app = createApp(App)
app.use(createPinia())
app.provide('$http', Axios)
app.use(router)

app.use(i18n)
// 全量引入Element UI
// mountElementUI(app)
app.mount('#app')
