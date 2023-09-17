<template>
    <div>
        <div class="main" :class="isSideMenuOpen ? 'main-sm-open' : 'main-sm-closed'">
            <span class="side-title" v-if="isSideMenuOpen">Battles</span>
            <button class="open-collapse-btn" :class="isSideMenuOpen ? 'collapse-icon-sm-open' : 'collapse-icon-sm-closed'"
                @click="openCloseSideMenu"> > </button>
        </div>

    </div>
</template>
<script>
export default {
    name: 'side-menu',
    data() {
        return {
            isSideMenuOpen: true,
        }
    },
    methods: {
        openCloseSideMenu() {
            this.isSideMenuOpen = !this.isSideMenuOpen;
            this.$emit('sideMenuCollapse', this.isSideMenuOpen);
        }
    }

}
</script>
<style scoped>
.main {
    color: rgb(38, 214, 41);
    font-size: 30px;
    border-bottom: 2px solid rgb(38, 214, 41);
    display: flex;
}

.main-sm-open {
    justify-content: space-between;
}

.main-sm-closed {
    justify-content: center;
}

.side-title {
    padding: 5px 5px 5px 10px;
    font-size: 25px;
    font-weight: 400;
}

.open-collapse-btn {
    border: none;
    background: none;
    color: rgb(38, 214, 41);
    font-size: 30px;
    display: inline;

}

.collapse-icon-sm-open {
    transform: rotate(180deg);
}

.collapse-icon-sm-closed {
    transform: rotate(0deg);
}
</style>