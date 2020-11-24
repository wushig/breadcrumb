// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';

Vue.config.productionTip = false
Vue.use(ViewUI,{
  transfer: true,
  size: 'large',
  capture: false,
  select: {
    arrow: 'md-arrow-dropdown',
    arrowSize: 20
  }
});
// router.beforeEach(async (to, from, next) => {
//   // let from_type = from.meta.type?from.meta.type:"";
//   // let to_type = to.meta.type?to.meta.type:"";
//   // if(from_type.indexOf('list')>0&&to_type.indexOf('detail'>0)&&from_type.split("_")[0]===to_type.split("_")[0]){
//   //   localStorage.setItem("data",JSON.stringify(to.query.queryData));
//   //   console.log("列表页去往详情页，存储查询条件："+JSON.stringify(to.query));
//   // }
//   // if(from_type.indexOf('detail')>0&&to_type.indexOf('list')>0&&from_type.split("_")[0]===to_type.split("_")[0]){
//   //   to.query.queryData = localStorage.getItem("data");
//   //   console.log("详情页去往列表页，得到并清除查询条件："+JSON.stringify(to.query));
//   //   localStorage.removeItem("data");
//   // }
//   console.log(to);
//   console.log(from);
//   localStorage.setItem("routerList",JSON.stringify(to.matched));
//   next()
// });
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
