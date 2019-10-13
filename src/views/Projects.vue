<template>

  <div class="projects">
    <Header/>
    <h1>This is a project listing page</h1>
    <observer/>
  </div>
</template>

<script>
import Observer from "../components/Observer.vue"
import Header from '../components/layout/Header.vue';
export default {
  name: 'Projects',
  components:{
    Observer
  }
}
</script>