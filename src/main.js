// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import router  from './routes'
// import后面的router只能写成router,且首字母大写都不行，不然在下面new Vue里面注入的时候控制台会报错Cannot read property 'matched'
Vue.config.productionTip = false

Vue.use(VueResource)
Vue.use(VueRouter)

//自定义指令,第一个参数为名称，第二个参数为对象
Vue.directive('rainbow',{
  //调用指令（使用v-rainbow）就会触发bind方法
  //主要使用前面两个参数
  //除了el，其他参数都是只读的，不能进行修改
  //el可以控制标签，直接操作dom
  //binding可以接收参数,即引号里面的内容，注意参数类型
  //binding.arg可接收冒号部分的内容
  bind(el,binding,vnode){
   //随机生成颜色
    el.style.color="#"+Math.random().toString(16).slice(2,8);

  }

})
Vue.directive('theme',{
  bind(el,binding,vnode){
    if(binding.value == 'wide'){
      el.style.maxWidth = "1260px";
    }
    else if (binding.value=='narrow'){
      el.style.maxWidth = "560px"
    }
    if (binding.arg == 'column'){
      el.style.background="#6677cc";
      el.style.padding='20px';
    }

  }
})
//自定义过滤器
// Vue.filter("to-uppercase",function (value) {
//   //第一个参数为过滤器的名字，第二个参数为方法名
//   return value.toUpperCase();
// })
Vue.filter("snippet",function (value) {
  return value.slice(0,100)+"...";
  
})



new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
})
