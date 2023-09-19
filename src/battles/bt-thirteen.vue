<template>
    <div class="battle">
        <div id='a' />
        <div id='b' />
    </div>
</template>
<script>
import '../common.css'
export default {
    name: 'battle-thirteen',
}


</script>
<style scoped >
.battle {
    background: linear-gradient(to right, #802471, #4F0843)
}

#a {
    position: absolute;
    top: 0px;
    right: 0px;
    width: 300px;
    height: 100px;
    background: #9076D8;
}

#b {
    position: absolute;
    bottom: 0px;
    left: 0px;
    width: 300px;
    height: 100px;
    background: #9076D8;
}
</style>