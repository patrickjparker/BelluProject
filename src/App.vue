<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Survey/>
  </div>
</template>

<script>
import Survey from './components/Survey.vue'

export default {
  name: 'App',
  components: {
    Survey
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
