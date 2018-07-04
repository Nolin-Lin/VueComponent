<template>
  <el-row :gutter="20">
    <el-col :span="6" style="margin-left: 20%;">
      <div class="preview-warp">
        <div class="preview-title">AI公排</div>
        <div class="preview-cont" :style="{backgroundColor: pageColor}">
          <footer-bar :footerMenu="footerArr"></footer-bar>
        </div>
      </div>
    </el-col>
    <el-col :span="10">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>底部导航栏样式</span>
        </div>
        <el-row :gutter="20">
          <el-col :span="12">
            <el-row :gutter="20">
              <el-col :span="6">菜单名称</el-col>
              <el-col :span="16">
                <el-input placeholder="请输入菜单名称" v-model="menuName"></el-input>
              </el-col>
            </el-row>
          </el-col>
          <el-col :span="12">
            <el-row :gutter="20">
              <el-col :span="7">预览背景色</el-col>
              <el-col :span="10">
                <el-color-picker show-alpha v-model="pageColor"></el-color-picker>
                <span class="el-upload__tip">(制作时可见)</span>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="12">
            <el-row :gutter="20">
              <el-col :span="6">文字设置</el-col>
              <el-col :span="16" style="text-align: left;">
                <el-radio-group v-model="footerArr.textShow">
                  <el-radio :label="0">不显示</el-radio>
                  <el-radio :label="1">显示</el-radio>
                </el-radio-group>
              </el-col>
            </el-row>
          </el-col>
          <el-col :span="12">
            <el-row :gutter="20">
              <el-col :span="4">颜色</el-col>
              <el-col :span="6">
                <el-color-picker show-alpha v-model="footerArr.textColor"></el-color-picker>
              </el-col>
              <el-col :span="6">选中色</el-col>
              <el-col :span="4">
                <el-color-picker show-alpha v-model="footerArr.textPickColor"></el-color-picker>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="12">
            <el-row :gutter="20">
              <el-col :span="6">图标设置</el-col>
              <el-col :span="16" style="text-align: left;">
                <el-radio-group v-model="footerArr.iconShow">
                  <el-radio :label="0">不显示</el-radio>
                  <el-radio :label="1">左侧</el-radio>
                  <el-radio :label="2">上侧</el-radio>
                </el-radio-group>
              </el-col>
            </el-row>
          </el-col>
          <!-- <el-col :span="12">
            <el-row :gutter="20">
              <el-col :span="4">颜色</el-col>
              <el-col :span="6">
                <el-color-picker show-alpha></el-color-picker>
              </el-col>
              <el-col :span="6">选中色</el-col>
              <el-col :span="4">
                <el-color-picker show-alpha></el-color-picker>
              </el-col>
            </el-row>
          </el-col> -->
        </el-row>
        <el-row :gutter="20">
          <el-col :span="12">
            <el-row :gutter="20">
              <el-col :span="6">边框设置</el-col>
              <el-col :span="16" style="text-align: left;">
                <el-radio-group v-model="footerArr.borderShow">
                  <el-radio :label="0">不显示</el-radio>
                  <el-radio :label="1">显示</el-radio>
                </el-radio-group>
              </el-col>
            </el-row>
          </el-col>
          <el-col :span="12">
            <el-row :gutter="20">
              <el-col :span="4">颜色</el-col>
              <el-col :span="6">
                <el-color-picker show-alpha v-model="footerArr.borderColor"></el-color-picker>
              </el-col>
              <el-col :span="6">选中色</el-col>
              <el-col :span="4">
                <el-color-picker show-alpha v-model="footerArr.borderPickColor"></el-color-picker>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="3">背景设置</el-col>
          <el-col :span="10">
            <el-row :gutter="20">
              <el-col :span="5">颜色</el-col>
              <el-col :span="7">
                <el-color-picker show-alpha v-model="footerArr.backgroundColor"></el-color-picker>
              </el-col>
              <el-col :span="6">选中色</el-col>
              <el-col :span="4">
                <el-color-picker
                  show-alpha v-model="footerArr.backgroundPickColor"
                ></el-color-picker>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </el-card>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>底部导航栏结构</span>
        </div>
        <el-row :gutter="10" v-for="(item, index) in footerArr.content" :key="index">
          <el-col :span="9">
            <el-row :gutter="10">
              <el-col :span="6">名称</el-col>
              <el-col :span="16">
                <el-input v-model="item.name" placeholder="请输入菜单名称"></el-input>
              </el-col>
            </el-row>
          </el-col>
          <el-col :span="15">
            <el-row :gutter="10">
              <el-col :span="3">操作</el-col>
              <el-col :span="21">
                <el-button
                  icon="el-icon-arrow-up"
                  size="small"
                  circle
                  @click="liUp(index)"
                ></el-button>
                <el-button
                  icon="el-icon-arrow-down"
                  size="small"
                  circle
                  @click="liDown(index)"
                ></el-button>
                <!-- <el-button
                  type="primary"
                  icon="fa fa-chain"
                  size="small"
                  @click="liLink(index)"
                >链接</el-button>
                <el-button
                  type="primary"
                  icon="el-icon-picture"
                  size="small"
                  @click="dialogIconVisible = true"
                >图标</el-button> -->
                <el-button
                  type="danger"
                  icon="el-icon-delete"
                  size="small"
                  @click="deleteli(index)"
                >删除</el-button>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
        <el-button
          icon="el-icon-plus"
          type="primary"
          style="margin-top: 10px;"
          @click="liAdd"
        >添加菜单项</el-button>
        <div class="el-upload__tip">底部导航栏最多只有5项</div>
      </el-card>
    </el-col>
    <el-dialog title="图标" width="60%" :visible.sync="dialogIconVisible">
      <el-row :gutter="20">
        <el-col :span="12">
          <el-row :gutter="20">
            <el-col :span="6">图标</el-col>
            <el-col :span="18">
              <el-upload
                class="upload-demo"
                drag
                action="https://jsonplaceholder.typicode.com/posts/"
                multiple>
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
              </el-upload>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="12">
          <el-row :gutter="20">
            <el-col :span="6">选中后的图标</el-col>
            <el-col :span="18">
              <el-upload
                class="upload-demo"
                drag
                action="https://jsonplaceholder.typicode.com/posts/"
                multiple>
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
              </el-upload>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogIconVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogIconVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </el-row>
</template>

<script>
import footerBar from '@/pages/mobile/footer';
import { upRecord, downRecord } from '@/js/utils';

export default {
  data() {
    return {
      menuName: '', // 菜单名称
      pageColor: '#ececec', // 页面背景色
      footerArr: {
        content: [
          {
            name: '菜单名',
            img: '',
            pickImg: '',
            url: ''
          }
        ],
        textShow: 1, // 文字是否显示
        textColor: '#5d656b', // 文字颜色
        textPickColor: '#FF852A', // 文字选中颜色
        iconShow: 2, // 图标显示
        borderShow: 0, // 边框是否显示
        borderColor: '#cdcdcd', // 边框颜色
        borderPickColor: '#409eff', // 边框选中颜色
        backgroundColor: '#fff', // 背景颜色
        backgroundPickColor: '' // 每一项选中后的颜色
      },
      roll: 2,
      text: 1,
      dialogIconVisible: false
    };
  },
  components: {
    footerBar
  },
  methods: {
    liUp(i) {
      upRecord(this.footerArr.content, i);
    },
    liDown(i) {
      downRecord(this.footerArr.content, i);
    },
    deleteli(i) {
      this.footerArr.content.splice(i, 1);
    },
    liLink() {
      this.$prompt('请输入链接', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputPattern: /[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+\.?/,
        inputErrorMessage: '链接格式不正确'
      }).then(({ value }) => {
        this.$message({
          type: 'success',
          message: `你的链接是: ${value}`
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消输入'
        });
      });
    },
    liAdd() {
      const initLi = {
        name: '菜单名',
        img: '',
        pickImg: '',
        url: ''
      };

      if (this.footerArr.content.length >= 5) {
        this.$alert('底部导航栏最多只有5项', '提示', {
          confirmButtonText: '确定'
        });
        return;
      }
      this.footerArr.content.push(initLi);
    }
  }
};

</script>
<style lang='scss'>
  .el-row+.el-row, .el-card+.el-card{
    margin-top: 14px;
  }
  .el-radio+.el-radio {
    margin-left: 12px;
  }
  .el-card__body .el-row{
    display: flex;
    align-items: center;
  }

  .el-card__body>.el-row > .el-col:first-child {
      text-align: right;
  }
  .preview-warp{
    position: relative;
    width: 370px;
    height: 812px;
    margin: 0 auto;
    background: url(/static/iPhoneX.png) no-repeat 0 0/100% 100%;
  }
  .preview-title{
    position: absolute;
    top: 70px;
    left: 50%;
    transform: translateX(-50%);
    color: #fff;
    font-size: 16px;
  }
  .preview-cont{
    position: absolute;
    top: 100px;
    left: 17px;
    width: 337px;
    height: 670px;
    border-radius: 0 0 6px 6px/ 0 0 18px 18px;
    overflow: hidden;
  }
  .el-collapse-item__content>.el-row>.el-col:first-child{
    text-align: right;
  }
</style>
