<template>
    <header class="header">
        <img src="./assets/newlogo.png"/>
    </header>
</template>

<script>
export default {
    name:"Header"
}
</script>

<style scoped>
    .header{
        background: #333;
        color:#FFF;
        text-align: left;
        padding:5px;
    }
    
    .header a{
        color:#FFF;
        padding-right:5px;
    }
    #title{
        margin-left: 10px;
        
    }
    #subtitle{
        margin-left: 10px;
    }

</style>