<template>
  <div class="projects">
      <Header/>
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
                <h1>This is a project listing page</h1> <br><br>
              </div>
            </section>
            <observer/>
            <!-- If the observer is supposed to be only on the project listing page (not create new project) then this should go into ProjectListing.vue or something     -->
          </main>
      </transition>
  </div>
</template>

<style scoped>

</style>

<script>
import Observer from "../components/Observer.vue"
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
    Observer,
    Header,
    NewProject,
    JobView,
    ProjectView,
    ProjectList
  }
}
</script>


