<template>
  <el-container>
    <el-header>
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        router
        @select="handleSelect">
        <el-menu-item index="/mainPage">首页</el-menu-item>
        <el-menu-item index="/catagory">分类</el-menu-item>
        <el-menu-item index="3">归档</el-menu-item>
        <el-menu-item index="4">标签</el-menu-item>
        <el-menu-item index="5">友链</el-menu-item>
        <el-menu-item index="6">关于我</el-menu-item>
       <div class="btn">
          <el-button type="text">写博客</el-button>
          <el-button type="primary">登录</el-button>
          <el-button type="primary">注册</el-button>
       </div>
      </el-menu>
    </el-header>
    <el-main>
      <router-view/>
    </el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</template>

<script>
export default {
  data () {
    return {
      activeIndex: '/mainPage/'
    }
  },
  mounted () {
    this.activeIndex = window.location.pathname;
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style>
  .el-container {
    padding: 0;
  }
  .el-header {
     color: #333;
     text-align: center;
     height: 60px;
     padding: 0;
   }
  .el-footer {
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .le-menu-demo {
    /*width: 100%;*/
  }

  .btn {
    float: right;
    margin-top: 11px;
    margin-right:10px;
    padding: 0;
  }

  .el-main {
    /*background-color: #E9EEF3;*/
    /*color: #333;*/
    text-align: center;
    line-height: 1000px;
  }
</style>
