<template>
  <div>
      <section style="margin:auto;max-width:1100px;">
          <div style="margin:0 3rem;">

              <div class="columns">
                  <div class="column is-half">
                      <span class="p-head is-family-title has-text-black-bis" width="100%">
                          OPEN Power
                      </span><br>
                      <span class="is-family-header has-text-info" style="padding-right:0.5rem">0 tributes</span>
                      <span class="is-family-header has-text-primary">0 followers</span>
                  </div>
                  <div class="column is-half" style="display:flex">
                      <p class="has-text-grey-dark" style="font-size:1.2rem;text-align:right;width:100%;align-self:center">authored by Caleb Foo</p>
                  </div>
              </div>
                <!--  SHORT DESCRIPTION            -->
              <span class="is-family-header has-text-black-bis p-order-2">I didn't have enough to buy a lab bench PSU... So I made one.</span>

              <!--    TODO: have dedicated space for media, and dedicated space and markdown/wysiwyg formatting for description (currently it's way too simple!)          -->

              <div class="columns">
                  <div class="column is-two-fifths">


                      <agile>

                          <!--  TODO: are videos available to be added?; update b-modal component for the picture to link up with current slide                      -->

                          <img @click="isCardModalActive = true" class="slide" alt="hovercraft" src="https://5.imimg.com/data5/YR/GM/MY-53933770/semiconductor-chip-500x500.jpg"
                                 />

                          <img @click="isCardModalActive = true" class="slide" alt="powersupply" src="https://media.cablesandkits.com/p/C2500072a.jpg"
                                 />

                          <template slot="prevButton">
                            <i class="material-icons">keyboard_arrow_left</i>
                          </template>

                          <template slot="nextButton">
                            <i class="material-icons">keyboard_arrow_right</i>
                          </template>
                      </agile>

                  </div>
                  <div class="column is-three-fifths;">
                      <p class="p-head is-family-header has-text-grey" width="100%" style="font-size:1rem">
                          OPEN Power is about providing Makers, Students, and Hobbyists with a Portable, Versatile Intuitive and Cheap power supply for all their projects.
                          <br><br>
                          Prototype 1:Simple and Cheap Constant Voltage/ Constant Current Power Supply with led voltage indication.<br>
                          USB Load sharing powered and Lipo backup.<br>
                          Prototype 2: A Constant Voltage Constant Current Power Supply 0.6V to 12V<br>
                          Prototype 3: Both +- Rail Voltage Current and Power will Be displayed on a LED Display.
                      </p>
                  </div>
              </div>

              <div style="position:relative;float:right;">
                  <i class="material-icons" style="font-size:2rem">remove_red_eye</i>
                  <b-button class="is-info is-family-header is-rounded has-text-white" style="margin-left:1rem;padding:0 1rem">TRIBUTE</b-button>
              </div>

              <br><br>

              <span class="is-family-header p-order-2">JOBS</span>
              <br><br>
              <b-button v-if="isJobsEmpty" class="is-outlined is-rounded" style="border:2px solid gray;padding:0 3.5rem">add a job</b-button>
              <div style="overflow-x:auto;">
                  <table class="has-text-black-ter" id="subtable" width="100%" style="min-width:768px;table-layout:fixed;">
                      <tr>
                          <td style="width:auto;border:none"></td>
                          <td style="width:auto;border:none"></td>
                          <td style="width:15%;height:0px;border:none"></td>
                          <td style="width:13%;height:0px;border:none"></td>
                      </tr>
                      <tr>
                          <td><span class="is-family-header" style="margin-right:0.3rem">Electric Diagram for wireless connectivitysssssssssssssssssss</span></td>
                          <td>assssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss</td>
                          <td><a>File links</a></td>
                          <td><b-button class="is-primary is-family-header is-rounded has-text-white is-size-6" style="padding:0 1rem">SUBMIT</b-button></td>

                      </tr>
                      <tr>
                          <td title="copy job test 5"><span class="is-family-header" style="margin-right:0.3rem">Job Test 5</span></td>
                          <td title="Lorem ipsum dolor sit amet">Lorem ipsum dolor sit amet </td>
                          <td><a>File links</a></td>
                          <td><b-button class="is-primary is-family-header is-rounded has-text-white is-size-6" style="padding:0 1rem">SUBMIT</b-button></td>

                      </tr>
                  </table>
              </div>
              <br><br><br><br>
              <span class="is-family-title has-text-black is-size-5">comments</span>
              <br><br>
              <p class="has-text-primary">
                  <a class="is-family-title">Kelvin Ng</a>
                  <br> I love your project!
              </p><br>
              <p class="has-text-primary" style="margin-left:2rem">
                  <a class="is-family-title">Caleb Foo</a>
                  <br> I love you too!
              </p>



          </div>

          <b-modal :active.sync="isCardModalActive">
              <div class="card">
                  <div class="card-image">
                      <figure class="image is-16by9">
                          <img  src="https://5.imimg.com/data5/YR/GM/MY-53933770/semiconductor-chip-500x500.jpg" alt="Image" style="object-fit:cover">
                      </figure>
                  </div>
                  <div class="card-content">
                      <p class="is-family-title is-size-2">CHIRP CHIRP</p>

                      <div class="content">
                          A new chip i just made :)<br>
                          A new chip i just made :)<br>
                          A new chip i just made :)A new chip i just made :)A new chip i just made :)A new chip i just made :)A new chip i just made :)A new chip i just made :)A new chip i just made :)A new chip i just made :)A new chip i just made :)A new chip i just made :)A new chip i just made :)A new chip i just made :)

                      </div>
                  </div>
              </div>
          </b-modal>

      </section>

  </div>
</template>

<script>
import VueAgile from 'vue-agile/src/Agile.vue'

export default {
    name: 'ProjectView',
    data() {
        return {
            isCardModalActive: false,
            isJobsEmpty: true, //TODO: calculate this from fetch
        }
    },
    components: {
        agile: VueAgile
    }
}



</script>

<style scoped lang="sass">

    img
        object-fit: cover
        border-radius: 6%

    .slide
        align-items: center
        color: #fff
        display: flex
        height: 300px
        justify-content: center

    table tr
        height: 1em
    td
        max-width: 0
        overflow: hidden
        text-overflow: ellipsis
        white-space: nowrap
        padding: 0 0.3rem
        font-size: 1.1rem
        vertical-align: middle

    #subtable td
        padding: 0.5rem 0.3rem 0.5rem 0
        border-bottom: 1px solid gray

    tr
        padding: 0 0.3rem

    tr:hover
        background: #f9f9f9

    #subtable td:first-child + td + td
        text-align: center


    .p-arrow
        vertical-align: middle
        font-size: 2rem

    .td-arrow
        vertical-align: middle
        font-size: 1.8rem
        color: grey

    .p-head
        font-size: 1.6rem


    .p-order-2
        color: hsl(0, 0%, 29%)
        font-size: 1.2rem


    .p-order-3
        color: hsl(0, 0%, 29%)
        font-size: 1rem


    .p-order-4
        color: hsl(0, 0%, 29%)
        font-size: 0.8rem

    .pic-box
        width: 200px
        height: 90px
        margin: 0 1.5rem
        border-radius: 10px
        border: 1px solid gray

    $grey-dark: #8a8a8a

    input
        background: transparent
        border: none
        outline: none
        width: 100%
        overflow-wrap: normal
        font-size: 1.6rem
        padding-bottom: 0.5rem
        border-bottom: 1px solid grey

    textarea
        background: transparent
        resize: none
        overflow: auto
        word-break: break-word
        border: none
        outline: none
        width: 100%
        overflow-wrap: normal
        word-wrap: normal
        font-size: 1.6rem
        padding-bottom: 0.5rem
        border-bottom: 1px solid grey

    ::-webkit-input-placeholder
        color: $grey-dark

        :-moz-placeholder
            color: $grey-dark

    ::-moz-placeholder
        color: $grey-dark

        :-ms-input-placeholder
            color: $grey-dark

    /* width */
    ::-webkit-scrollbar
        width: 13px

    /* Track */
    ::-webkit-scrollbar-track
        background: #F36E63


    /* Handle */
    ::-webkit-scrollbar-thumb
        background: #F9B246
        border-radius: 10px


    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover
        background: #e6a342
        cursor: pointer

    ::-webkit-scrollbar-corner
        background: transparent


</style>
