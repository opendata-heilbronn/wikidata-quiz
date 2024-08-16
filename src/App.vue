<script lang="ts">
import { defineComponent } from 'vue';
import QuizPage from './pages/QuizPage.vue';


export default defineComponent({
  name: 'App',
  components: {
    QuizPage
  }
});
</script>

<style lang="scss">
body {
  padding: 0;
  margin: 0;
}

* {
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<template>
  <quiz-page ></quiz-page>
</template>