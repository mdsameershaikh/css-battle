<template>
    <div class="battle">
        <p id='a' />
        <p id='b' />
        <p id='c' />
    </div>
</template>
<script>
import '../common.css'
export default {
    namee: 'battle-twelve',
}


</script>
<style scoped >
.battle {
    background-color: #E3516E;
}

#a {
    width: 184px;
    height: 184px;
    background: #FADE8B;
}

#b {
    position: absolute;
    height: 30px;
    width: 300px;
    background: #E3516E;
    transform: rotate(45deg)
}

#c {
    position: absolute;
    height: 30px;
    width: 300px;
    background: #E3516E;
    transform: rotate(-45deg)
}</style>