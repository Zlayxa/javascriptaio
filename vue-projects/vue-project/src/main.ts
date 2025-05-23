import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
//import { StockTicker, WeatherWidget } from './Widgets.vue'

import './assets/main.css'

import App from './App.vue'
import router from './router'

const app = createApp(App)
app.config.errorHandler = (err) => {
  //handle error here
}

//const app1 = createApp(StockTicker)
//app1.mount('#stocks')

//const app2 = createApp(WeatherWidget)
//app2.mount('#weather')

app.use(createPinia())
app.use(router)

app.mount('#app')

app.config.globalProperties.appName = 'vue-project'
