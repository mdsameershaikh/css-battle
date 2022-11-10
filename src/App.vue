<template>
  <div id="app">
    <div class="main-container">
      <div class="side-panel"></div>
      <div class="cards-container">

    </div>
    </div>
   
  </div>
</template>

<script>
export default {
  name: "App",
  data(){
    return {
      height:''
    }
  },
  mounted(){
    this.height= screen.height +"px" 
  }
};
</script>

<style>
body {
  background-color: #2c3e50;
}
.main-container{
  display: grid;
  grid-template-columns: 1fr 6fr;
  grid-gap: 50px;
}
.side-panel{
  background: #2c3e50;
  border: 8px solid white;
  height: calc(v-bind('height') - 7rem);
}
.cards-container{
   border: 8px solid white;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: auto;
  width: auto;
}
</style>
