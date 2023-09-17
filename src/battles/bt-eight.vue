<template>
    <div class="battle">
        <div class="yellow-card-one"></div>
        <div class="yellow-card-two"></div>
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
    background-color: #E3516E;
}

.yellow-card-one {
    position: absolute;
    height: 100px;
    width: 100px;
    background-color: yellow;
    transform: rotate(45deg)
}


.yellow-card-two {
    position: absolute;
    height: 100px;
    width: 100px;
    background-color: yellow;
}
</style>