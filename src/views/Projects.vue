<template>
  <div class="projects">
    <Header/>
    <main>
      <component :is="currentPageComponent"></component>
      <br><br><br>
      <h1>This is a project listing page</h1>
      <observer/>
      <!-- If the observer is supposed to be only on the project listing page (not create new project) then this should go into ProjectListing.vue or something     -->
    </main>
  </div>
</template>

<script>
import Observer from "../components/Observer.vue"
import Header from '../components/layout/Header.vue';

import NewProject from './viewcomponents/NewProject.vue';

export default {
  name: 'Projects',
  data () {
    return {
      currentPageComponent: NewProject
    }
  },
  components:{
    Observer,
    Header,
    NewProject
  }
}
</script>


