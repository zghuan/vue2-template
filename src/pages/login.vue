<template>
  <div class="login">
    <div class="login-box">
      <div class="login-title">
        <p
          @click="clickTitle(1)"
          :class="{
            active: status === 1
          }"
        >登录</p>
        <p
          @click="clickTitle(0)"
          :class="{
            active: status === 0
          }"
        >绑卡</p>
        <s :class="['title-glide', glideClassName]"></s>
      </div>
      <van-form
        ref="login-form"
        label-width="60px"
        class="login-form"
        @submit="loginSubmit"
      >
        <template v-if="status===0">
          <van-field
            key="1"
            v-model="cardCode"
            label="兑换码"
            placeholder="请输入兑换码"
            clearable
            :rules="[{ required: true, message: '请输入兑换码' }]"
          />
          <van-field
            key="2"
            v-model="name"
            label="姓名"
            placeholder="请输入姓名"
            clearable
            :rules="[{ required: true, message: '请输入姓名' }]"
          />
        </template>
        <van-field
          key="3"
          v-model="phone"
          label="手机号"
          type="tel"
          placeholder="请输入手机号"
          clearable
          :rules="[{ required: true, pattern: /^1\d{10}/, message: '请输入正确的手机号' }]"
        />
        <van-field
          key="4"
          v-model="code"
          clearable
          label="验证码"
          placeholder="请输入验证码"
          :rules="[{ required: true, message: '请输入验证码' }]"
        >
          <template #button>
            <span :class="{
              'code-show': num === 60
            }" @click="clickCode">{{codeTemplat}}</span>
          </template>
        </van-field>
        <div class="agreement" v-if="status === 0">
          <van-checkbox
            class="agreement-checkbox"
            v-model="checked"
            icon-size="14"
            checked-color="#FF8E1F"
          ></van-checkbox>
          <div
            class="agreement-text"
            @click="checked = !checked"
          >
            已经阅读同意
            <span @click.stop="clickRead('user', '用户协议')">《用户协议》</span>和<span @click.stop="clickRead('privacy', '隐私政策')">《隐私政策》</span>
            <!-- 首次登录将自动注册 -->
          </div>
        </div>
      </van-form>
    </div>
    <!-- {{openid}} -->
    <div
      :class="loginbtnClassName"
      @click="handleClick"
    >
      登录
    </div>
    <div class="flex-center" style="color: #FF8E1F;font-size: 14px;margin-top: 30px;" @click="silentLogin">游客身份浏览>></div>
  </div>
</template>

<script>
import { Form, Field, Checkbox } from 'vant'

export default {
  name: 'TestLogin',
  components: {
    [Form.name]: Form,
    [Field.name]: Field,
    [Checkbox.name]: Checkbox
  },
  data () {
    return {
      appId: 'wxe26adb51e4f23eaf',
      parentCustId: 2485469,
      openid: '',
      fullPath: '/home',
      status: 1,
      num: 60, // 倒计时
      cardCode: '', // 兑换码
      name: '', // 姓名
      phone: '', // 手机号
      code: '', // 验证码
      checked: false // 是否勾选协议
    }
  },
  watch: {
    status (val) {
      const query = this.$router.history.current.query
      const path = this.$router.history.current.path
      const newQuery = JSON.parse(JSON.stringify(query))
      newQuery.status = val
      this.$router.push({ path, query: newQuery })
    }
  },
  computed: {
    glideClassName () {
      let name = 'title-glide1'
      if (this.status === 0) {
        name = 'title-glide2'
      }
      return name
    },
    loginbtnClassName () {
      if (this.status === 1) {
        if (this.phone && this.code) {
          return 'login-btn'
        }
        return 'login-btn login-btn-disabled'
      }
      if (this.cardCode && this.name && this.phone && this.code) {
        return 'login-btn'
      }
      return 'login-btn login-btn-disabled'
    },
    codeTemplat () {
      if (this.num >= 60) {
        return '发送验证码'
      }
      return `${this.num}秒后重试`
    }
  },
  methods: {
    // 游客静默登录
    silentLogin () {
    },
    getWxOpenId () {},
    clickTitle (index) {
      this.status = index
    },
    clickCode () {},
    clickRead (name, title) {
      // console.log(index)
      // pdf线上有问题，先预上线使用
      if (this.$browser.android && window.location.origin.indexOf('stag') > -1) {
        this.$router.push({
          path: '/pdf',
          query: {
            name,
            title
          }
        })
        return
      }
      window.open(`${location.origin}/${name}.pdf`)
    },
    handleClick () {
      this.$refs['login-form'].submit()
    },
    loginSubmit () {}
  },
  mounted () {
    const { fullPath, status } = this.$route.query
    if (status) this.status = Number(status)
    // this.openid = getCookie('uid') || getCookie('uid_2485469') || ''
    if (fullPath && decodeURIComponent(fullPath) !== '/') {
      this.fullPath = fullPath
    }

    // 开发环境在url上拿openid
    if (process.env.NODE_ENV === 'development') {
      this.parentCustId = 84826
    }

    if (!this.openid && window.location.host.indexOf('localhost') === -1) {
      this.getWxOpenId()
    }
    if (this.openid) {
      this.loginSubmit()
    }
  }
}
</script>

<style lang="less" scoped>
.login {
  // width: 100vw;
  min-height: 100vh;
  background-image: url('http://qnimg.zowoyoo.com/img/84826/1643009646986.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-color: #FFE3B2;
  padding-top: 419px;
  padding-bottom: 40px;
  box-sizing: border-box;
  .login-box {
    width: 670px;
    background: #FFFFFF;
    padding-bottom: 20px;
    border-radius: 30px;
    margin: 0 auto;
    margin-bottom: 80px;
    .login-title {
      position: relative;
      display: flex;
      // width: 100%;
      border-bottom: 1px solid #f1f1f1;
      margin: 0 32px;
    // padding: 0 35px;
    // box-sizing: border-box;
      p {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 118px;
        font-size: 34px;
        font-weight: 500;
        color: #999999;
        &.active {
          font-size: 40px;
          font-weight: 500;
          color: #333333;
        }
      }
      .title-glide {
        position: absolute;
        bottom: 0;
        width: 79px;
        height: 6px;
        background: #FF8E1F;
        border-radius: 3px 3px 0px 0px;
        transition: left 0.3s ease;
      }
      .title-glide1 {
        left: 109px;
      }
      .title-glide2 {
        left: 411.5px;
      }
    }
    .login-form {
      .code-show {
        color: #FF8E1F;
      }
      .agreement {
        display: flex;
        font-weight: 500;
        font-size: 24px;
        color: #999999;
        line-height: 36px;
        padding: 20px 0px;
        margin: 0 32px;
        .agreement-checkbox {
          flex-shrink: 0;
        }
        .agreement-text {
          padding-left: 10px;
          span {
            color: #FF8E1F;
          }
        }
      }
    }

  }
  .login-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 670px;
    height: 100px;
    background-image: linear-gradient(to top, #FF8E1F, #FFAC5A);
    box-shadow: 0px 4px 9px 0px rgba(234, 117, 27, 0.3);
    border-radius: 50px;
    margin: 0 auto;
    font-size: 32px;
    font-weight: 500;
    color: #FFFFFF;
    &.login-btn-disabled {
      background: linear-gradient(0deg, #FFD093, #FFC57F);
      box-shadow: 0px 4px 9px 0px rgba(255, 188, 105, 0.3);
    }
  }
}
</style>
<style lang="less">
  .login {
    .van-cell__value {
      text-align: left !important;
    }
    .van-field__control {
      text-align: left !important;
    }
  }
</style>
