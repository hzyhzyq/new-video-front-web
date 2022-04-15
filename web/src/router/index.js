import Vue from 'vue'
import Router from 'vue-router'
import Index from "../components/Index";
import Video from "../components/Video";
import Login from "../components/Login";
import VideoList from "../components/VideoList";

Vue.use(Router)

export default new Router({
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
      path: '/test',
      name: 'VideoList',
      component: VideoList
    }
  ]
})
