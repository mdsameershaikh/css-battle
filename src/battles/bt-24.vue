<template>
    <div class="battle">
        <div id='s'></div>
        <div id='c'></div>
    </div>
</template>
<script>
import '../common.css'
export default {
    namee: 'battle-24',
}


</script>
<style scoped >
.battle {
    background: #E69041;
}

#s {
    position: absolute;
    top: 110px;
    height: 120px;
    width: 240px;
    background: #221F20;
    border-radius: 0px 0px 150px 150px;
    /* z-index: -1; */
}


#c {
    position: absolute;
    top: 30px;
    height: 80px;
    width: 80px;
    background: #221F20;
    border: 40px solid #E69041;
    border-radius: 50%;
}
</style>