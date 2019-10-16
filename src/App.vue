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
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

html {
  overflow: scroll;
  overflow-x: hidden;
}

::-webkit-scrollbar {
  width: 0px;
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: #FF0000;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
