<template>
    <header class="header">
        <div class="is-flex" style="padding: 1.4rem 0;justify-content: space-between">
            <router-link to="/" style="margin-left:1vw">
                <img class="logo" style="height:50px;"  src="../../assets/newlogo.png"/>
            </router-link>
            <span></span>
            <span style="margin-right:1vw;display:flex;">
                <b-button @click="isComponentModalActive = true" class="ccgradientbutton slight-round is-family-title" style="align-self:center;border:none;padding:0 1.1rem;margin-right: 1rem">sign in</b-button>
                <a role="button" style="display:flex">
                    <i class="material-icons is-size-1 img-button-white" style=";align-self:center">menu</i>
                </a>
            </span>
        </div>

        <b-modal :active.sync="isComponentModalActive" has-modal-card trap-focus>
            <modal-form v-bind="formProps"></modal-form>
        </b-modal>
    </header>

</template>

<script>
import ModalForm from "../../components/layout/Modal.vue"
export default {
    name:"HeaderHome",
    components:{
        ModalForm
    },
    data() {
            return {
                isComponentModalActive: false,
                formProps: {
                    email: 'caleb@you.com',
                    password: 'testing'
                }
            }
    }
}
</script>

<style scoped lang="sass">
    .nav_bar
        margin-left: 1rem

    .logo
        height: 100px
        margin-left: 10px

    .header
        color: #333
        text-align: left
        padding: 5px

    .router-link:hover
        color: black

    .slight-round
        border-radius: 0.4rem
</style>
