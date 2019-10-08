<template>
<!--  路由跳转设置-->
    <nav>
      <ul>
        <li>
<!--          这部分内容在控制台中会显示为a标签，添加的样式时可以直接对a标签进行操作-->
          <router-link to="/" exact="">博客</router-link>
          <router-link to="/add" exact="">写博客</router-link>
<!--          exact可以保证点击一个时，另一个的样式消失-->
        </li>
      </ul>
    </nav>
</template>

<script>
    export default {
        name: "BlogHeader"
    }
</script>

<style scoped>

  ul{
    list-style-type: none;
    text-align: center;
    margin: 0;

  }
  li{
    display: inline-block;
    margin: 0 10px;
  }
  a{
    color: #ffffff;
    text-decoration: none;
    /*下划线、删除线、上划线*/
    padding: 12px;
    border-radius: 5px;
    /*圆角边框大小*/
  }
  nav{
    background:crimson;
    padding: 30px 0;
    margin-bottom: 40px ;
  }
  .router-link-active{
    background: rgba(255,255,255,0.8);
    color: #444;
  }
</style>
