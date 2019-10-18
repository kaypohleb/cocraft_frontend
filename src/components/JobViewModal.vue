<template>
    <form action="">
        <div class="modal-card" style="width:auto;min-width:55vw;border-radius:1rem">
            <section class="modal-card-body">
                <p class="p-head is-family-header has-text-black-bis" width="100%">
                    <input v-model="subName" placeholder="Submission Name"
                           autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"
                           style="">
                </p>
                        <!--    TODO: at beforeCreated lifecycle hook, fetch any saved data from the submission inputs, maybe including files. every so often, a web worker saves the draft into web storage, so accidental closing would not risk losign data.   -->
                <br>

                <p class="p-head is-family-header has-text-black-bis" width="100%">
                  <textarea v-model="subDescription" type="textarea" placeholder="Please include the following:
- Instructions on how to integrate
- Anything you want to add"
                            autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"
                            rows="10"
                            style="font-size: 1.1rem"></textarea>
                </p>
                <div class="is-flex" style="justify-content:space-between;height:13vw">
                  <span>
                      <span class="is-size-4 is-family-styled"><b>Files</b></span>
                      <br>
                      <b-button class="is-outlined is-rounded is-size-6" style="margin-top:0.5rem;padding: 0 2.5rem; border-width:1px; border-color:gray"> <span class="is-family-header">
                          add files </span>
                      </b-button>
                  </span>
                    <span>
                  </span>
                    <div style="align-self:flex-end;">
                        <b-button class="ccgradientbutton is-rounded is-family-title is-size-5" style="position:relative;float:right;padding:0 2rem;border:none">SUBMIT</b-button>
                    </div>

                </div>
            </section>

        </div>
    </form>
</template>

<script>
    export default {
        name:'JobViewModal',
        data () {
            return {
                subName: '',
                subDescription: ''
            }
        }
    }
</script>

<style scoped lang="sass">
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

</style>
