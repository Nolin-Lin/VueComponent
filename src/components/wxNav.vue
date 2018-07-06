<!-- 自定义菜单编辑 -->
<template>
  <el-row :gutter="20">
    <el-col :span="8">
      <div class="preview-warp">
        <div class="preview-title">AI公排</div>
        <div class="preview-cont">
          <div class="preview-menu-warp">
            <div class="preview-menu-keyboard">
              <img src="/static/keyboard.png">
            </div>
            <ul class="preview-menu">
              <li
                class="preview-menu-item"
                v-for="(main, index) in mainTabs"
                :key="index"
                @click="switchTab(index)"
              >
                <el-dropdown trigger="click" placement="top" @command="switchChildTab">
                  <div>
                    <span
                      class="fa fa-navicon"
                      style="margin-right: 6px;"
                      v-if=" main.childTab != '' "
                    ></span>{{ main.mainTabName }}</div>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item
                    v-for="(child, index) in main.childTab"
                    :key="index"
                    :command="index"
                    v-html="child.childTabName"
                  ></el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </el-col>
    <el-col :span="16">
      <el-card shadow="never">
        <div slot="header">
          <span>自定义菜单</span>
        </div>
        <el-row :gutter="20">
          <el-col :span="6">菜单栏标题</el-col>
          <el-col :span="12">
            <el-input placeholder="请输入菜单栏标题"></el-input>
            <div class="el-tip">仅用于区分个性化菜单栏</div>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="6">添加菜单栏</el-col>
          <el-col :span="12">
            <el-button type="primary" @click="addTab('', 'add')">添加菜单</el-button>
          </el-col>
        </el-row>
        <!-- 主菜单 -->
        <el-tabs
          type="card"
          closable
          v-model="mainTabModel"
          @tab-remove="removeTab"
          v-if="mainTabs != ''"
        >
          <el-tab-pane
            v-for="(maint, index) in mainTabs"
            :key="index"
            :label="maint.title"
            :name="maint.name"
          >
            <el-row :gutter="20">
              <el-col :span="6">菜单名称</el-col>
              <el-col :span="12">
                <el-input placeholder="请输入菜单标题" v-model="maint.mainTabName">
                  <el-button slot="append" icon="fa fa-smile-o"></el-button>
                </el-input>
                <el-button
                  type="primary"
                  style="margin-top: 10px;"
                  @click="addTab(index, 'child')"
                >添加子菜单</el-button>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="6">菜单动作</el-col>
              <el-col :span="12">
                <div style="margin-bottom: 10px;">
                  <el-radio v-model="radio" label="1">链接</el-radio>
                  <el-radio v-model="radio" label="2">触发关键字</el-radio>
                </div>
                <div style="margin-bottom: 10px;">
                  <el-radio v-model="radio" label="3">扫码</el-radio>
                  <el-radio v-model="radio" label="4">扫码（等待信息）</el-radio>
                </div>
                <div style="margin-bottom: 10px;">
                  <el-radio v-model="radio" label="5">系统拍照发图</el-radio>
                  <el-radio v-model="radio" label="6">拍照或者相册发图</el-radio>
                </div>
                <div style="margin-bottom: 10px;">
                  <el-radio v-model="radio" label="7">微信相册发图</el-radio>
                  <el-radio v-model="radio" label="8">地理位置</el-radio>
                </div>
                <div style="margin-bottom: 10px;">
                  <el-radio v-model="radio" label="9">回复素材</el-radio>
                  <el-radio v-model="radio" label="10">跳转图文</el-radio>
                </div>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="6">关键字触发</el-col>
              <el-col :span="12">
                <el-input placeholder="请输入菜单标题">
                  <el-button slot="append" icon="el-icon-search"></el-button>
                </el-input>
                <div class="el-tip">
                  <span>指定点击此菜单时要执行的操作,</span>
                  <span>你可以在这里输入关键字,</span>
                  <span>那么点击这个菜单时就就相当于发送这个内容至微擎系统</span>
                </div>
                <div class="el-tip">
                  <span>这个过程是程序模拟的,</span>
                  <span>比如这里添加关键字: 优惠券, </span>
                  <span>那么点击这个菜单是, 微擎系统相当于接受了粉丝用户的消息, 内容为"优惠券"</span>
                </div>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="6">子菜单</el-col>
              <el-col :span="18">
                <!-- 子菜单 -->
                <el-tabs type="card"
                  closable
                  v-model="maint.childTabModel"
                  @tab-remove="removeChildTab"
                  v-if="maint.childTab != ''"
                >
                  <el-tab-pane
                    v-for="(childT, index) in maint.childTab"
                    :key="index"
                    :label="childT.title"
                    :name="childT.name"
                  >
                    <el-row :gutter="20">
                      <el-col :span="6">菜单名称</el-col>
                      <el-col :span="12" class="icon">
                        <el-input placeholder="请输入菜单标题" v-model="childT.childTabName">
                        </el-input>
                      </el-col>
                    </el-row>
                    <el-row :gutter="20">
                      <el-col :span="6">菜单动作</el-col>
                      <el-col :span="12">
                        <div style="margin-bottom: 10px;">
                          <el-radio v-model="radio" label="1">链接</el-radio>
                          <el-radio v-model="radio" label="2">触发关键字</el-radio>
                        </div>
                        <div style="margin-bottom: 10px;">
                          <el-radio v-model="radio" label="3">扫码</el-radio>
                          <el-radio v-model="radio" label="4">扫码（等待信息）</el-radio>
                        </div>
                        <div style="margin-bottom: 10px;">
                          <el-radio v-model="radio" label="5">系统拍照发图</el-radio>
                          <el-radio v-model="radio" label="6">拍照或者相册发图</el-radio>
                        </div>
                        <div style="margin-bottom: 10px;">
                          <el-radio v-model="radio" label="7">微信相册发图</el-radio>
                          <el-radio v-model="radio" label="8">地理位置</el-radio>
                        </div>
                        <div style="margin-bottom: 10px;">
                          <el-radio v-model="radio" label="9">回复素材</el-radio>
                          <el-radio v-model="radio" label="10">跳转图文</el-radio>
                        </div>
                      </el-col>
                    </el-row>
                    <el-row :gutter="20">
                      <el-col :span="6">关键字触发</el-col>
                      <el-col :span="12">
                        <el-input placeholder="请输入菜单标题">
                          <el-button slot="append" icon="el-icon-search"></el-button>
                        </el-input>
                        <div class="el-tip">
                          <span>指定点击此菜单时要执行的操作,</span>
                          <span>你可以在这里输入关键字,</span>
                          <span>那么点击这个菜单时就就相当于发送这个内容至微擎系统</span>
                        </div>
                        <div class="el-tip">
                          <span>这个过程是程序模拟的,</span>
                          <span>比如这里添加关键字: 优惠券, </span>
                          <span>那么点击这个菜单是, 微擎系统相当于接受了粉丝用户的消息, 内容为"优惠券"</span>
                        </div>
                      </el-col>
                    </el-row>
                  </el-tab-pane>
                </el-tabs>
              </el-col>
            </el-row>
          </el-tab-pane>
        </el-tabs>
      </el-card>
      <el-button type="primary">确定</el-button>
    </el-col>
  </el-row>
</template>

<script>

export default {
  data() {
    return {
      mainTabModel: '1',
      mainTabLimit: 1,
      mainTabs: [
        {
          title: '自定义菜单栏',
          name: '1',
          mainTabName: '菜单名称',
          childTabLimit: 1,
          childTabModel: '1-1',
          childTabIndex: 1,
          childTab: [
            {
              title: '子菜单栏',
              name: '1-1', // childTab名称
              childTabName: '子菜单名称' // 菜单名称输入框
            }
          ]
        }
      ],
      tabIndex: 1,
      radio: '1'
    };
  },
  methods: {
    addTab(targetName, type) { // 添加菜单项
      if (type === 'child') {
        // 添加子菜单

        // 最多添加5个子菜单
        if (this.mainTabs[targetName].childTabLimit < 5) {
          // this.mainTabs[targetName].childTabLimit = ++this.mainTabs[targetName].childTabLimit;
          this.mainTabs[targetName].childTabLimit += 1;
        } else {
          this.$alert('最多五个子菜单栏', '提示', {
            confirmButtonText: '确定'
          });
          return;
        }

        const newChildTabName = `${this.mainTabs[targetName].name}-${this.mainTabs[targetName].childTabIndex += 1}`;

        // 添加子菜单
        this.mainTabs[targetName].childTab.push({
          title: '子菜单栏',
          name: newChildTabName,
          childTabName: '子菜单名称'
        });

        this.mainTabs[targetName].childTabModel = newChildTabName;

        return;
      }

      // 添加主菜单
      // 最多添加3个子菜单
      if (this.mainTabLimit < 3) {
        // this.mainTabLimit = ++this.mainTabLimit;
        this.mainTabLimit += 1;
      } else {
        this.$alert('最多三个菜单栏', '提示', {
          confirmButtonText: '确定'
        });
        return;
      }

      const newTabName = `${this.tabIndex += 1}`;
      // 添加子菜单
      this.mainTabs.push({
        title: '自定义菜单栏',
        name: newTabName,
        mainTabName: '菜单名称',
        childTabLimit: 1,
        childTabModel: '1-1',
        childTabIndex: 1,
        childTab: [
          {
            title: '子菜单栏',
            name: '1-1',
            childTabName: '子菜单名称'
          }
        ]
      });

      this.mainTabModel = newTabName;
    },
    removeTab(targetName) { // 删除菜单项
      const tabs = this.mainTabs;
      let activeName = this.mainTabModel;

      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            const nextTab = tabs[index + 1] || tabs[index - 1];
            if (nextTab) {
              activeName = nextTab.name;
            }
          }
        });
      }

      this.mainTabModel = activeName;
      this.mainTabs = tabs.filter(tab => tab.name !== targetName);
      // this.mainTabLimit = --this.mainTabLimit;
      // this.tabIndex = --this.tabIndex;
      this.mainTabLimit -= 1;
      this.tabIndex -= 1;

      if (this.mainTabs.length === 0) {
        this.tabIndex = 0;
      }
    },
    removeChildTab(targetName) { // 删除子菜单项
      const targetNameArr = targetName.split('-');
      const index = targetNameArr[0] - 1;
      // const i = targetNameArr[1] - 1;
      let activeName = this.mainTabs[index].childTabModel;
      const tabs = this.mainTabs[index].childTab;
      // console.log(this.mainTabs[index])
      // console.log(this.mainTabs[index].childTab[i])

      if (activeName === targetName) {
        tabs.forEach((tab, j) => {
          if (tab.name === targetName) {
            const nextTab = tabs[j + 1] || tabs[j - 1];
            if (nextTab) {
              activeName = nextTab.name;
            }
          }
        });
      }

      this.mainTabs[index].childTabModel = activeName;
      this.mainTabs[index].childTab = tabs.filter(tab => tab.name !== targetName);
      // this.mainTabs[index].childTabLimit = --this.mainTabs[index].childTabLimit;
      // this.mainTabs[index].childTabIndex = --this.mainTabs[index].childTabIndex;
      this.mainTabs[index].childTabLimit -= 1;
      this.mainTabs[index].childTabIndex -= 1;

      if (this.mainTabs[index].childTab.length === 0) {
        this.mainTabs[index].childTabIndex = 0;
      }
    },
    switchTab(i) { // 主菜单选择显示
      this.mainTabModel = `${i + 1}`;
    },
    switchChildTab(i) { // 子菜单选择显示
      const mainIndex = this.mainTabModel - 1;

      this.mainTabs[mainIndex].childTabModel = this.mainTabs[mainIndex].childTab[i].name;
    }
  }
};
</script>

<style lang='scss'>
.el-card__body > .el-row > .el-col:first-child,
.el-tab-pane > .el-row > .el-col:first-child {
  text-align: right;
}
.el-card__body > .el-row,
.el-tab-pane > .el-row {
  margin: 0 0 25px;
  font-size: 14px;
  display: flex;
  align-items: center;
}
.el-tip {
  font-size: 12px;
  color: #606266;
  margin-top: 7px;
  text-align: left;
}
.preview-warp {
  position: relative;
  width: 370px;
  height: 812px;
  margin: 0 auto;
  background: url(/static/iPhoneX.png) no-repeat 0 0/100% 100%;
}
.preview-cont {
  position: absolute;
  top: 100px;
  left: 17px;
  width: 337px;
  height: 693px;
  border-radius: 0 0 41px 41px;
  overflow: hidden;
}
.preview-title {
  position: absolute;
  top: 70px;
  left: 50%;
  transform: translateX(-50%);
  color: #fff;
  font-size: 16px;
}
.preview-menu-warp {
  position: absolute;
  bottom: 23px;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  height: 50px;
  border-top: 1px solid #bdbdbd;
  background-color: #fff;
  .preview-menu-keyboard {
    width: 40px;
    height: 100%;
    padding: 0 20px;
    line-height: 50px;
    border-right: 1px solid #bdbdbd;
  }
  .preview-menu {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
  }
  .preview-menu-item {
    width: 100%;
    height: 100%;
    line-height: 50px;
    text-align: center;
    border-right: 1px solid #bdbdbd;
    &:last-child {
      border-right: 0;
    }
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
.fade-move {
  transition: transform 0.4s;
}
</style>
