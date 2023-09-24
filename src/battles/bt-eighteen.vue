<template>
    <div class="battle">
        <div class='bar-container'>
            <div class="b"></div>
            <div class='w'></div>
            <div class="b"></div>
            <div class='w'></div>
            <div class="b"></div>
        </div>
    </div>
</template>
<script>
import '../common.css'
export default {
    namee: 'battle-eighteen',
}


</script>
<style scoped >
.battle {
    background: #4F77FF;
}

.bar-container {
    display: flex;
    justify-content: center;
    height: 200px;
    gap: 20px;
    width: 500px;
}

.b {
    background: #1038BF;
    width: 60px;

}

.w {
    background: #FFFFFF;
    width: 20px;
}
</style>