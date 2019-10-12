<template>
  <main>
    <section class="herobg">
        <div class="shade">
            <HeaderHome/>
            <div class="hero is-fullheight">
                <div class="hero-body">
                    <div class="container has-text-centered" style="max-width:55%">
                        <transition appear>
                        <div class="columns" style="margin-bottom:10rem">
                            <div class="column is-one-third" style="border-right:3px solid gray;border-radius: 2px">
                                <p class="is-size-1 is-family-title has-text-white" style="text-align:left;line-height:3.4rem;font-size:1rem">
                                    cultivate <span class="has-text-primary">projects</span> through <br> <span class="has-text-info">peer</span> <br> support
                                </p>
                            </div>
                            <div class="column is-two-thirds" style="padding:0 2.5rem">
                                <div v-if="signed" class="is-size-3 is-family-title has-text-white" style="text-align:left;line-height:3.4rem">
                                    <p style="text-align:center">sign up</p>
                                    <input v-model="name" placeholder="name"
                                           autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"
                                           style=""></input><br>
                                    <input v-model="email" placeholder="email address"
                                           autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"></input><br>
                                    <input type="password" v-model="password" placeholder="password" id="inputlast"
                                           autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" style="width:90%"></input>
                                    <input type="button" style="width:10%;cursor:pointer;font-size:2rem;vertical-align:bottom;" class="material-icons" value="remove_red_eye"></input>
                                    <br>
                                    <b-button class="ccgradientbutton is-rounded is-family-title is-size-5" style="margin:1rem 0;padding:0 2.6rem;border:none;position:relative;float:right;">join the cult</b-button>
                                </div>
                                <div v-else>
                                    <p class="is-size-3 is-family-header has-text-white" style="text-align:left;line-height:3.4rem;font-size:1rem">
                                    This site is a platform for people with different skillsets to work together.</p>
                                    <b-button class="is-white is-outlined is-rounded is-family-styled is-size-4" style="height:3.4rem;margin:0.4rem 0;width:100%;border-width:0.2rem;">view our community guidelines</b-button>
                                    <b-button @click="signed=true" class="ccgradientbutton is-rounded is-family-title is-size-4" style="height:3.4rem;margin:0.4rem 0;width:100%;border:none">sign your soul here</b-button>
                                </div>

                            </div>
                        </div>
                        </transition>
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


    .shade
        background: rgba(10, 0, 0, 0.7)
        overflow: hidden
        height: 100%
        z-index: 2


    $grey-dark: #8a8a8a

    input
        background: transparent
        border: none
        outline: none
        width: 100%
        color: white
        font-size: 2rem
        padding-bottom: 0.5rem
        border-bottom: 2px solid white

    ::-webkit-input-placeholder
        color: $grey-dark

        :-moz-placeholder
            color: $grey-dark

    ::-moz-placeholder
        color: $grey-dark

        :-ms-input-placeholder
            color: $grey-dark


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
  data: function() {
      return {
          signed: false
      }
  },
  props: {
    msg: String
  },
    components: {
        HeaderHome
    }
}
</script>

