import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/getPublicModel',
      name: 'Market',
      component: () => import('@/components/Market')
    },
    {
      path: '/draggable',
      name: 'draggable',
      component: () => import('@/components/Draggable')
    },
    {
      path: '/sort',
      name: 'sort',
      component: () => import('@/components/Sort')
    },
    {
      path: '/page/a',
      name: 'pageA',
      component: () => import('@/views/Market')
    },
    {
      path: '/page/b',
      name: 'pageB',
      component: () => import('@/views/PreModel')
    },
    {
      path: '/page/c',
      name: 'factorTree',
      component: () => import('@/views/FactorTree')
    }
  ]
})
