<template>
    <div class="battle">
        <div class='a'>
            <div class='b'>
                <div class='c'></div>
            </div>
        </div>
    </div>
</template>
<script>
import '../common.css'
export default {
    namee: 'battle-six',
}


</script>
<style scoped >
.battle {
    background: #6592CF;
}

.a {
    width: 300px;
    height: 150px;
    background: #243D83;
    display: flex;
    justify-content: center;
    align-items: center;

}

.b {
    width: 150px;
    height: 150px;
    background: #243D83;
    border: 50px solid #6592CF;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

}

.c {
    width: 50px;
    height: 50px;
    background: #EEB850;
    border-radius: 50%
}
</style>