<template>
    <div class="body-container">
        <div class="container">
            <div class="progress-container">
                <div class="progress" :style="{ width:`${ cont/4 *100 }%` }" ></div>
                <div class="circle" :class="{active:classesActive[0]}">1</div>
                <div class="circle" :class="{active:classesActive[1]}">2</div>
                <div class="circle" :class="{active:classesActive[2]}">3</div>
                <div class="circle" :class="{active:classesActive[3]}">4</div>
                <div class="circle" :class="{active:classesActive[4]}">5</div>
            </div>
        </div>
    </div>

</template>

<script>
export default {

    name:"Progress Bar",
    props:{
        cont:{
            type:   Number,
            required: true
        },
        classesActive:{
            type: Array,
            required: true
        }
    },
    
    
    

}
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css?family=Muli&display=swap');




    .body-container{
        font-family: 'Muli', sans-serif;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 10vh;
        overflow: hidden;
        margin: 0;
        opacity: 0.9;
    }

    .container{
        text-align: center;
    }


    .progress-container{
        display: flex;
        justify-content: space-between;
        position: relative;
        margin-bottom: 30px;
        max-width: 100%;
        width: 350px;
        
        
        

    }

    .progress-container::before{
        content: '';
        background-color: #e0e0e0;
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        height: 4px;
        width: 100%;
        z-index: -1;
        
    }
    .progress{
        background-color: #3498db;
        height: 4px;
        left: 0;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        transition: .4s ease;
        width: 30%;
        z-index: -1;
    }

    .circle{
        align-items: center;
        background-color: #fff;
        border: 3px solid #e0e0e0;
        border-radius: 50%;
        color: #999;
        display: flex;
        height: 30px;
        justify-content: center;
        width: 30px;
    }

    .circle.active{
        border-color:#3498db;
    }

</style>