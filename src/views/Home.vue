<template>
  <main>
    <div class="hello">
      <h1 class="is-family-title">HelloWorld!</h1>
      <b-button class="is-rounded is-family-title">signup</b-button>
      <b-button class="is-primary is-rounded is-family-title">signup</b-button>
      <b-button class="is-info is-rounded is-family-title">signup</b-button>
      <b-button class="is-primary is-outlined is-rounded is-family-styled">signup</b-button>
      <b-button class="is-info is-outlined is-rounded is-family-styled">signup</b-button>
      <br><br>
      <b-button class="is-success is-rounded is-family-styled">success</b-button>
      <b-button class="is-warning is-rounded is-family-styled">warning</b-button>
      <b-button class="is-danger is-rounded is-family-styled">danger</b-button>
      <b-button class="is-danger is-outlined is-size-3 is-rounded is-family-title">don-t click this</b-button>
      <br><br>
      Mighty Gradients
      <br>
      <b-button class="ccgradientbutton is-rounded is-family-title">signup</b-button>
      <br>
      <b-button class="ccgradientbutton is-rounded is-family-title" style="padding: 0 2.5rem">join the cult</b-button>

    </div>
  </main>
</template>


<script>
// @ is an alias to /src
import HelloWorld from '../components/HelloWorld.vue'

export default {
  name: 'home',
  props: {
    msg: String
  }
}
</script>

