<template>
  <div class = 'welcome'>
      <h1> Welcome Back</h1>
      <h2 class="text-primary text-center">{{this.$route.params.login}}</h2>
  </div>
</template>

<script>
import Header from "../components/layout/Header.vue"
export default {
    name: "Welcome"
}
</script>

<style>

</style>