<template>
    <div class="battle">
        <div class='gradient-box'></div>


    </div>
</template>
<script>
import '../common.css'
export default {
    namee: 'battle-four',
}


</script>
<style scoped >
.battle {
    background: #DE9473;
}

.gradient-box {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 200px;
    height: 150px;
    background-image: linear-gradient(#A4281F, #DE9473)
}
</style>