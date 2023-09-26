<template>
    <div class="battle">
        <div id='ps'></div>
        <div id='ws'></div>
        <div id='bg'>
            <div id='bb'></div>
        </div>
    </div>
</template>
<script>
import '../common.css'
export default {
    namee: 'battle-22',
}


</script>
<style scoped >
.battle {
    background: #6CB3A9;
}

#ps {
    top: 17%;
    position: absolute;
    background: #D25B70;
    height: 90px;
    width: 200px;
    border-radius: 250px 250px 0px 0px;
}

#ws {
    bottom: 17%;
    position: absolute;
    background: #FFFFFF;
    height: 90px;
    width: 200px;
    border-radius: 0px 0px 250px 250px;
}

#bg {
    height: 180px;
    width: 180px;
    background: #781728;
    border-radius: 50%;
    display: grid;
    place-items: center;
}

#bb {
    position: relative;
    height: 50px;
    width: 50px;
    background: #F6DF96;
    border-radius: 50%;
    border: 10px solid #781728;

}
</style>