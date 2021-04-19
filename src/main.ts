import { createApp } from 'vue'
import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import Registration from '../views/Registration.vue'
import Login from './components/Login.vue'
import Dashboard from './components/Dashboard.vue'
//import router from './router/index'
import router from './router'
import store from './store'


//const axios = require('axios').default;
import axios from 'axios';
import VueAxios from 'vue-axios'

/*axios.defaults.headers = {
    'Content-Type': 'application/json'
}*/

//Vue.use(VueAxios, axios)
createApp(App).use(store).use(VueAxios, axios).use(router).mount('#app')
// createApp({router}).mount('#log')



//const app = new Vue({
    //router
//}).$mount('#log')