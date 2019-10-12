<template>
  <main>
    <section class="herobg">
        <div class="shade">
            <HeaderHome/>
            <div class="hero is-fullheight">
                <div class="hero-body">
                    <div class="container has-text-centered" style="max-width:55%">
                        <div class="columns" style="margin-bottom:10rem">
                            <div class="column is-two-fifths">
                                <p class="is-size-1 is-family-title has-text-white" style="text-align:left;line-height:3.4rem;font-size:1rem">
                                    cultivate <span class="has-text-primary">projects</span> through <br> <span class="has-text-info">peer</span> <br> support
                                </p>
                            </div>
                            <div class="column is-three-fifths">
                                <p class="is-size-1 is-family-title has-text-white">lorem ipsum dolor sit amet</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section>
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

    </section>
  </main>
</template>

<style scoped lang="sass">
    .herobg
        background-image: url('https://www.thebalancesmb.com/thmb/G1T99HhK7Wlbv85WC5zuVJIcgs4=/2121x1414/filters:fill(auto,1)/owner-standing-by-young-customers-at-table-in-restaurant-953943092-5c68fcf3c9e77c00012e0f0a.jpg')
        background-repeat: no-repeat
        background-size: cover

    $gap: 50px

    .shade
        background: rgba(10, 0, 0, 0.5)
        overflow: hidden
        height: 100%
        z-index: 2



    /*::selection {*/
    /*    background-color: #999999;*/
    /*    color: white*/
    /*}*/
</style>

<script>
// @ is an alias to /src
import HelloWorld from '../components/HelloWorld.vue'
import HeaderHome from '../components/layout/HeaderHome.vue'

export default {
  name: 'home',
  props: {
    msg: String
  },
    components: {
        HeaderHome
    }
}
</script>

