<template>
    <div class="battle">
        <div id='p'></div>
        <div id='b'></div>
    </div>
</template>
<script>
import '../common.css'
export default {
    namee: 'battle-23',
}


</script>
<style scoped >
.battle {
    background: #3C31A0;
}

#p {
    position: absolute;
    top: 0px;
    left: 0px;
    height: 100%;
    width: 100%;
    background: #E5DDD9;
    clip-path: polygon(44% 0%, 44% 42%, 0% 42%, 0% 58%, 44% 58%, 44% 100%, 56% 100%, 56% 58%, 100% 58%, 100% 42%, 56% 42%, 56% 0%);
}

#b {
    position: absolute;
    top: 25px;
    left: 75px;
    height: 150px;
    width: 150px;
    background: transparent;
    border: 50px solid #3C31A0;

}
</style>
