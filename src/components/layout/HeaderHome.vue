<template>
    <header class="header">
        <div class="level is-hidden-mobile" style="padding: 1.4rem 0">
            <router-link to="/" class="level-left" style="margin-left:1rem">
                <img class="logo" style="height:50px"  src="../../assets/newlogo.png"/>
            </router-link>
            <div class="level-right" style="margin-right:1rem">
                <b-button class="ccgradientbutton slight-round is-family-title" style="padding:0 1rem;margin-right: 1rem">sign in</b-button>
                <a role="button">
                    <i class="material-icons is-size-1 img-button-white" style="margin: 0 0.3rem">menu</i>
                </a>
            </div>
        </div>
    </header>

</template>

<script>

export default {
    name:"HeaderHome"
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
