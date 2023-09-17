<template>
    <div class="battle">
        <div class="left-fixed"></div>
        <div class="center-eye"></div>
        <div class="right-fixed"></div>
        <div class="quartered-circles"></div>
    </div>
</template>
<script>
import '../common.css'
export default {
    namee: 'battle-two',
}


</script>
<style scoped>
.battle {
    background: #E3516E;
}

.left-fixed {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 150px;
    height: 150px;
    background: #D9D9D9;
    clip-path: circle(75px at 0 0);
    transform: rotate(0deg);
}

/* .right-fixed {
    position: absolute;
    bottom: -75px;
    right: -75px;
    width: 150px;
    height: 150px;
    background: #D9D9D9;
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 0%, 50% 0%, 50% 50%);
} */

.center-eye {
    position: absolute;
    top: 100px;
    right: 150px;
    width: 100px;
    height: 100px;
    background: #D9D9D9;
    border-radius: 150% 0% 150% 0%;
    transform: rotate(45deg)
}
</style>