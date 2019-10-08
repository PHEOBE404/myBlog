<template>
  <!--
  从数据库中调用数据时，需要类型转换，如数组和对象之间的转换，
  要注意数据类型，以及关键字的使用，then（）的使用
  -->
    <div id="SingleBlog">
      <h1>{{blog.title}}</h1>
      <article>{{blog.body}}</article>

      <button @click="deleteSingleBlog()">删除</button>
      <router-link :to="'/edit/'+id">编辑</router-link>


    </div>
</template>

<script>
    export default {
        name: "SingleBlog",
      data(){
          return{
            id:this.$route.params.id,//拿到路由对应的id，就可以通过改变路由显示对应的页面
            blog:{}
          }
      },
      created() {
          this.$http.get('http://jsonplaceholder.typicode.com/posts/'+this.id)
            .then(function (data) {
              // console.log(data);
              this.blog = data.body;
            })
      },
      methods:{
        deleteSingleBlog(){
          this.$http.delete('http://jsonplaceholder.typicode.com/posts/'+this.id)
            .then(response=>{
              this.$router.push({
                path:'/'
              })
            })
        }
      }
    }
</script>

<style scoped>
#SingleBlog{
  max-width:960px ;
  margin: 0 auto;
  padding: 20px;
  background:#eee ;
  border: 1px dotted #aaaaaa;
}
</style>
