<template>
    <div class="battle">
        <div id='e'></div>
        <div id='e'></div>
        <div id='e'></div>
    </div>
</template>
<script>
import '../common.css'
export default {
    namee: 'battle-eight',
}


</script>
<style scoped >
.battle {
    background-color: #DE9473;
}

#e {
    position: absolute;
    background: #A4281F;
    height: 150px;
    width: 100px;
    border-radius: 50%;
}

#e:nth-child(1) {
    left: 70px;
}

#e:nth-child(3) {
    right: 70px;
}</style>