import {createApp} from 'vue'
// @ts-ignore
import App from './App.vue'
import './index.scss'
import './lib/fli.scss'
import {router} from './router'

const app = createApp(App)
app.use(router)
app.mount('#app')
