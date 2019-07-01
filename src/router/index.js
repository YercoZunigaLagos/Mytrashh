import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/GoogleMap'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'GoogleMap',
      component: HelloWorld
    },
    
  ]
});


