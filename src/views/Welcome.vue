<template>
  <div class = 'welcome'>
      <Header/>
      <main>
          <h1> Welcome Back</h1>
          <h2 class="text-primary text-center">{{this.$route.params.login}}</h2>
      </main>
  </div>
</template>

<script>
import Header from "../components/layout/Header.vue"
export default {
    name: "Welcome",
    components: {
        Header
    }
}
</script>

<style>

</style>
