import ShowBlogs from './components/ShowBlogs'
import AddBlog from './components/AddBlog'
import SingleBlog from './components/SingleBlog'
import EditBlog from './components/EditBlog'
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

//是component不是components！！！
export default new Router({
  mode:'history',
  routes:[
    {
      path:"/",
      component:ShowBlogs
    },
{
  path:"/add",
    name:"AddBlog",
  component:AddBlog
},
{
  path:"/blog/:id",//根据id去找对应的vue组件
  component:SingleBlog
},
    {
      path:"/edit/:id",
      component:EditBlog
    }
]



})

