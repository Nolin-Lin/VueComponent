<!--  -->
<template>
  <footer>
    <ul class="menu" :style="{background: footerMenu.backgroundColor}">
      <li class="menu-item"
      v-for="(item, index) in footerMenu.content"
      :key="index" @click="liActive(index)"
      :style="{
        flexDirection: iconShow,
        backgroundColor: item.activeBackgroundColor,
        borderRightColor: item.activeBorderColor ? item.activeBorderColor : footerMenu.borderColor,
        borderRightWidth: footerMenu.borderShow + 'px'
      }"
      >
        <div class="menu-item-img">
          <icon name="home" style="width: 100%;height: 100%;"></icon>
        </div>
        <div class="menu-item-text"
          v-if="footerMenu.textShow"
          :style="{color: item.activeTextColor ? item.activeTextColor :footerMenu.textColor}"
        >{{item.name}}</div>
      </li>
    </ul>
  </footer>
</template>

<script>
export default {
  props: ['footerMenu'],
  data() {
    return {
      liIndex: 0
    };
  },
  watch: {
    'footerMenu.borderPickColor': (val) => {
      if (this.footerMenu.borderShow) {
        this.$set(this.footerMenu.content[this.liIndex], 'activeBorderColor', val);
      }
    },
    'footerMenu.textPickColor': (val) => {
      this.$set(this.footerMenu.content[this.liIndex], 'activeTextColor', val);
    }
  },
  computed: {
    iconShow() {
      if (this.footerMenu.iconShow === 1) {
        return 'row';
      }
      return '';
    }
  },
  methods: {
    liActive(i) {
      const lis = this.footerMenu.content;

      lis.forEach((li, index) => {
        if (index === i) {
          this.liIndex = index;
          this.$set(this.footerMenu.content[index], 'activeTextColor', this.footerMenu.textPickColor);
          this.$set(this.footerMenu.content[index], 'activeBackgroundColor', this.footerMenu.backgroundPickColor);
          if (this.footerMenu.borderShow) {
            this.$set(this.footerMenu.content[index], 'activeBorderColor', this.footerMenu.borderPickColor);
          }
        } else {
          this.$set(this.footerMenu.content[index], 'activeBackgroundColor', '');
          this.$set(this.footerMenu.content[index], 'activeTextColor', '');
          this.$set(this.footerMenu.content[index], 'activeBorderColor', '');
        }
      });
    }
  }
};

</script>
<style lang='scss' scoped>
  footer{
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
  }
  .menu{
    display: flex;
    align-self: center;
    background: #fff;
    box-shadow: 0 0px 12px 0 rgba(0,0,0,.1);
    .menu-item{
      width: 100%;
      text-align: center;
      padding: 6px 0;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      border-right-width: 1px;
      border-right-style: solid;
      border-right-color: transparent;
      &:last-child{
        border-right: 0;
      }
    }
    .menu-item-img{
      width: 26px;
      height: 26px;
    }
    .menu-item-text{
      color: #5d656b;
    }
  }

</style>
