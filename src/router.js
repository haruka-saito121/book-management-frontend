import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/components/Register'
import Top from '@/components/Top'
import Detail from '@/components/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Top',
      component: Top
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register
    },
    {
      path: '/Detail/:id',
      name: 'Detail',
      component: Detail
    }
  ]
})