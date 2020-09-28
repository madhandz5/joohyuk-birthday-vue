import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import VueNaverMap from 'vue-naver-maps';


Vue.config.productionTip = false


Vue.use(VueNaverMap,{
  clientID: '14nvpqoexz',
  useGovAPI: false, //공공 클라우드 API 사용 (선택)
  libraries: ['geocoder']
})

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
