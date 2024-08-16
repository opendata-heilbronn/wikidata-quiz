<script setup lang="ts">

</script>

<style scoped lang="scss">
@keyframes animateStar {
    from {
        opacity: 0;
    }

    to {
        opacity: 0.3;
    }
}

.background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, #000b1c, #1d0b29);
    z-index: -1;
    animation: animate 15s linear infinite;
}

.star {
    animation: animateStar 2s alternate infinite;

    position: relative;

    display: inline-block;
    width: 0;
    height: 0;

    margin-left: .9em;
    margin-right: .9em;
    margin-bottom: 1.2em;

    border-right: .3em solid transparent;
    border-bottom: .7em solid #572678;
    border-left: .3em solid transparent;

    /* Controlls the size of the stars. */
    font-size: 24px;

    &:before,
    &:after {
        content: '';

        display: block;
        width: 0;
        height: 0;

        position: absolute;
        top: .6em;
        left: -1em;

        border-right: 1em solid transparent;
        border-bottom: .7em solid #572678;
        border-left: 1em solid transparent;

        transform: rotate(-35deg);
    }

    &:after {
        transform: rotate(35deg);
    }
}
</style>

<template>
    <div class="background">
        <div class="star" style="position: absolute; left: 200px; top: 200px;">

        </div>
    </div>
</template>