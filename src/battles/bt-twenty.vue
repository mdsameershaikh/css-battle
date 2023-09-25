<template>
    <div class="battle">
        <div id='h'></div>
        <div id='t'></div>
    </div>
</template>
<script>
import '../common.css'
export default {
    namee: 'battle-twenty',
}


</script>
<style scoped >
.battle {
    flex-direction: column;
    background: #E38F66;
}

#h {
    margin-top: 80px;
    background: #FFFBDA;
    height: 120px;
    width: 150px;
    clip-path: polygon(30% 0%, 10% 100%, 90% 100%, 70% 0%)
}

#t {
    background: #62306D;
    height: 100px;
    width: 10px;
}
</style>