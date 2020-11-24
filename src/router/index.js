import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import gezi2 from '@/components/gezi2'
import gezi1 from '@/components/gezi1'
import gezi3 from '@/components/gezi3'
import gezi_luyou from '@/components/gezi_luyou'
import gezi_luyou1 from '@/components/gezi_luyou1'
import gezi_luyou2 from '@/components/gezi_luyou2'
import gezi_luyou3 from '@/components/gezi_luyou3'
import gezi_luyou4 from '@/components/gezi_luyou4'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: "/d"
    },
    {
      path: '/0',
      name: 'HelloWorld',
      meta: {
        // keepAlive:true
        type: "aa_list"
      },
      component: HelloWorld
    },
    {
      path: '/a',
      name: 'gezi2',
      meta: {
        // keepAlive:true
        type: "aa_detail"
      },
      component: gezi2
    },
    {
      path: '/b',
      name: 'gezi1',
      component: gezi1
    },
    {
      path: '/c',
      name: 'gezi3',
      meta: {
        // keepAlive:true
        // type:"detail"
      },
      component: gezi3
    },


    {
      path: '/d',
      // name: 'gezi_luyou1',
      meta: {
        title: "首页"
      },
      redirect:'/d/g',
      component: gezi_luyou,
      children: [
        {
          path: '/d/g',
          name: 'content',
          meta: {
            title: "内容管理"
          },
          // redirect: "/d/g/e",
          component: gezi_luyou1,
          children: [{
            path: '/d/g/e',
            name: 'gezi_luyou2',
            meta: {
              title: "文章管理"
            },
            component: gezi_luyou2
          },{
            path: '/d/g/f',
            name: 'gezi_luyou4',
            meta: {
              title: "评论管理"
            },
            component: gezi_luyou4
          },]
        },
        {
          path: '/d/h',
          name: 'content',
          meta: {
            title: "用户管理"
          },
          // redirect: "/d/e",
          component: gezi_luyou1,
          children: [{
            path: '/d/h/j',
            name: 'gezi_luyou2',
            meta: {
              title: "新增用户"
            },
            component: gezi_luyou2
          },{
            path: '/d/h/k',
            name: 'gezi_luyou4',
            meta: {
              title: "活跃用户"
            },
            component: gezi_luyou4
          },]
        },

      ]
    },

  ]
})
