<template>
  <div class="login-wrap">
    <!-- 登录页 再拆 后台登录 注册 -->
    <div class="login-wrap-box" v-if="!dialogVisible" @keyup.enter.stop="loginBtn">
      <div class="login-wrap-box-title">用户登录CDN</div>
      <el-tabs v-model="loginMode" @tab-click="handLoginModeClick">
        <el-tab-pane label="账号登录" name="01">
          <el-row>
            <el-col :span="24">
              <el-input placeholder="请输入用户名" prefix-icon="el-icon-user-solid" v-model="userName"></el-input>
            </el-col>
            <el-col :span="24">
              <el-input
                placeholder="请输入密码"
                prefix-icon="el-icon-key"
                v-model="passWord"
                :show-password="true"
              ></el-input>
            </el-col>
          </el-row>
        </el-tab-pane>
        <el-tab-pane label="手机登录" name="02">
          <el-row>
            <el-col :span="24">
              <el-input placeholder="请输入手机号" prefix-icon="el-icon-mobile-phone" v-model="phone"></el-input>
            </el-col>
            <el-col :span="24">
              <el-input
                placeholder="请输入验证码"
                prefix-icon="el-icon-unlock"
                v-model="phoneCode"
                class="phone-code-input"
              ></el-input>
              <span class="phone-code" @click="getPhoneCode">获取验证码</span>
            </el-col>
          </el-row>
        </el-tab-pane>
      </el-tabs>
      <el-row>
        <el-col>
          <el-checkbox v-model="remember">记住账号</el-checkbox>
          <span class="forgot">
            <span>忘记密码?</span>｜
            <span @click="openRegister">注册新账号</span>
          </span>
        </el-col>
        <el-col style="margin-top: 10px">
          <el-button type="primary" class="el-signin" @click="loginBtn">登录</el-button>
        </el-col>
        <el-col>
          <div class="social-contactp">
            <h6>社交帐号登录</h6>
            <div class="mode">
              <span>
                <blIcon fontSize="30" fontClass="QQ"></blIcon>
              </span>
              <span>
                <blIcon fontSize="30" fontClass="weixin"></blIcon>
              </span>
              <span @click="openSystem">
                <blIcon fontSize="30" fontClass="yingyongguanliyuanguanli"></blIcon>
              </span>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <el-dialog
      title="管理员登录"
      v-model="dialogVisible"
      custom-class="el-system-dialog"
      :before-close="handleClose"
    >
      <el-row>
        <el-col :span="24">
          <el-input placeholder="请输入管理员用户名" prefix-icon="el-icon-user-solid" v-model="userName"></el-input>
        </el-col>
        <el-col :span="24">
          <el-input
            placeholder="请输入管理员密码"
            prefix-icon="el-icon-key"
            v-model="passWord"
            :show-password="true"
          ></el-input>
        </el-col>
      </el-row>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消登录</el-button>
          <el-button type="primary" @click="systemLoginBtn">登录</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
/**
 * 用户登录接口
 * 用户注册接口
 * 查询用户昵称重复及查询账号重复
 * 重置接口
 */
// 账号 测试用5
// 密码 1234567
import axios from '@/utils/http.js'
import { onBeforeMount, ref } from 'vue'
import { useSignIn, useOpen, useSystemSign } from './use/signIn'
import { useRoute } from 'vue-router'

export default {
  name: 'login',
  setup(props) {
    // 登录区分 01 账号密码登录 02 手机号登录
    let loginMode = ref('01')
    // 路由信息存储
    let route = ref('')
    onBeforeMount(() => {
      route.value = useRoute()
    })

    // 用户 账号登录等
    const loginBtn = useSignIn(loginMode, route)
    // 打开页面或其他链接
    const open = useOpen()
    // 管理员操作
    const systemSign = useSystemSign()
    // 手机号登录
    return {
      route,
      loginMode,
      ...loginBtn,
      ...open,
      ...systemSign
    }
  }
}
</script>

<style lang="scss" scoped>
::v-deep .is-active,
::v-deep .el-tabs__item:hover {
  color: red;
}
::v-deep .el-tabs__active-bar {
  background: red;
  height: 3px;
}
::v-deep .el-tabs__nav-wrap::after {
  height: 0;
}
::v-deep .el-tabs__nav-scroll {
  display: flex;
  justify-content: center;
}
.login-wrap {
  height: 100%;
  width: 100%;
  min-width: 1366px;
  min-height: 700px;
  background: url("../assets/login.jpg") no-repeat;
  background-size: 100% 100%;
  position: relative;
  &-box {
    width: 400px;
    height: 450px;
    background: #fff;
    position: absolute;
    top: 50%;
    right: 10%;
    transform: translateY(-50%);
    padding: 60px;
    border-radius: 5px;
    &-title {
      position: absolute;
      top: 25px;
      left: 50%;
      transform: translateX(-50%);
    }
  }
}
::v-deep .el-col-24 {
  margin-bottom: 15px;
}
::v-deep .el-signin.el-button {
  width: 240px;
  height: 40px;
  border-radius: 30px;
  display: block;
  margin: 0 auto;
}
::v-deep .el-signin.el-button--primary {
  background-color: #4a33f5;
  border-color: #4a33f5;
}
::v-deep .el-signin.el-button--primary:hover {
  opacity: 0.8;
}
.forgot {
  color: blue;
  font-size: 12px;
  line-height: 22px;
  float: right;
  cursor: pointer;
}
.phone-code {
  position: absolute;
  top: 10px;
  right: 15px;
  font-size: 14px;
  color: blue;
  cursor: pointer;
}
::v-deep .phone-code-input .el-input__inner {
  padding-right: 90px;
}
.social-contactp {
  margin-top: 25px;
  h6 {
    position: relative;
    margin: 0 0 10px;
    font-size: 12px;
    color: #b5b5b5;
    text-align: center;
  }

  h6::after,
  h6::before {
    content: "";
    border-top: 1px solid #b5b5b5;
    display: block;
    position: absolute;
    width: 60px;
    top: 10px;
  }
  h6::before {
    left: 30px;
  }
  h6::after {
    right: 30px;
  }
  .mode {
    margin-top: 20px;
    display: flex;
    justify-content: space-around;
    > span {
      cursor: pointer;
    }
  }
}
// 弹层
::v-deep .el-system-dialog {
  width: 450px !important;
  height: 280px;
  border-radius: 10px;
  .el-dialog__body {
    padding: 30px 50px 5px;
  }
  .el-dialog__footer {
    display: flex;
    justify-content: center;
    .el-button {
      width: 88px;
      border-radius: 5px;
      padding: 0;
      height: 37px;
    }
  }
}
</style>
