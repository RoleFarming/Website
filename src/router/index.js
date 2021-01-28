import Vue from 'vue'
import VueRouter from 'vue-router'
import Staking from '../views/Staking.vue'
import RoleFarm from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'RoleFarm',
    component: RoleFarm
  },
  {
    path: '/home',
    name: 'RoleFarm',
    component: RoleFarm
  },
  {
    path: '/staking',
    name: 'Staking',
    component: Staking 
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
