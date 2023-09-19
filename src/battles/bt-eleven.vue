<template>
    <div class="battle">
        <p id='b' />
        <p id='c' />
        <p id='d' />
    </div>
</template>
<script>
import '../common.css'
export default {
    namee: 'battle-eleven',
}


</script>
<style scoped >
.battle {
    background: #ED6A9D;
}

#b {
    width: 100px;
    height: 150px;
    background: #050044;
    border-radius: 50px 25px 25px 50px;
}

#c {
    height: 20px;
    width: 20px;
    background: #050044;
}

#d {
    width: 100px;
    height: 150px;
    background: #050044;
    border-radius: 25px 50px 50px 25px;
}
</style>