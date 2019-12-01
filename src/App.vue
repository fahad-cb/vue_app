<template>
  <div id="app">
    <app-navbar></app-navbar>
    <router-view></router-view>
    
  </div>
</template>


<script>

import NavBar from './NavBar.vue';

export default {
  name: 'app',
  components: {
    'app-navbar':NavBar,
  },
  data () {
    return {
      info: null
    }
  },
  // mounted () {
  //   axios
  //     .get('https://api.coindesk.com/v1/bpi/currentprice.json')
  //     .then(response => (this.info = response))
  // }
}
</script>

<style>

</style>
