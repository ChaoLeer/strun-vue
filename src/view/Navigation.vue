<template>
  <div class="st-fixed" >
    <mu-appbar title="strun" titleClass='st-title' :zDepth="1">
      <mu-icon-button class="st-title-icon" icon='menu' @click="toggleLeftUserMenu" slot="left"/>
      
      <!-- <mu-text-field icon="search" class="appbar-search-field"  slot="left" hintText="请输入搜索内容"/> -->

      <div class="nav-user" slot="right">
        <div class="user-info">
          <div class="login-regist" v-if="!systemUser.login">
            <router-link :to="{ name: 'sign', query: { signtype: 'login' }}">登录</router-link>
            |
            <router-link :to="{ name: 'sign', query: { signtype: 'regist' }}">注册</router-link>
          </div>
          <mu-chip v-if="systemUser.login" ref="userMenuBtn" @click="toggleUserMenu" backgroundColor="transparent">
            <mu-icon value="perm_identity" color="red"/>Hello! {{systemUser.username}}
          </mu-chip>
          <!-- <mu-raised-button  v-if="systemUser.login" ref="userMenuBtn" @click="toggleUserMenu" ></mu-raised-button> -->
          <!-- 右侧栏 start -->
          <mu-popover :trigger="trigger" popoverClass="user-menu mt20" :open="show" @close="closeUserMenu">
            <!--<p class="user-name">{{'Hello!  ' + systemUser.username}}</p>-->
            <mu-menu :autoWidth="true" :width="300">
              <mu-menu-item leftIconClass="user-icon" to="/myarticlelist" leftIcon="description" title="我的文章"/>
              <mu-menu-item title="新增文章" to="/edit" leftIcon="edit" leftIconClass="user-icon"/>
              <mu-divider shallowInset/>
              <mu-menu-item  leftIcon="power_settings_new" leftIconClass="user-icon"  title="退出" @click="singOut"/>
            </mu-menu>
          </mu-popover>
          <!-- 右侧栏 end -->
        </div>
      </div>
    </mu-appbar>
    
  </div>
  
</template>

<script>
  import {Exception} from 'utils'
  import {mapState, mapActions} from 'vuex'
  import userPic from '../assets/person.png'
  export default {
    name: 'navigation',
    computed: mapState({
      // 箭头函数可使代码更简练
      systemUser: state => state.user,
      leftShow: state => state.slidemenu.slidemenuState
    }),
    data () {
      return {
        show: false,
        // leftShow: false,
        userPic,
        userName: 'nikjia',
        trigger: null
      }
    },
    methods: {
      handleSelect (key, keyPath) {
        console.log(key, keyPath)
        let vm = this
        console.log(vm.systemUser)
        vm.basePath = keyPath.join('/')
        if (!vm.systemUser) {
          try {
            throw new Exception('请登录', '10001', vm)
          } catch (error) {
            console.log(error)
          }
          return
        }
      },
      ...mapActions([
        'userlogin',
        'userloginout',
        'closeSlidemenu',
        'openSlidemenu'
      ]),
      handleCommand: function (command) {
        let vm = this
        // this.$message('click' + command)
        if (command === 'quit') {
          // this.$message('退出')
          this.userloginout()
          this.$router.push('/')
          vm.$toast('退出成功！', 'top', 3600)
        }
      },
      togslide: function () {
        if (this.show) {
          this.closeSlidemenu()
        } else {
          this.openSlidemenu()
        }
        this.show = !this.show
        // return this.show
      },
      toggleUserMenu: function () {
        this.show = !this.show
      },
      closeUserMenu: function () {
        this.show = false
      },
      toggleLeftUserMenu: function () {
        if (this.leftShow) {
          this.closeSlidemenu()
        } else {
          this.openSlidemenu()
        }
      },
      singOut: function () {
        this.userloginout()
        window.location.reload()
      }
    },
    mounted () {
      // if (JSON.parse(localStorage.getItem('user'))) {
      if (this.systemUser.login) {
        this.$nextTick(function () {
          this.trigger = this.$refs.userMenuBtn.$el
        })
      }
      // }
    }
  }
</script>
