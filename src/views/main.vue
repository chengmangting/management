<template>
   <el-container>
  <el-aside width="200px"><Aside></Aside></el-aside>
  <el-container>
    <el-header><Header></Header></el-header>
    <Tab></Tab>
    <el-main><router-view></router-view></el-main>
  </el-container>
</el-container>
</template>

<script>
import Header from '../components/Header'
import Aside from '../components/Aside'
import Tab from '../components/Tab'
export default {
  components: {
    Header,
    Aside,
    Tab
  },
}
</script>

<style scoped lang='scss'>
.el-header {
  background-color: #f67777;
}
.el-container {
  height: 100%;
}
.el-main {
  background-color: $main-bgColor;
}

</style>