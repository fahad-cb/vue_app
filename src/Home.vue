<template>
  <div id="home">
    <app-weather city="Istanbul" woeid="2344116" ></app-weather>
    <app-weather city="berlin" woeid="638242" ></app-weather>
    <app-weather city="london" woeid="44418" ></app-weather>
    <app-weather city="Helsinki" woeid="565346" ></app-weather>
    <app-weather city="Dublin" woeid="560743" ></app-weather>
    <app-weather city="Vancouver" woeid="9807" ></app-weather>
  </div>
</template>


<script>


import NavBar from './NavBar.vue';
import Weather from './Weather.vue';

export default {
  name: 'home',
  components: {
    'app-weather':Weather,
  },
  data () {
    return {
      info: "Welcome to Your Vue.js Home"
    }
  },
  mounted () {
    this.$api
      .get('/search/?query=berlin')
      .then(response => (this.info = response))
  }
  
}
</script>

<style>
#home {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
