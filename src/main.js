import Vue from 'vue'
import App from './App.vue'
import Home from './Home.vue'
import Weather from './Weather.vue';
import Search from './Search.vue';
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import axios from 'axios'


Vue.use(BootstrapVue);
Vue.use(VueRouter);
Vue.use({
    install (Vue) {
    Vue.prototype.$api = axios.create({
      baseURL: 'https://www.metaweather.com/api/location/'
    })
  }
})


const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: Home, name : "home" },
    { path: '/weather/:id', component: Weather, name : "weather" },
    { path: '/search/:keyword', component: Search, name : "search" }
  ]
});

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
})





