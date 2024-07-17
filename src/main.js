import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import store from './store'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';
import 'vue3-toastify/dist/index.css';

const token = localStorage.getItem('token')
if (token) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

const app = createApp(App)

app.use(router)
app.use(store)
app.use(Antd)
app.mount('#app')


// app.config.errorHandler = (err, instance, info) => {
//   // report error to tracking services
//   console.log('err: ', err);
//   console.log(instance);
//   console.log(info);
// }