<template>
  <div class="jobs">
    <Header/>
    <main>
      <component :is="currentPageComponent"></component>
      <br><br><br>
      <h1>This is a job listing page</h1>
    </main>
  </div>
</template>

<script>
import Header from '../components/layout/Header.vue';
import NewJob from './viewcomponents/NewJob.vue';

export default {
  data () {
    return {
      currentPageComponent: NewJob  //for now default newjob view.
    }
  },
  components: {
    Header,
    NewJob
  }
}
</script>
