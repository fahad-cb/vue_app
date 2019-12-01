<template>
  <div id="weather" style="width: 20rem;;display:inline-block;">
    <loading :active.sync="isLoading" 
        :can-cancel="true" 
        :on-cancel="onCancel"
        :is-full-page="fullPage"></loading>
    <div class="card" style="width: 18rem;">
      <img class="card-img-top" :src="weather_state_abbr" alt="Card image cap" height="50" width="50">
      <div class="card-body">
        <h5 class="card-title">{{ city }}</h5>
        <p class="card-text"><strong>Weather</strong> : {{ weather_state_name }}</p>
        <p class="card-text"><strong>Temprature</strong> : {{ the_temp }}</p>
        <p class="card-text"><strong>Max Temprature</strong> : {{ max_temp }}</p>
        <p class="card-text"><strong>Min Temprature</strong> : {{ min_temp }}</p>
        <p v-if="$route.name == 'weather'" class="card-text"><strong>Wind Speed</strong> : {{ wind_speed }}</p>
        <p v-if="$route.name == 'weather'" class="card-text"><strong>Humidity</strong> : {{ humidity }}</p>
        <router-link v-if="$route.name == 'home' || $route.name == 'search' " :to="'/weather/'+woeid" class="btn btn-success">Details</router-link>
      </div>
    </div>
  </div>
</template>

<script>

import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';


export default {
  name: 'weather',
  props: ['city','woeid'],
  methods : {
   onCancel() {
            console.log('User cancelled the loader.')
          }
  },
  components : {
    Loading
  },
  data () {
    return {
      page: this.$route.name,
      info: null,
      title: "loading..",
      weather_state_abbr: "./assets/loading.svg",
      the_temp: "loading..",
      max_temp: "loading..",
      min_temp: "loading..",
      weather_state_name:"loading..",
      wind_speed:"loading..",
      humidity:"loading..",
      isLoading: true,
      fullPage: false
    }
  },
  mounted () { 
    let woeid = "";
    if (this.$route.name == 'weather'){
      woeid = this.$route.params.id;
    }else{
      woeid = this.$props.woeid;
    }
    this.$api
      .get('/'+woeid)
      .then(response => {
        
        this.title = response.data.consolidated_weather[0].title;
        this.weather_state_abbr= "https://www.metaweather.com/static/img/weather/"+response.data.consolidated_weather[0].weather_state_abbr+".svg";
        this.the_temp= Math.round(response.data.consolidated_weather[0].the_temp);
        this.max_temp= Math.round(response.data.consolidated_weather[0].max_temp);
        this.min_temp= Math.round(response.data.consolidated_weather[0].min_temp);
        this.weather_state_name= response.data.consolidated_weather[0].weather_state_name;
        this.wind_speed= response.data.consolidated_weather[0].wind_speed;
        this.humidity= response.data.consolidated_weather[0].humidity;
         this.isLoading = false

      }
    )
  }
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
