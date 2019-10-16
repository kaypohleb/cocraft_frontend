<template>
  <div class = 'welcome'>
      <Header/>
      <main>

          <section style="margin:auto;max-width:800px;">
              <div style="margin:0 3rem">
                  <br>
                  <p  class="is-family-title is-size-2 has-text-grey-dark" style="text-align:left;">
                      Welcome back, <span class="has-text-primary"> {{this.$route.params.login}} </span>
                  </p>
                  <p class="is-size-4 is-family-title has-text-black-bis p-underline">here are today's offerings:</p>

                  <div class="is-family-header has-text-black-ter" style="font-size: 1.4rem">
                      <p class="p-list"> Project Test 1 <i class="material-icons p-arrow">arrow_right</i>
                          <span class="p-order-2"> Submission Test  </span> <i class="material-icons p-arrow">arrow_right</i>
                      <span class="has-text-primary p-order-3">earned 15 tributes</span></p>
                      <p class="p-list"> Project Test 3 <i class="material-icons p-arrow">arrow_right</i>
                          <span class=" p-order-2"> <i class="material-icons p-arrow">remove_red_eye</i>  </span> <i class="material-icons p-arrow">arrow_right</i>
                          <span class="has-text-primary p-order-3">new update to project description</span></p>
                      <p class="p-list"> Project Test 5 <i class="material-icons p-arrow">arrow_right</i>
                          <span class="p-order-2"> <i class="material-icons p-arrow">remove_red_eye</i>  </span> <i class="material-icons p-arrow">arrow_right</i>
                          <span class="p-order-3"> i think that ... </span> <i class="material-icons p-arrow">arrow_right</i>
                          <span class="has-text-primary p-order-3">5 replies</span> </p>
                  </div>

                  <br><br>
                  <p class="is-size-4 is-family-title has-text-black-bis p-underline">suggesting following/jobs:</p>

                  <div class="is-family-header has-text-black-ter" style="font-size: 1.4rem">
                      <p class="p-list"> Bobble-bot <i class="material-icons p-arrow">arrow_right</i>
                          <span class="has-text-primary p-order-4">Demonstration robot for learning principles of real-time control using Raspberry Pi, RT Linux, and ROS</span></p>
                      <p class="p-list"> Project Test 1 <i class="material-icons p-arrow">arrow_right</i>
                          <span class="p-order-2"> Job Test 1 </span> </p>
                      <p class="p-list"> Project Test 5 <i class="material-icons p-arrow">arrow_right</i>
                          <span class="has-text-primary p-order-2"> project desc... </span> </p>
                      <p class="p-list"> Project Test 6 <i class="material-icons p-arrow">arrow_right</i>
                          <span class="has-text-primary p-order-2"> project desc... </span> </p>
                  </div>
              </div>
          </section>
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

<style scoped>
    .p-underline {
        padding-bottom: 0.2rem;
        border-bottom: 2px solid grey;
    }

    .p-arrow {
        vertical-align:middle;
        font-size: 2rem;
    }

    .p-list {
        padding: 0.8rem 0 0 0;
    }

    .p-order-2 {
        color: hsl(0, 0%, 29%);
        font-size: 1.2rem;
    }

    .p-order-3 {
        color: hsl(0, 0%, 29%);
        font-size: 1rem;
    }

    .p-order-4 {
        color: hsl(0, 0%, 29%);
        font-size: 0.8rem;
    }
</style>
