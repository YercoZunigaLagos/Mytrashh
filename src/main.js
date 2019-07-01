// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';

import * as VueGoogleMaps from "vue2-google-maps";
import Axios from 'axios';


Vue.use(Axios);

Vue.config.productionTip = false

Vue.use(VueGoogleMaps,{
  load:{
    key: "AIzaSyC9LzasLdzIUOMnq5HpD1pFppXuCBwZ9cE",
    libraries: "places" // necessary for places input
  }
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
