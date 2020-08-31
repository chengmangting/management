<template>
<header>
    <div class="l-containter">
    <el-button type="primary" icon="el-icon-menu" circle></el-button>
    <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="current.path" v-if="current">{{current.label}}</el-breadcrumb-item>
    </el-breadcrumb>
    </div>
    <div class="r-containter">
      <el-dropdown trigger="click">
      <span class="el-dropdown-link">
        <img src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" alt="头像">
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item icon="el-icon-user">个人中心</el-dropdown-item>
        <el-dropdown-item icon="el-icon-close" @click.native="logOut">退出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    </div>
</header>
</template>

<script>
import { mapState } from 'vuex'
export default {
    computed: {
        ...mapState({
            current : state => state.tab.currentMenu
        })
    },
    methods: {
        logout(){
            this.$store.commit('clearToken')
            this.$store.commit('clearMenu')
            location.reload()
        }
    }
}
</script>

<style scoped lang="scss">
header {
    display: flex;
    align-items: center;
    height: 100%;
    justify-content: space-between;
}
.l-containter {
    display: flex;
    align-items: center;
    .el-button {
        margin-right: 10px;
    }

}
.r-containter {
    .el-dropdown-link {
        img {
            width: 40px;
            height: 40px;
        }
    }
}
</style>