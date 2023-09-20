<template>
    <div class="battle">
        <div id='r'></div>
        <div id='c'></div>
    </div>
</template>
<script>
import '../common.css'
export default {
    namee: 'battle-fifteens',
}


</script>
<style scoped >
.battle {
    background: #F1D272;
}

#r {
    bottom: 100px;
    right: 220px;
    position: absolute;
    height: 200px;
    width: 25px;
    background: #EE7667;
    transform: rotate(25deg);

}

#c {
    bottom: 60px;
    left: 60px;
    position: absolute;
    height: 120px;
    width: 120px;
    background: #EE7667;
    border-radius: 50%;

}
</style>