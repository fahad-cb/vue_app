<template>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="/">Weather App</b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <router-link to="/" class="nav-link">Home</router-link>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" id="search-text" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0 search" type="submit">Search</b-button>
        </b-nav-form>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: 'navbar',
  data () {
    return {
      msg: ''
    }
  },
  methods: {
    initSearch(){
      //console.log(this.$route);
      var searchButton = this.$el.querySelector(".search");
      if ( searchButton  !== null){
        searchButton.addEventListener('click', (e) => {
          e.preventDefault();
          var searchVal = this.$el.querySelector("#search-text").value;
          this.$router.push({ name: 'search', params: { keyword: searchVal } })
          if (this.$route.name == 'search'){
            this.$router.go(0)
          }

        });
      }
    }
  },
  mounted: function() {
      this.initSearch();
  }
}
</script>

<style>

</style>
