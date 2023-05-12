<template>
  <div id="app">
    <HeaderBar/>
    <LandingPage v-if="!beginSurvey" @move="beginSurvey=true"/>
    <Survey v-else/>
  </div>
</template>

<script>
import Survey from './components/Survey.vue'
import LandingPage from './components/LandingPage.vue'
import HeaderBar from './components/HeaderBar.vue'

export default {
  name: 'App',
  components: {
    HeaderBar,
    LandingPage,
    Survey
  },
  data: function() {
    return {
      beginSurvey: false
    }
  },
}
</script>

<style>
#app {
  font-family: 'Lora', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
}

:root {
  --blue-0: #778996;
  --blue-1: #a4b0be;
  --blue-2: #bac8d8;
  --accent-0: #ccd1d7;
  --accent-1: #e5e8ea;
  --accent-2: #f2f2f2;
  --beige-0: #ede7df;
  --red-0: #bf847a;
  --red-1: #e1c2bd;

  --black-0: #3a3b3d;
  --black-1: #525457;
  --grey-0: #75787c;
  --grey-1: #a5a9ae;
  --grey-2: #f2f2f2;
  --white-0: #ffffff;
}

@font-face {
  font-family: 'Lora';
  font-style: normal;
  font-weight: 400;
  src: url(assets/Lora/Lora-VariableFont_wght.ttf) format('truetype');
}

</style>
