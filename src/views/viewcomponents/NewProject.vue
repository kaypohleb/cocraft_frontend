<template>
  <div>
      <section style="margin:auto;max-width:1000px;">
          <div style="margin:0 3rem;">

              <p  class="is-family-title is-size-2 has-text-grey-dark" style="text-align:left;">
                  Initiate a new <span class="has-text-primary"> project </span>
              </p>
              <br>

              <p class="p-head is-family-header has-text-black-bis" width="100%">
                  <input v-model="title" placeholder="project name"
                         autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"
                         style="">
              </p>

              <br>

              <p class="p-head is-family-header has-text-black-bis" width="100%">
                  <input v-model="shortDescription" placeholder="project short description"
                         autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"
                         style="">
              </p>

              <br>

              <p class="p-head is-family-header has-text-black-bis" width="100%">
                  <textarea v-model="description" type="textarea" placeholder="project description"
                         autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"
                            rows="10"
                            style="font-size: 1.1rem"></textarea>
              </p>

              <div class="is-flex-tablet" style="justify-content:flex-start"> <!-- mobile not implemented yet -->
                  <b-button class="is-outlined is-rounded is-size-6" style="padding: 0 1rem; border-width:1px; border-color:gray"> <span class="is-family-header">
                      add pictures </span>
                  </b-button>
                  <span class="pic-box"></span>
                  <span class="pic-box"></span>
                  <span class="pic-box"></span>

              </div>

              <br>
              <b-button class="ccgradientbutton is-rounded is-family-title is-size-5" style="position:relative;float:right;padding:0 3rem;border:none">POST</b-button>

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
    .p-arrow
        vertical-align: middle
        font-size: 2rem


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
