<template>
  <div id="add-blog">
    <!--      1.修改博客要先显示原来博客的内容，在页面跳转时要带参数跳转
              2.根据id请求接口
              3.在跨语句块时常用this-->

    <h2>编辑博客</h2>
    <form v-if="!submmited">
      <label for="">博客标题</label>
      <br>
      <input type="text" v-model="blog.title" required/>
      <br>
      <label for="">博客内容</label>
      <br>
      <textarea v-model="blog.content"></textarea>
      <div id="checkboxes">
        <label for="">vue.js</label>
        <input type="checkbox" value="vue.js" v-model="blog.categories">
        <label for="">node.js</label>
        <input type="checkbox" value="node.js" v-model="blog.categories">
        <label for="">react.js</label>
        <input type="checkbox" value="react.js" v-model="blog.categories">
        <label for="">angular4.js</label>
        <input type="checkbox" value="angular4.js" v-model="blog.categories">
      </div>
      <label for="">作者</label>
      <select v-model="blog.author">
        <option v-for="author in authors">
          {{author}}
        </option>
      </select>
      <button v-on:click.prevent="post">修改博客</button>
    </form>
    <div>
      <h3 v-if="submmited">您的博客发布成功！</h3>
    </div>
    <div id="preview">
      <h3>博客总览</h3>
      <p>博客标题：{{blog.title}}</p>
      <p>博客内容：</p>
      <p>{{blog.content}}</p>
      <p>博客分类</p>
      <ul>
        <!--          常用来遍历数组-->
        <li v-for="category in blog.categories">
          {{category}}

        </li>
      </ul>
      <p>作者：{{blog.author}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "AddBlog",
    data(){
      return {
        blog:{
          id:this.$route.params.id,
          title:"",
          content:"",
          categories:[],
          author:""

        },
        authors:["aaa","bbb","ccc"],
        submmited:false,
      }
    },
    methods: {
      fetchData(){
        // console.log(this.id);
      //  无法打印对应id
        this.$http.get('http://jsonplaceholder.typicode.com/posts/'+this.id)
          .then(response=>{
            this.blog=response.body;
            console.log(this.blog);
          })
      },
      post: function () {// post网址和具体的对象
        this.$http.put("http://jsonplaceholder.typicode.com/posts/+this.id", {
          title: this.blog.title,
          body: this.blog.content,
          userId: 5
        })
        //post成功后条用方法then
          .then(function (data) {//提交成功
            console.log(data);
            this.submmited = true;

          })
      }
    },
    created() {
      this.fetchData();
      // 该方法的实现在methods中
    }

  }
</script>
<!--scoped说明只针对当前样式来使用-->
<style scoped>
  #add-blog *{
    box-sizing: border-box;
  }
  #add-blog{
    margin: 20px auto;
    /*上下，左右*/
    max-width: 600px;
    padding: 20px;
  }
  label{
    display: block;
    /*独占一行*/
    margin: 20px 0 10px;
    /*上，左右，下*/
  }
  /*input中类型为text的设置样式*/
  input[type= "text"],textarea,select{
    display: block;
    width: 100%;
    padding: 8px;

  }
  textarea{
    height: 200px;
  }
  /*inline-block:将一个元素转化为行内块元素，可以设置宽高，但不会独占一行*/
  /*需要设置每一列的宽度*/
  /*源代码之间的空格会影响布局*/
  /*vertical-align属性会影响该属性*/
  #checkboxes label{
    display: inline-block;
    margin-top: 0;
  }
  #checkboxes input{
    display: inline-block;
    margin-left: 10px;
  }
  button{
    display: block;
    /*margin: 20px 0;*/
    margin: 10px auto;
    /*上下，左右*/
    background: crimson;
    color: #fff;
    border: 0;
    padding: 14px;
    border-radius: 4px;
    font-size: 18px;
    cursor: pointer;
  }
  #preview{
    padding: 10px 20px;
    border:1px dotted #ccc;
    margin: 30px 0;
  }
  h3{
    margin-top: 10px;
  }
</style>
