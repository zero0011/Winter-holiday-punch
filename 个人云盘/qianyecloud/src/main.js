import Vue from 'vue'
import App from './App.vue'

// vuex
import store from './vuex';

// router
import router from './router'

// expose to global
Vue.store = store;
// expose to global
Vue.router = router;

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
