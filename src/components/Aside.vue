<template>
<div>
    <h3 class="title">小滴后台管理系统</h3>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      background-color= #e79ad4
      text-color="#fff"
      active-text-color="#ffd04b"
    >
     
      <el-menu-item v-for="item in noChildren" :key="item.path" :index="item.path" @click="clickMenu(item)">
        <i :class="'el-icon-' + item.icon"></i>
        <span slot="title">{{item.label}}</span>
      </el-menu-item>
       <el-submenu :index="item.path" v-for="(item, aindex) in hasChildren" :key="aindex">
        <template slot="title">
          <i :class="'el-icon-' + item.icon"></i>
          <span>{{item.label}}</span>
        </template>
        <el-menu-item-group>
            <template slot="title"></template>
          <el-menu-item :index="subItem.path" v-for="subItem in item.children" :key="subItem.path" @click="clickMenu(subItem)"> 
            <i class="'el-icon-' + subItem.icon"></i>
            <span>{{subItem.label}}</span>
         </el-menu-item>
        </el-menu-item-group>
        </el-submenu>
    </el-menu>
</div>
 
</template>

<script>
export default {
    name: "",
    props: [""],
    data() {
        return {
            asideMenu: [
                {
                    path: '/home',
                    name: 'home',
                    label: '首页',
                    icon: 'eleme'
                },
                {
                    path: '/videoManage',
                    name: 'videoManage',
                    label: '视频管理',
                    icon: 'video-play'
                },
                {
                    path: '/userManage',
                    name: 'userManage',
                    label: '用户管理',
                    icon: 'user'  
                },
                {
                    // path: '/other/page1',
                    label: '其他',
                    name: 'other',
                    icon: 'setting',
                    children: [
                        {
                            path: '/page1',
                            label: '页面1',
                            name: 'page1',
                            icon: 'goods'
                        },
                        {
                            path: '/page2',
                            name: 'page2',
                            label: '页面2',
                            icon: 'goods'
                        }
                    ]
                }
            ]
        }
    },
    computed: {
        noChildren() {
            return this.menu.filter(item => !item.children)
        },
        hasChildren() {
            return this.menu.filter(item => item.children)
        },
        menu(){
            return this.$store.state.tab.menu
        }
    },
    methods: {
        clickMenu(item){
            this.$router.push({name:item.name});
            this.$store.commit('selectMenu', item)
        }
    }
}
</script>

<style scoped lang='scss'>
.el-menu {
    height: 100%;
}
.title {
    color: #ffffff;
    line-height: 48px;
}
</style>