<template>
    <div class="battle">
        <div id='a'>
            <div id='i'></div>
            <div id='i'></div>
            <div id='i'></div>
            <div id='i'></div>
        </div>

    </div>
</template> 
<script>
import '../common.css'
export default {
    namee: 'battle-tem',
}


</script>
<style scoped >
.battle {
    background-color: #E3516E;
}

#a {
    height: 200px;
    width: 200px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    clip-path: circle();
}

#i:nth-child(1) {
    background: #51B5A9;
}

#i:nth-child(2) {
    background: #FADE8B;
}

#i:nth-child(3) {
    background: #F7F3D7;
}
</style>