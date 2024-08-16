<script setup lang="ts">
import AnimatedBackground from '@/templates/AnimatedBackground.vue';
import DialogOrganism from '@/components/organisms/DialogOrganism.vue';
import HighscoreScreen from '@/components/organisms/HighscoreScreen.vue';

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
    <animated-background></animated-background>
    <dialog-organism style="position: absolute; top: 0; left: 0;">
        <highscore-screen></highscore-screen>
    </dialog-organism>
</template>