// // import Vue from 'vue'
// // import Router from 'vue-router'
// // import HelloWorld from '@/components/HelloWorld'

// // Vue.use(Router)

// // export default new Router({
// //   routes: [
// //     {
// //       path: '/',
// //       name: 'HelloWorld',
// //       component: HelloWorld
// //     }
// //   ]
// // })
/*
路由器对象模块
 */
import Vue from 'vue';
import VueRouter from 'vue-router';

import Msite from './../pages/Msite/Msite';
import Search from './../pages/Search/Search';
import Order from './../pages/Order/Order';
import Profile from './../pages/Profile/Profile';
import Login from './../pages/Login/Login';

// 使用插件
Vue.use(VueRouter)


// VueRouter是一个构造函数， 里面传一个配置对象（配置路由）
export default new VueRouter({
  routes: [
    {
      path: '/msite',
      component: Msite,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/search',
      component: Search,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/order',
      component: Order,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/',
      redirect: '/msite'
    },
    {
      path: '/login',
      component: Login
    },
  ]
})

