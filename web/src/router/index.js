import Vue from 'vue'
import Router from 'vue-router'
import Index from "../components/Index";
import Video from "../components/Video/Video";
import Login from "../components/Login/Login";
import Register from "../components/Login/Register";
import User from "../components/User/User";
import Detail from "../components/Detail";


Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Index',
      component: Index
    },
    {
      path: '/video',
      name: 'Video',
      component: Video
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },{
      path: '/user',
      name: 'User',
      component: User
    },{
      path: '/detail',
      name: 'Detail',
      component: Detail
    }
  ]
})
