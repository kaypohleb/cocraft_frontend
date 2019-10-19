<template>
  <div id="app">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet" />
        <router-view/>
  </div>
</template>

<script>
  // import Header from './components/layout/Header.vue';


export default {
  name: 'app'
}
</script>

<style>
@import 'components/css/agileDots.css';
@import 'components/css/scrollbar.css';

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.component-fade-enter-active, .component-fade-leave-active {
    transition: opacity .3s ease;
}

#nav {
  padding: 30px;
}

html {
  overflow: auto;
  overflow-x: hidden;
}



#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}


</style>
