<template v-if="cities">
  <div id="search">
    <div  v-for="city in cities">
       <app-weather :city="city.title" :woeid="city.woeid" ></app-weather>
    </div>
    <div v-if="cities">
     Success
    </div>
    <div v-else>
      No results were found. Try changing the keyword!”
    </div>
  </div>

</template>


<script>

import Weather from './Weather.vue';

export default {
  name: 'search',
  props: ['keyword'],
  components: {
    'app-weather':Weather,
  },
 
  data () {
    return {
      msg : "search",
      info : null,
      cities : null
     
    }
  },
  mounted () {
    let woeid = "";
    this.$api
      .get('/search?query='+this.$route.params.keyword)
      .then(
          response => {
          // handle success
          console.log(response.data)         
          if (response.data.length > 0){
            this.cities = response.data;
          }
          console.log(response.data);
        }
      );
  },
   watch: {
    '$route' (to, from) {
      // react to route changes...
    }
  },
}


</script>

<style>
/*#weather {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
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
}*/
</style>
