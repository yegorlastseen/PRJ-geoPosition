import Vue from 'vue'
import Router from 'vue-router'
import GMap from '@/components/home/GMap'
import Signup from '@/components/auth/Signup.vue'
import Login from '@/components/auth/Login.vue'
import firebase from 'firebase'
import ViewProfile from '../components/profile/ViewProfile.vue'

Vue.use(Router)

const router = new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'GMap',
      component: GMap,
      meta:{
        requiresAuth: true
      }
    },
    
    {
      path: '/signup',
      name: 'Signup',
      component: Signup,
      meta:{
        requiresAuth: true
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path:'/profile/:id',
      name:'ViewProfile',
      component: ViewProfile,
      meta:{
        requiresAuth: true
      }
    }
  ]
})


router.beforeEach((to, from, next) =>{
  //check to see if route requires auth
  if(to.matched.some(rec => rec.meta.requiresAuth)){
    //check auth state of user
    let user = firebase.auth().currentUser
    if(user){
      //user signed in, proceed to route
      next()
    }else{
       //user signed in, redirect to login
       next({ name: 'Login' })
    }
  }else{
    next()
  }
})

export default router