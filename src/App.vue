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
  overflow: auto;
  overflow-x: hidden;
}

::-webkit-scrollbar {
   width: 13px;
 }

::-webkit-scrollbar-track {
  background: #F36E63;
}


::-webkit-scrollbar-thumb {
 background: #F9B246;
 border-radius: 10px;
}


::-webkit-scrollbar-thumb:hover {
  background: #e6a342;
  cursor: pointer;
}

::-webkit-scrollbar-corner {
  background: transparent;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
