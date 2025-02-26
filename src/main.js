// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'
import router from '@/router/router'

const app = createApp(App)

registerPlugins(app, router)
app.use(router)
app.mount('#app')
