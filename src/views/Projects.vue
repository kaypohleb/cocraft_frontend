
<template>
  <div class="projects">
      <transition appear name="fade">

        <main>
            <transition name="fade" mode="out-in">
              <component :is="currentPageComponent"></component>
            </transition>
            <br><br><br>
            <section style="margin:auto;max-width:1000px;border-top: 1px solid grey">
              <br>
              <div style="margin:0 3rem;">
                change views:
                <b-button @click="currentPageComponent='NewProject'" class="is-primary is-rounded is-size-6">New Project</b-button>
                <b-button @click="currentPageComponent='JobView'" class="is-primary is-rounded is-size-6">View Job</b-button>
                <b-button @click="currentPageComponent='ProjectView'" class="is-primary is-rounded is-size-6">View Project</b-button>
                <b-button @click="currentPageComponent='ProjectList'" class="is-primary is-rounded is-size-6">Find Projects</b-button>
              </div>
            </section>
            
          </main>
      </transition>
  </div>
</template>

<style scoped>

</style>

<script>
import Header from '../components/layout/Header.vue';

import NewProject from './viewcomponents/NewProject.vue';
import JobView from './viewcomponents/JobView.vue';
import ProjectView from './viewcomponents/ProjectView.vue'
import ProjectList from './viewcomponents/ProjectList.vue'

export default {
  name: 'Projects',
  data () {
    return {
      currentPageComponent: null
    }
  },
  components:{
    Header,
    NewProject,
    JobView,
    ProjectView,
    ProjectList
  }
}
</script>


