import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)
// import Home from '../views/home/Home.vue'
// import Cart from '../views/cart/Cart.vue'
// import Category from '../views/category/Category.vue'
// import Profile from '../views/profile/Profile.vue'
const Home = ()=> import ('../views/home/Home.vue')
const Cart = ()=> import ('../views/cart/Cart.vue')
const Category = ()=> import ('../views/category/Category.vue')
const Profile = ()=> import ('../views/profile/Profile.vue')
const Details = ()=> import ('../views/details/Details.vue')
const routes = [
  {
    path: '',
    redirect:'/home',
    meta:{
      MainTabBar:true
    }
  },
  {
    path: '/home',
    component:Home,
    meta:{
      MainTabBar:true
    }
  },
  {
    path: '/category',
    component:Category,
    meta:{
      MainTabBar:true
    }
  },
  {
    path: '/cart',
    component:Cart,
    meta:{
      MainTabBar:true
    }
  },
  {
    path: '/profile',
    component:Profile,
    meta:{
      MainTabBar:true
    }
  },
  {
    path:'/detail/:id',
    component:Details
  }
]

const router = new VueRouter({
  routes
})

export default router
