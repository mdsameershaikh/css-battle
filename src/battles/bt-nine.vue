<template>
    <div class="battle">
        <div class='p'></div>
        <div class='b'></div>
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
    background: #F5D6B4;
}

.p {
    height: 220px;
    width: 220px;
    background: #D86F45;
    clip-path: polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%);
    transform: rotate(45deg);

}

.b {
    height: 150px;
    width: 150px;
    background: #D86F45;
    position: absolute;
    top: 75px
}
</style>