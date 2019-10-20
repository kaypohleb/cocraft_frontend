

<template>
  <div class="projects">
      <Header/>
      <transition appear name="fade">

    <main>
      <section style="margin:auto;max-width:1100px;">

          <div style="margin:0 3rem;">

              <b-button class="is-outlined is-rounded" style="padding:0 0.8rem"> <i class="material-icons" style="vertical-align:bottom;margin-right:0.2rem">remove_red_eye</i>view only followed ones</b-button>
              <router-link  to="/projects/new"><b-button class="ccgradientbutton is-rounded" style="margin-left:0.7rem;padding:0 1.4rem">add a project</b-button></router-link>
              <br>
              <div style="overflow-x:auto;">
                  <table id="subtable" width="100%" style="min-width:768px;display:block;table-layout:fixed;">
    <!--                  TODO: handle overflow with ellipsis etc -->
                      <tr>
                          <th style="width:20%">name <i class="material-icons td-arrow has-text-primary">arrow_drop_down</i></th>
                          <th style="width:19%"></th>
                          <th style="width:9%">tributes <i class="material-icons td-arrow">arrow_drop_down</i></th>
                          <th style="width:12%">comments <i class="material-icons td-arrow">arrow_drop_down</i></th>
                          <th style="width:9%">updated <i class="material-icons td-arrow">arrow_drop_down</i></th>
                          <th style="width:14%">author</th>
                      </tr>
                      <tr>
                          <!--  TODO: fill in title with the same variable as the innerHTML (alt text for overflowed content)                     -->
                          <td title="I didn't have enough to buy a Lab Bench PSU.. So I made one myself."><b>OPEN Power</b><br> I didn't have enough to buy a Lab Bench PSU.. So I made one myself.</td>
                          <td><img src="http://streamlinecircuits.com/wp-content/uploads/2014/11/circuit-board.jpg" style="margin:0 0.1rem;border-radius:7%;vertical-align:bottom;height:100px;width:100%;object-fit:cover"></td>
                          <td>0</td>
                          <td>25</td>
                          <td>25/07/19</td>
                          <td><a>Miles Moore</a></td>
                      </tr>
                      <tr>
                          <td title="Project"><b>Easy Natured</b><br> We create and support green projects using the profits from our zero-waste store</td>
                          <td><img src="https://www.wired.com/wp-content/uploads/blogs/wiredenterprise/wp-content/uploads//2012/10/printed-circuit-board.jpg"
                                   style="margin:0 0.1rem;border-radius:7%;vertical-align:bottom;height:100px;width:100%;object-fit:cover"></td>
                          <td>25</td>
                          <td>2</td>
                          <td>25/07/19</td>
                          <td><a>Caleb Foo</a></td>
                      </tr>
                      <tr>
                          <td title="Project"><b>TRILL: Touch Sensing for Makers</b><br> Precise and easy-to-use touch sensors for crafting beautiful interactions.</td>
                          <td><img src="https://www.alizila.com/wp-content/uploads/2019/04/Ant-Forest-interface_04222019.png" style="margin:0 0.1rem;border-radius:7%;height:100px;width:100%;object-fit:cover"></td>
                          <td>3</td>
                          <td>0</td>
                          <td>27/07/19</td>
                          <td><a>Shizuka Joestar</a></td>
                      </tr>
                      <tr>
                          <td title="Project"><b>Bucket Social</b><br> Saving posts and locating them geographically around the world. Making things you see online and the things which are not online disappear suddenly</td>
                          <td><img src="https://venturebeat.com/wp-content/uploads/2017/12/rec-room-clubhouse.jpg?fit=400%2C220&strip=all" style="margin:0 0.1rem;border-radius:7%;vertical-align:bottom;height:100px;width:100%;object-fit:cover"></td>
                          <td>30</td>
                          <td>5</td>
                          <td>30/07/19</td>
                          <td><a>Kelvin Ng</a></td>
                      </tr>
                      <tr>
                          <td title="Project"><b>All in the Family: A Graphic </b><br>A psychological murder memoir about multiple personalities and the vagaries of memory</td>
                          <td><img src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1429187623l/25182683.jpg" style="margin:0 0.1rem;border-radius:7%;vertical-align:bottom;height:100px;width:100%;object-fit:cover"></td>
                          <td>121</td>
                          <td>10</td>
                          <td>15/07/19</td>
                          <td><a>Chester Koh</a></td>
                      </tr>
                  </table>
              </div>



          </div>
      </section>
    </main>
    </transition>
  </div>
</template>

<script>
import Header from '../../components/layout/Header.vue';
export default {

    name: 'JobView',
    components:{
        Header
    },
    data () {
        return {
            isComponentModalActive: false,
            formProps: {
                formSubName: '',
                formSubDescription: ''
            }
        }
    }
}



</script>

<style scoped lang="sass">

    table tr
        height: 5.4rem

    td
        max-width: 0
        overflow: hidden
        padding: 0 0.3rem
        font-size: 1.1rem
        line-height: 1.2rem

    #subtable td
        padding: 0.2rem 0 0.8rem
        border-bottom: 1px solid gray

    th
        padding: 0 0.3rem 0.4rem
        font-weight: 600

    tr
        padding: 0 0.3rem

    tr:hover
        background: #f9f9f9

    #subtable th:first-child + th + th, #subtable th:first-child + th + th + th, #subtable th:first-child + th + th + th + th, #subtable th:first-child + th + th + th + th + th, #subtable td:first-child + td + td, #subtable td:first-child + td + td + td, #subtable td:first-child + td + td + td + td
        text-align: center




    .p-arrow
        vertical-align: middle
        font-size: 2rem

    .td-arrow
        vertical-align: middle
        font-size: 1.8rem
        color: grey
        cursor: pointer

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
