import Vue from 'vue'
import App from './App.vue'
import Observer from './Observer'

Vue.config.productionTip = false;
Vue.component('Observer', Observer)

new Vue({
  render: h => h(App),
}).$mount('#app')


