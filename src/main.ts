import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import VueCustomTooltip from '@adamdehaven/vue-custom-tooltip'

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(VueCustomTooltip, {
    name: 'Tooltip',
    color: '#fff',
    background: '#000',
    borderRadius: 10,
    fontWeight: 400,
})

app.mount('#app')
