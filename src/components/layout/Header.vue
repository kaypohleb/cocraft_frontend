<template>
    <header class="header">
        <img class="logo" src="@/assets/newlogo.png"/>
    </header>
</template>

<script>

export default {
    name:"Header"
}
</script>

<style scoped>
    .logo{
        height: 50px;
        margin-left: 10px;
    }
    .header{
        background: #FFF;
        color:#333;
        text-align: left;
        padding:5px;
    }
    
    .header a{
        color:#FFF;
        padding-right:5px;
    }
    

</style>