<template>
  <div id="nb-app">
    <NprogressContainer/>
    <router-view/>
  </div>
</template>

<script>
import NprogressContainer from 'vue-nprogress/src/NprogressContainer';
export default {
  data () {
    return {
      preference : this.$store.state.preference
    }
  },
  name: 'App',
  components: {
    NprogressContainer
  },
  mounted() {

    
    this.preference.httpFetch();
  }
}
</script>

<style lang="less" rel="stylesheet/less">
@import '~font-awesome/css/font-awesome.css';
@import './assets/css/app.less';

  .nb-app {
    height: 100%;

    .nprogress-container {
      position: fixed !important;
      width: 100%;
      height: 150px;
      z-index: 2048;
      pointer-events: none;
    }
  }
</style>
