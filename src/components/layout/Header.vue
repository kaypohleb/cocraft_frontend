<template>
    <header class="header">
        <div class="level is-hidden-mobile" style="padding: 1.4rem 0">
            <router-link to="/" class="level-left" style="margin-left:1rem">
                <img class="logo" style="height:50px"  src="../../assets/newlogo.png"/>
            </router-link>
            <div class="level-item has-text-centered">
                <div class="nav-bar level is-size-4">
                    <router-link  to="/projects" class="level-item nav_bar is-family-title has-text-grey-light">PROJECTS</router-link>
                    <router-link  to="/jobs" class="level-item nav_bar is-family-title has-text-grey-light">JOBS</router-link>
                    <router-link  to="/submissions" class="level-item nav_bar is-family-title has-text-grey-light">SUBMISSIONS</router-link>
                    <router-link  to="/about" class="level-item nav_bar is-family-title has-text-grey-light">ABOUT</router-link>
                </div>
            </div>
            <div class="level-right" style="margin-right:1rem">
                <a role="button">
                    <img src="../../assets/svg/horn-01.svg" width="40px" style="margin-right:1rem;" alt="Notifications">
                </a>
                <a role="button">
                    <i class="material-icons is-size-1 img-button" style="margin: 0 0.3rem">account_circle</i>
                </a>
                <a role="button">
                    <i class="material-icons is-size-1 img-button" style="margin: 0 0.3rem">menu</i>
                </a>
            </div>
        </div>
    </header>

</template>

<script>

export default {
    name:"Header"
}
</script>

<style scoped lang="sass">
    .nav_bar
        margin-left: 1rem

    .logo
        height: 100px
        margin-left: 10px

    .header
        background: #FFF
        color: #333
        text-align: left
        padding: 5px

    .router-link:hover
        color: black
</style>
