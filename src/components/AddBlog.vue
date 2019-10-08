<template>
    <div id="add-blog">
<!--      1.创建博客提交页面，同时在页面中展示输入内容。-->
<!--      2.尽可能用较少的变量来控制多个v-if的判断，如根据是否提交成功的方法实现。-->
<!--      3.使用jsonplaceholder来测试数据的提交，可以换成数据库地址。-->
      <h2>添加博客</h2>
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
        <button v-on:click.prevent="post">添加博客</button>
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
            title:"",
            content:"",
            categories:[],
            author:""

          },
          authors:["aaa","bbb","ccc"],
          submmited:false,
        }
      },
      methods:{
        post:function () {// post网址和具体的对象
          this.$http.post("http://jsonplaceholder.typicode.com/posts",{
            title:this.blog.title,
            body:this.blog.content,
            userId:1
          })
            //post成功后条用方法then
            .then(function(data){//提交成功
              console.log(data);
              this.submmited=true;

            })

          
        }
  
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
