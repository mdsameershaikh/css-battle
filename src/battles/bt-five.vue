<template>
    <div class="battle">
        <div class='yellow-ball'>
            <div class='orange-layer'></div>
        </div>
        <div class='purple-ball'></div>

    </div>
</template>
<script>
import '../common.css'
export default {
    namee: 'battle-five',
}


</script>
<style scoped >
.battle {
    background: #62306D;
}

.yellow-ball {
    position: relative;
    display: grid;
    place-items: center;
    background-color: #F7EC7D;
    height: 200px;
    width: 200px;
    clip-path: circle();
}

.purple-ball {
    position: absolute;
    height: 120px;
    width: 120px;
    background-color: #62306D;
    clip-path: circle();
    z-index: 3;
}

.orange-layer {
    position: absolute;
    height: 100px;
    width: 100px;
    background-color: #E38F66;
    top: 0px;
    left: 0px;
}
</style>