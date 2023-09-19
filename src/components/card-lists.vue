<template>
    <div class="cards-container">
        <div id="sticky-header">
            <h1 class="title" title="Kala kendra">My Art Gallery</h1>

        </div>

        <div class="battle-container">
            <battle-seven />
            <battle-twelve />
            <battle-three />
            <battle-five />
            <battle-ten />
            <battle-six />
            <battle-eleven />
            <battle-nine />
            <battle-eight />
            <battle-four />
            <battle-one />
            <battle-two />




        </div>
    </div>
</template>
<script>
import BattleOne from '@/battles/bt-one.vue'
import BattleTwo from '@/battles/bt-two.vue'
import BattleThree from '@/battles/bt-three.vue'
import BattleFour from '@/battles/bt-four.vue'
import BattleFive from '@/battles/bt-five.vue'
import BattleSix from '@/battles/bt-six.vue'
import BattleSeven from '@/battles/bt-seven.vue'
import BattleEight from '@/battles/bt-eight.vue'
import BattleNine from '@/battles/bt-nine.vue'
import BattleTen from '@/battles/bt-ten.vue'
import BattleEleven from '@/battles/bt-eleven.vue'
import BattleTwelve from '@/battles/bt-twelve.vue'
export default {

    name: 'card-lists',
    components: {
        'battle-one': BattleOne,
        'battle-two': BattleTwo,
        'battle-three': BattleThree,
        'battle-four': BattleFour,
        'battle-five': BattleFive,
        'battle-six': BattleSix,
        'battle-seven': BattleSeven,
        'battle-eight': BattleEight,
        'battle-nine': BattleNine,
        'battle-ten': BattleTen,
        'battle-eleven': BattleEleven,
        'battle-twelve': BattleTwelve


    },
    props: [
        'height'
    ],
    data() {
        return {
            headerHeight: ''
        }
    },
    mounted() {
        this.headerHeight = document.getElementById("sticky-header").offsetHeight + 'px';
    }

}
</script>
<style scoped>
.cards-container {
    position: relative;
    border: 10px solid var(--my-contrast-color);
    border-radius: 15px;
    color: var(--my-contrast-color);
    text-align: center;
}

.title {
    font-weight: 500;
    font-size: 64px;
    border-bottom: 1px dashed var(--my-contrast-color);
    border-radius: 5px;
    margin-bottom: 5px;
}



.battle-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 5px;
    height: calc(v-bind('height') - 7rem - 150px);
    overflow: auto;
}

@media only screen and (max-width: 850px) {
    .battle-container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 5px;
        height: calc(v-bind('height') + 50px);
        overflow: auto;
    }
}

@media only screen and (max-width: 600px) {
    .battle-container {
        display: grid;
        grid-template-columns: 1fr;
        place-items: center;
        gap: 5px;
        height: calc(v-bind('height') - 5rem);
        overflow: auto;
    }
}
</style>