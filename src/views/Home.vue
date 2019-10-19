<template>
  <main>

    <section class="herobg">
        <div class="shade">
            <HeaderHome/>
            <div class="hero is-fullheight">
                <div class="hero-body">
                    <div class="container has-text-centered" style="max-width:768px;margin:auto">
                        <transition appear>
                        <div class="columns" style="margin-bottom:10rem">
                            <div class="column is-one-third" style="border-radius: 2px">
                                <p id="cultivate" class="is-size-1 is-family-title has-text-white" style="line-height:3.4rem;font-size:1rem">
                                    cultivate <span class="has-text-primary"><br>projects</span><br> through <br> <span class="has-text-info">peer</span> <br> support
                                </p>
                            </div>
                            <div class="column is-two-thirds" style="padding:0 2.5rem">
                                <transition name="fade" mode="out-in">
                                <div v-if="signed" class="is-size-3 is-family-title has-text-white" style="text-align:left;line-height:3.4rem">
                                    <p style="text-align:center">sign up</p>
                                    <input v-model="name" placeholder="name"
                                           autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"
                                           style=""><br>
                                    <input v-model="email" placeholder="email address"
                                           autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"><br>
                                    <input :type="passwordFieldType" v-model="password" placeholder="password" id="inputlast"
                                           autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" style="width:90%">
                                    <input type="button" @click="passwordShow=!passwordShow" style="width:10%;cursor:pointer;font-size:2rem;vertical-align:bottom;" class="material-icons" value="remove_red_eye">
                                    <br>
                                    <b-button @click="signup()" class="ccgradientbutton is-rounded is-family-title is-size-5" style="margin:1rem 0;padding:0 2.6rem;border:none;position:relative;float:right;">join the cult</b-button>
                                </div>
                                </transition>
                                <div v-if="!signed">
                                    <p class="is-size-3 is-family-header has-text-white" style="text-align:left;line-height:3.4rem;font-size:1rem;">
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
        <br><br><br>
        <p class="is-size-3">Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
        <div class="hero is-fullheight">
            <div class="hero-body">
                <div class="container">
                    <p class="is-size-3">A life unexamined is a life not worth living.</p>
                </div>
            </div>
        </div>
        <p class="is-size-6">©CoCraft</p>


    </section>
  </main>
</template>

<style scoped lang="sass">

    @media only screen and (min-width: 769px)
        #cultivate
            text-align: left
            border-right: 3px solid gray

    @media only screen and (max-width: 768px)
        #cultivate
            padding: 10vh 10vw
            border-bottom: 3px solid gray


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
import { sign } from 'crypto'

export default {
  name: 'home',
  data(){
      return{
          name:'',
          email:'',
          password:'',
          signed: false,
          passwordShow: false
      }

  },
    computed: {
        passwordFieldType: function () {
            if (this.passwordShow) return 'text';
            else return 'password';
        }
    },

  methods:{
      join(name){

          this.$router.push({name:'welcome',params:{login:name}})
      },
      signup(){
          alert("This method is not implemented yet")
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

