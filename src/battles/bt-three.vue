<template>
    <div class="battle">
        <div class='circles-container'>
            <div class='circle'></div>
            <div class='circle'></div>
            <div class='circle'></div>
            <div class='circle'></div>
        </div>
        <div class='overlay-pink-card'></div>


    </div>
</template>
<script>
import '../common.css'
export default {
    namee: 'battle-three',
}


</script>
<style scoped >
.battle {
    background: #DA30D4;
}

.main-container {
    position: relative;
}

.overlay-pink-card {
    position: absolute;
    height: 120px;
    width: 120px;
    background-color: #DA30D4;
    top: 100px;
    left: 135px;
    z-index: 10;

}

.circles-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px
}

.circle {
    height: 100px;
    width: 100px;
    background: #0C0C49;
    clip-path: circle();

}
</style>