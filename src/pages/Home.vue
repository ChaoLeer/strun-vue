<template>
  <div class="main" :class="{'trans': active}">
    <navigation></navigation> 
    <transition name="component-fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <mu-float-button v-if="addBtnState" @click="jumpEdit" icon="add" secondary class="st-add-button"/>
    <sidemenu></sidemenu>
  </div>
</template>

<script>
  import navigation from 'view/Navigation.vue'
  import sidemenu from 'view/Sidemenu.vue'
  import {mapState} from 'vuex'
  export default {
    components: {
      navigation,
      sidemenu
    },
    data () {
      return {}
    },
    computed: mapState({
      active: state => state.slidemenu.slidemenuState,
      addBtnState: state => state.slidemenu.addBtnState
    }),
    methods: {
      jumpEdit: function () {
        this.$router.push('/edit')
      }
    }
  }
</script>

<style lang='scss'>
  .main{
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    width: auto;
    overflow-y: auto;
    background: #fff;
    padding-top: 56px;
    &.trans{
      padding-left: 0;
      .st-fixed{
        left: 0px;
      }
    }
  }
  @media screen and (min-width: 993px) {
    .main.trans{
      padding-left: 280px;
      transition: all .45s cubic-bezier(.23,1,.32,1);
      .st-fixed{
        left: 280px;
        transition: all .45s cubic-bezier(.23,1,.32,1);
      }
    }
    .mu-overlay{
      display: none;
    }

  }
  .pd3{
    padding-top: 3rem;
  }
  .pd4{
    padding-top: 4rem;
  }
  .pd5{
    padding-top: 5rem;
  }
</style>
