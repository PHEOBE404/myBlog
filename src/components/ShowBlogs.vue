<template>
<!--  1.get请求，从网络和本地上获取数据
      2.自定义指令（钩子函数），如v-for，v-if等
      3.自定义指令的实现在main.js中
      4.过滤器，实现样式改变等内容在main.js中，涉及计算或搜索等功能在computed中
      5.写在main.js中的过滤器为全局过滤器，其他vue也可以使用。
      6.若要实现局部过滤器，可以直接在js的filters中实现。
      7.也可以实现局部自定义指令，方法与6类似
      8.全局和局部都有时，局部优先
      -->
     <div v-theme :column="'wide'"  id= "show-blogs" >
<!--       v-theme是自定义指令,给值,要注意参数的类型，可以是数组[]，可以是对象{},也可以是字符串，注意字符串要用2层括号，" ' ' "-->
       <h1>博客总览</h1>
       <input type="text" v-model="search" placeholder="搜索">
       <div v-for="blog in filteredBlogs" class="single-blog">
<!--         v-rainbow是自定义指令,不给值-->
<!--         to-uppercase是自定义过滤器-->
         <router-link v-bind:to="'/blog/'+blog.id">
<!--           双引号里是to的内容，若要拼接字符串，必须再加单引号-->
<!--           用v-bind绑定指令-->

          <h2 v-rainbow> {{blog.title | to-uppercase}}
          </h2>
         </router-link>

         <article>
           {{blog.body | snippet}}
         </article>

       </div>

     </div>
</template>

<script>
    export default {
        name: "show-blogs",

      data(){
          return{
            blogs:[],
            search:""

          }
      },
      created() {
          // 返回的值用data来接收
        //访问本地的json文件只能放在static文件夹下，只要改变get里面的路径，比如 （'./../static/post.json'）
          this.$http.get('http://jsonplaceholder.typicode.com/posts')
            .then(function (data) {
              // console.log(data);
             this.blogs= data.body.slice(0,10);
             // console.log(this.blogs);
            })
      },
      computed:{
          filteredBlogs:function () {
            return this.blogs.filter((blog)=>{
              return blog.title.match(this.search);
              //返回匹配search中的标题，赋值给blogs，再用v-for遍历blogs中的内容展示
            })
            
          }
      },
      filters:{//局部过滤器
          "to-uppercase":function (value) {
            return value.toUpperCase();
          }
      },
      directives:{//局部自定义指令
          // 'rainbow':{
          //   bind(el,binding,vnode){
          //     el.style.color="red";
          //   }
          // }

      }


    }
</script>

<style scoped>
#show-blogs{
  max-width:800px;
  margin: 0 auto;
}
  .single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing:border-box;
    background: #eeeeee;
    border: 1px dotted #aaaaaa;
  }
#show-blogs a{
  color: #444444;
  text-decoration: none;
}
  input[type="text"]{
    padding: 8px;
    width: 100%;
    box-sizing: border-box;
  }
</style>
