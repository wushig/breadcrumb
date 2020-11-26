import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import gezi2 from '@/components/gezi2'
import gezi1 from '@/components/gezi1'
import gezi3 from '@/components/gezi3'
import gezi_luyou1 from '@/components/gezi_luyou1'
import gezi_luyou2 from '@/components/gezi_luyou2'
import gezi_luyou3 from '@/components/gezi_luyou3'
import gezi_luyou4 from '@/components/gezi_luyou4'
import gezi_luyou5 from '@/components/gezi_luyou5'

Vue.use(Router)
const index = {
  template: `<router-view></router-view>`
};
const fourth = {
  template: `<router-view></router-view>`
};
const fifth = {
  template: `<router-view></router-view>`
};
export default new Router({
  routes: [
    {
      path: '/',meta: {title: "首页"},redirect: '/g',component: index,
      children: [
        {path: '/g',name: 'content', meta: {title: "内容管理"},component: gezi_luyou1,
          children: [
            {path: '/g/e',name: 'gezi_luyou2',meta: {title: "文章管理"},component: fourth,redirect:'/g/e/l',
              children: [
                {path: "/g/e/l",name: "gezi_luyou2", meta: {title: ""},component: gezi_luyou2},
                {path: "/g/e/m",name: "gezi_luyou3", meta: {title: "详情"},component: fifth,redirect:'/g/e/m/o',
                  children:[
                    {path: "/g/e/m/o",name: "gezi_luyou3", meta: {title: ""},component: gezi_luyou3},
                    {path: "/g/e/m/p",name: "gezi_luyou5", meta: {title: "修改"},component: gezi_luyou5},
                  ]
                }
            ]
            },
            {path: '/g/f',name: 'gezi_luyou4',meta: {title: "评论管理"},component: gezi_luyou4}
          ]
        },
        {
          path: '/h',
          name: 'content',
          meta: {
            title: "用户管理"
          },
          // redirect: "/d/e",
          component: gezi_luyou1,
          children: [{
            path: '/h/j',
            name: 'gezi_luyou2',
            meta: {
              title: "新增用户"
            },
            component: gezi_luyou2
          }, {
            path: '/h/k',
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
