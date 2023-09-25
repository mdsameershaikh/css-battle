<template>
    <div class="battle">
        <div id='t'>
            <div id='tt'>
                <div id='ttt'></div>
            </div>
        </div>
    </div>
</template>
<script>
import '../common.css'
export default {
    namee: 'battle-21',
}


</script>
<style scoped >
.battle {
    background: #73C6EA;
}

#t {
    height: 180px;
    width: 250px;
    background-color: #0D1335;
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);

}

#tt {
    height: 180px;
    width: 250px;
    background-color: #DC6638;
    clip-path: polygon(50% 22%, 0% 100%, 100% 100%);
}

#ttt {
    height: 180px;
    width: 250px;
    background-color: #FBFAE2;
    clip-path: polygon(50% 44%, 0% 100%, 100% 100%);
}</style>