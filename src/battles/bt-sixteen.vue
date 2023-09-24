<template>
    <div class="battle">
        <div id='b'>
            <div id='l'></div>
        </div>
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
    background-color: #9CCCDB;
}

#b {
    width: 200px;
    height: 200px;
    background: #FEFAE0;
}

#l {
    width: 200p;
    height: 200px;
    clip-path: polygon(50%0%, 50%20%, 20%20%, 20%100%, 50%100%, 50%80%, 80%80%, 80%0%);
    background: #9CCCDB
}</style>