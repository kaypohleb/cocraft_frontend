<template>
  <div>
      <section style="margin:auto;max-width:1100px;">
          <div style="margin:0 3rem;">

              <p  class="is-family-title is-size-3 has-text-grey-dark" style="text-align:left;">
                  View Job
              </p>
              <br>

              <span class="p-head is-family-title has-text-black-bis" width="100%">
                  Bubble-Bot <i class="material-icons p-arrow">arrow_right</i>
              </span>
              <span class="is-family-header p-order-2">Electric Diagram for Wireless Connectivity</span>

              <br><br>

              <div class="columns">
                  <div class="column is-three-fifths">
                      <div style="display:flex;">
                          <p class="p-head is-family-header has-text-grey" width="100%" style="font-size:1rem">
                              My end goal for bubble-bot is to eventually make it wireless. Since I am still learning, it would be great if someone could do this for me.
                              <br><br>Requirements:
                              <br>Must be able to support both wired and wireless charging.
                              <br><br><br><br><br>
                          </p>

                          <b-button class="is-primary is-rounded" style="padding:0 1rem;align-self:flex-end;">SUBMIT</b-button>
                      </div>
                  </div>
                  <div class="column is-two-fifths;">
                      <div class="p-head is-family-title has-text-black-bis">
                        Reference Files
                      </div>
                      <div class="p-head is-family-styled has-text-grey" style="font-size:1rem;border: 1px solid gray;border-radius:8px;width:100%;padding:0.5rem 1rem;min-height:200px">
                          <table width="100%">
                              <!--  generate this as a table by vue v-for directive    -->
                              <tr>
                                  <td>flowchart.png</td>
                                  <td><a>link</a></td>
                              </tr>
                              <tr>
                                  <td>activitydiagram.png</td>
                                  <td><a>link</a></td>
                              </tr>
                              <tr>
                                  <td>sketchattempt1.png</td>
                                  <td><a>link</a></td>
                              </tr>
                          </table>
                      </div>

                  </div>




              </div>

              <span class="is-family-header p-order-2">SUBMISSIONS</span>
              <br><br>
              <div style="overflow-x:auto;">
                  <table id="subtable" width="100%" style="min-width:768px;display:block;table-layout:fixed;">
    <!--                  TODO: handle overflow with ellipsis etc -->
                      <tr>
                          <th style="width:20%">name <i class="material-icons td-arrow has-text-primary">arrow_drop_down</i></th>
                          <th style="width:15%">author</th>
                          <th>job <i class="material-icons td-arrow">arrow_drop_down</i></th>
                          <th style="width:12.5%">tributes <i class="material-icons td-arrow">arrow_drop_down</i></th>
                          <th style="width:12.5%">comments <i class="material-icons td-arrow">arrow_drop_down</i></th>
                          <th style="width:12.5%">files</th>
                      </tr>
                      <tr>
                          <!--  TODO: fill in title with the same variable as the innerHTML (alt text for overflowed content)                     -->
                          <td title="Electronic Diagram asdfasdf asasdf asdf aa">Electronic Diagram asdfasdf asasdf asdf aa</td>
                          <td>Chester Koh</td>
                          <td>Job Test 1</td>
                          <td>25</td>
                          <td>2</td>
                          <td><a>File links</a></td>
                      </tr>
                      <tr>
                          <td title="Electronic Diagram 2">Electronic Diagram 2</td>
                          <td>Deng Xiaoping</td>
                          <td>Job Test 2</td>
                          <td>500</td>
                          <td>43</td>
                          <td><a>File links</a></td>
                      </tr>
                  </table>
              </div>
              <br><br><br><br>









<!--              <br><br><br><br><br><br>-->
<!--              <div class="is-flex-tablet" style="justify-content:flex-start"> &lt;!&ndash; mobile not implemented yet &ndash;&gt;-->
<!--                  <b-button class="is-outlined is-rounded is-size-6" style="padding: 0 1rem; border-width:1px; border-color:gray"> <span class="is-family-header">-->
<!--                      add pictures </span>-->
<!--                  </b-button>-->
<!--                  <span class="pic-box"></span>-->
<!--                  <span class="pic-box"></span>-->
<!--                  <span class="pic-box"></span>-->

<!--              </div>-->

<!--              <br>-->
<!--              <b-button class="ccgradientbutton is-rounded is-family-title is-size-5" style="position:relative;float:right;padding:0 3rem;border:none">POST</b-button>-->

          </div>
      </section>

  </div>
</template>

<script>

export default {
    name: 'NewProject',
    components: {}
}



</script>

<style scoped lang="sass">

    table tr
        height: 1em
    td
        max-width: 0
        overflow: hidden
        text-overflow: ellipsis
        white-space: nowrap
        padding: 0 0.3rem
        font-size: 0.9rem

    #subtable td
        padding: 0.2rem 0 0.8rem
        border-bottom: 1px solid gray

    th
        padding: 0 0.3rem 0.4rem
        font-weight: normal

    tr
        padding: 0 0.3rem

    tr:hover
        background: #f9f9f9

    #subtable td:first-child
        font-weight: 700

    #subtable td:first-child + td
        font-weight: 600

    #subtable th:first-child + th + th + th, #subtable th:first-child + th + th + th + th,#subtable td:first-child + td + td + td, #subtable td:first-child + td + td + td + td
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
