import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index'
import mainPage from '@/views/page/mainPage'
import catagory from '@/views/page/catagory'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      children: [
        {
          path: 'mainPage',
          name: 'mainPage',
          component: mainPage
        },
        {
          path: 'catagory',
          name: 'catagory',
          component: catagory
        },
        {
          path: '',
          name: 'mainPage',
          component: mainPage
        }
      ]
    }
  ]
})
