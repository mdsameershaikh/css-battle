<template>
    <div class="cards-container">
        <div id="sticky-header">
            <h1 class="title" title="Kala kendra">{{ title | capitalizeFirstLetterOfEachWord }}</h1>

        </div>

        <div class="battle-container">
            <battle-21 />
            <battle-22 />
            <battle-seven />
            <battle-23 />
            <battle-twelve />
            <battle-three />
            <battle-fourteen />
            <battle-twenty />
            <battle-five />
            <battle-24 />
            <battle-thirteen />
            <battle-sixteen />
            <battle-ten />
            <battle-fifteen />
            <battle-six />
            <battle-seventeen />
            <battle-eighteen />
            <battle-eleven />
            <battle-nine />
            <battle-eight />
            <battle-four />
            <battle-one />
            <battle-two />
            <battle-ninteen />




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
import BattleThirteen from '@/battles/bt-thirteen.vue'
import BattleFourteen from '@/battles/bt-fourteen.vue'
import BattleFifteen from '@/battles/bt-fifteen.vue'
import BattleSixteen from '@/battles/bt-sixteen.vue'
import BattleSeventeen from '@/battles/bt-seventeen.vue'
import BattleEighteen from '@/battles/bt-eighteen.vue'
import BattleNinteen from '@/battles/bt-ninteen.vue'
import BattleTwenty from '@/battles/bt-twenty.vue'
import Battle21 from '@/battles/bt-21.vue'
import Battle22 from '@/battles/bt-22.vue'
import Battle23 from '@/battles/bt-23.vue'
import Battle24 from '@/battles/bt-24.vue'
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
        'battle-twelve': BattleTwelve,
        'battle-thirteen': BattleThirteen,
        'battle-fourteen': BattleFourteen,
        'battle-fifteen': BattleFifteen,
        'battle-sixteen': BattleSixteen,
        'battle-seventeen': BattleSeventeen,
        'battle-eighteen': BattleEighteen,
        'battle-ninteen': BattleNinteen,
        'battle-twenty': BattleTwenty,
        'battle-21': Battle21,
        'battle-22': Battle22,
        'battle-23': Battle23,
        'battle-24': Battle24



    },
    props: [
        'height'
    ],
    data() {
        return {
            headerHeight: '',
            title: 'my art gallery'
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
    padding: 15px;
    margin: 5px;
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