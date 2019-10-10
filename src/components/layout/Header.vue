<template>
    <header class="header">
        
        <router-link to="/">
            <img class="logo" src="@/assets/newlogo.png"/>
        </router-link>
        <div class = "nav_bar">
        <router-link to="/projects">PROJECTS</router-link>
        <router-link to="/jobs">JOBS</router-link>
        <router-link to="/submissions">SUBMISSIONS</router-link>
        <router-link to="/about">ABOUT</router-link>
        </div>
    </header>
    
</template>

<script>

export default {
    name:"Header"
}
</script>

<style scoped>
    .nav_bar{
        margin-left:50px;
        display: inline-block;
    }
    .logo{
        height: 100px;
        margin-left: 10px;
    }
    .header{
        background: #FFF;
        color:#333;
        text-align: left;
        padding:5px;
    }
    
    .header a{
        font-family: 'Raleway Medium', sans-serif;
        color:#000;
        padding-right:5px;
    }
    

</style>