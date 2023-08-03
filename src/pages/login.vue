<template>
  <div class="login">
      <span
        :class="{
          'lang': true,
          'language-css': true,
          'language-css-en': language === 'en'
        }"
        :style="languageStyle"
        @click="clickLanguage"
      >
      </span>
      <div
        class="themeBtn fs-24 flex-align flex-center"
        @click="openThemeShow = true"
        :style="{'background': themeColor }">
        <van-icon name="arrow-down" />
      </div>
    <div class="login-box">
      <div class="login-title">
        <p
          @click="status = 1"
          class="fs-36"
          :class="{
            'fs-40': status === 1,
            active: status === 1
          }"
        >登录</p>
        <p
          @click="status = 0"
          class="fs-36"
          :class="{
            'fs-40': status === 0,
            active: status === 0
          }"
        >绑卡</p>
        <s :class="['title-glide', glideClassName]"></s>
      </div>
      <van-form
        ref="login-form"
        label-width="60px"
        class="login-form"
      >
        <template v-if="status===0">
          <van-field
            key="1"
            label-width="90px"
            v-model="cardCode"
            label="兑换码"
            placeholder="请输入兑换码"
            clearable
            :rules="[{ required: true, message: '请输入兑换码' }]"
          />
          <van-field
            key="2"
            label-width="90px"
            v-model="name"
            label="姓名"
            placeholder="请输入姓名"
            clearable
            :rules="[{ required: true, message: '请输入姓名' }]"
          />
        </template>
        <van-field
          key="3"
          label-width="90px"
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
          label-width="90px"
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
            icon-size="1.2em"
            checked-color="var(--themeColor)"
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
    <div style="margin: 0 20px">
      <van-button type="primary" size="large" round @click="loginSubmit">{{$t('login')}}</van-button>
    </div>
    <div class="flex-center ellipsis-1 fs-32 tourise-color" @click="silentLogin">游客身份浏览></div>
    <div class="flex-center ellipsis-1 fs-32 tourise-color" @click="resetData">重置data数据></div>

    <van-popup v-model="openThemeShow" position="right" :style="{ height: '100%' }">
      <div
      :key="item.id"
      v-for="item in themeColors"
      class="flex-align flex-center"
      @click="changeSkip(item)"
      :style="{
        'width': '120px',
        'height':'40px',
        'border-radius': '10px',
        'margin': '5px 10px',
        'color': '#fff',
        'background': item
        }">{{item}}</div>
    </van-popup>
  </div>
</template>

<script>
import { Form, Field, Checkbox, Button, Popup, Toast, Icon } from 'vant'
import { mapMutations } from 'vuex'
export default {
  name: 'Login',
  components: {
    [Icon.name]: Icon,
    [Toast.name]: Toast,
    [Popup.name]: Popup,
    [Button.name]: Button,
    [Form.name]: Form,
    [Field.name]: Field,
    [Checkbox.name]: Checkbox
  },
  data () {
    return {
      CONFIG,
      themeColors: ['#4DC2A5', '#EE9E09', '#72AEE6'],
      openThemeShow: false,
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
    languageStyle () {
      const style = {
        borderRadius: '50%',
        borderWidth: '2px',
        borderStyle: 'solid',
        color: '#fff',
        borderColor: 'rgb(255, 255, 255) transparent',
        borderRightColor: 'transparent',
        borderLeftColor: 'transparent',
        transform: `rotate(${this.language === 'en' ? 225 : 45}deg) scale(1)`,
        transition: '0.3s'
      }
      return style
    },
    language () {
      return this.$store.state.lang
    },
    ...mapMutations([
      'SET_THEMECOLOR'
    ]),
    themeColor () {
      return this.$store.state.themeColor
    },
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
    // 中英文切换
    clickLanguage () {
      const lang = this.language === 'en' ? 'zh' : 'en'
      this.$store.commit('SET_LANG', lang)
    },
    // 换肤
    changeSkip (color) {
      this.$store.commit('SET_THEMECOLOR', color)
      this.openThemeShow = false
    },
    // 游客静默登录
    silentLogin () {
      this.$router.push('/home')
    },
    // 重置-还原初始data状态，不需要一个一个手动赋值清空
    resetData () {
      Object.assign(this.$data, this.$options.data())
    },
    clickTitle (index) {
      this.status = index
    },
    clickCode () {},
    clickRead (name) {
      window.open(`${location.origin}/${name}.pdf`)
    },
    // 登陆
    loginSubmit () {
      Toast(this.$t('msg', { a: '手机号', b: '验证码', c: 'alwa：' }))
      this.$router.push('/home')
    }
  },
  mounted () {
    const { status } = this.$route.query
    if (status) this.status = Number(status)
  }
}
</script>

<style lang="less" scoped>
.language-css {
  &::before,
  &::after {
    position: absolute;
    transform: rotate(-45deg);
    transition: 0.3s;
    opacity: 0.5;
  }
  &::before {
    content: "En";
    top: 8px;
    left: -16px;
  }
  &::after {
    opacity: 1;
    font-weight: 700;
    content: "中";
    bottom: 10px;
    right: -18px;
  }
  &.language-css-en {
    &::before,
    &::after {
      opacity: 0.5;
      transform: rotate(-225deg);
    };
    &::before {
      opacity: 1;
      font-weight: 700;
    }
  }
}
.lang {
  font-size: 20px;
  width: 36px;
  height: 36px;
  position: absolute;
  top: 20px;
  left: 20px;
}
.themeBtn {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 40px;
  height: 40px;
  border: 1px solid #fff;
  border-radius: 6px;
  color: #fff
}
.tourise-color {
  margin-top: 30px;
  color: var(--themeColor);
}
.login {
  position: relative;
  min-height: 100vh;
  background-image: url('http://qnimg.zowoyoo.com/img/84826/1648454073272.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-color: #f8f8f9;
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
      border-bottom: 1px solid #f1f1f1;
      margin: 0 32px;
      p {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 20px 0 40px 0;
        font-weight: 500;
        color: #999999;
        &.active {
          font-weight: 500;
          color: #333333;
        }
      }
      .title-glide {
        position: absolute;
        bottom: 0;
        width: 79px;
        height: 6px;
        background: var(--themeColor);
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
        color: var(--themeColor);
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
            color: var(--themeColor);
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
    background-image: linear-gradient(to top, var(--themeColor), #FFAC5A);
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
