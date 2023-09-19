<template>
    <div class="battle">
        <div id="a">
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
    namee: 'battle-forteen',
}


</script>
<style scoped >
.battle {
    background: #998235;
}

#a {
    margin-top: 52px;
    height: 145px;
    width: 145px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    transform: rotate(-45deg);
}


#i:nth-child(1) {
    background: #0B2429;
}

#i:nth-child(2) {
    background: #0B2429;
}

#i:nth-child(4) {
    background: #FCBE5C;
}
</style>