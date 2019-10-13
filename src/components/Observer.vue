<template name="component-name">
    <div class="observer">
        
    </div>
</template>

<script>
export default {
    name:'observer',
    data(){
        return{
            observer:null
        };
    },
    mounted(){
        this.observer = new IntersectionObserver(([entry])=>{
            if(entry && entry.isIntersecting){
                console.log('intersect');
            }
        });
        this.observer.observe(this.$el);
    }
}
</script>