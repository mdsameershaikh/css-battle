<template>
    <div class="battle">
        <div id='b'>
            <div id='r'>
                <div id='or'>
                    <div id='bl'></div>
                </div>
                <div id='h'></div>
                <div id='h'></div>
                <div id='h'></div>
            </div>
        </div>
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
    background: #161616;
}

#b {
    width: 200px;
    height: 200px;
    background: #000000;
    clip-path: circle();
    display: grid;
    place-items: center;
}

#r {
    width: 190px;
    height: 190px;
    background: #A22015;
    clip-path: circle();
    display: grid;
    place-items: center;
}

#or {
    display: grid;
    place-items: center;
    width: 70px;
    height: 70px;
    background: #E96A23;
    border-radius: 50%;
    border: 15px solid #000000;
}

#bl {
    width: 50px;
    height: 50px;
    background: #000000;
    border-radius: 50%;
}

#h {
    position: fixed;
    width: 70px;
    height: 70px;
    background: #A22015;
    border-radius: 50%;
    border: 15px solid #000000;
}

#h:nth-child(2) {
    top: 100px;
    left: 75px;
}

#h:nth-child(3) {
    top: 60px;
    right: 75px;
}

#h:nth-child(4) {
    bottom: 12px;
    right: 150px;
}
</style>