<template>
  <div id="app">
    <el-row>
      <el-col :span="3" style="height: 100%;">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          :unique-opened="true"
          router
        >
          <el-submenu index="index">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>组件</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="botNav">导航栏编辑</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <el-menu-item index="wxNav">微信公众号菜单栏</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-col>
      <el-col :span="21">
        <router-view/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style lang='scss'>
@import './style/common';

#app{
  width: 100%;
  height: 100%;
  >.el-row{
    height: 100%;
  }
}
.el-menu-vertical-demo{
  width: 100%;
  height: 100%;
}
</style>
