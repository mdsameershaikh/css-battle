<template>
    <div class="battle">
        <div id='y'>
            <div id='a'></div>
            <div id='b'></div>
            <div id='c'></div>
        </div>
    </div>
    <!-- <h1>https://cssbattle.dev/play/x3AMz335HuaGovK9Tg8i</h1> -->
</template>
<script>
import '../common.css'
export default {
    namee: 'battle-seven',
}


</script>
<style scoped >
.battle {
    background: #8647E6;
}

#y {
    width: 200px;
    height: 200px;
    background: #EFEB99;
    clip-path: circle();
    position: relative;
}

#a {
    top: -70px;
    left: 130px;
    position: absolute;
    width: 100px;
    height: 100px;
    background: #EFEB99;
    z-index: 1;
    border: 20px solid #8647E6;
}

#b {
    top: 50px;
    left: 50px;
    position: absolute;
    width: 60px;
    height: 60px;
    background: #EFEB99;
    z-index: 2;
    border: 20px solid #8647E6;
}

#c {
    bottom: -30px;
    left: -30px;
    position: absolute;
    width: 60px;
    height: 60px;
    background: #EFEB99;
    z-index: 3;
    border: 20px solid #8647E6;
}
</style>