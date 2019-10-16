<template>
  <div class="projects">
    <Header/>
    <main>
      <h1>This is a project listing page</h1>
      <observer/>
    </main>
  </div>
</template>

<script>
import Observer from "../components/Observer.vue"
import Header from '../components/layout/Header.vue';
export default {
  name: 'Projects',
  components:{
    Observer,
    Header
  }
}
</script>
