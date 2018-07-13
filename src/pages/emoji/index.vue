<template>
  <div class="icons-container">
    <div style="font-size: 22px;margin-bottom: 10px;">以下图标来自<a href="http://www.iconfont.cn/collections/detail?spm=a313x.7781069.1998910419.d9df05512&cid=7648" style="color: #ff684c;" target="_blank">HarikaDeng</a></div>
    <div class="icons-wrapper">
      <el-tooltip placement="top" v-for="item of iconsMap" :key="item">
        <div slot="content">
          {{generateIconCode(item)}}
        </div>
        <div class="icon-item">
          <svg-icon class-name="disabled" :icon-class="item" />
          <span>{{item}}</span>
        </div>
      </el-tooltip>
    </div>
  </div>
</template>

<script>
import icons from './generateIconsView';

export default {
  name: 'icons',
  data() {
    return {
      iconsMap: []
    };
  },
  mounted() {
    const iconsMap = icons.state.iconsMap.map(i => i.default.id.split('-')[1]);
    this.iconsMap = iconsMap;
  },
  methods: {
    generateIconCode(symbol) {
      return `<svg-icon icon-class="${symbol}" />`;
    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.icons-container {
  margin: 10px 20px 0;
  overflow: hidden;
  .icons-wrapper {
    overflow: hidden;
  }
  .icon-item {
    margin: 20px;
    height: 110px;
    text-align: center;
    width: 14%;
    float: left;
    font-size: 30px;
    color: #24292e;
    cursor: pointer;
  }
  span {
    display: block;
    font-size: 24px;
    margin-top: 10px;
    word-break:break-all;
    word-wrap:break-word;
  }
  .disabled{
    pointer-events: none;
  }
}
</style>
