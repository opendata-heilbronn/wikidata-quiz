<script setup lang="ts">
import { ref } from 'vue';
import QuizFooter from '@/components/molecules/QuizFooter.vue';
import { Question } from '@/models/question'

import geographie from '@/data/geographie'



const questions = ref<Question[]>([])
questions.value.push(geographie[Math.floor(Math.random() * geographie.length)])
questions.value.push(geographie[Math.floor(Math.random() * geographie.length)])
questions.value.push(geographie[Math.floor(Math.random() * geographie.length)])
questions.value.push(geographie[Math.floor(Math.random() * geographie.length)])
questions.value.push(geographie[Math.floor(Math.random() * geographie.length)])
questions.value.push(geographie[Math.floor(Math.random() * geographie.length)])
questions.value.push(geographie[Math.floor(Math.random() * geographie.length)])
questions.value.push(geographie[Math.floor(Math.random() * geographie.length)])
questions.value.push(geographie[Math.floor(Math.random() * geographie.length)])
questions.value.push(geographie[Math.floor(Math.random() * geographie.length)])

questions.value[0].Answer = {
    Content: "foobar",
    IsCorrect: true
}

</script>

<style scoped lang="scss">
@keyframes AnimationName {
    0% {
        background-position: 0% 100%
    }

    25% {
        background-position: 100% 100%
    }

    50% {
        background-position: 100% 0%
    }

    75% {
        background-position: 0% 0%
    }
}

.quiz-container {
    width: 100vw;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
}

.content-background {
    width: 80vw;
    height: 80vh;

    background: radial-gradient(circle, #cc19c0, #5d0262c1);
    background-size: 400% 400%;

    animation: AnimationName 10s ease infinite;

    padding: 10px;
    border-radius: 20px;
    box-shadow: inset 0 0 20px #000000, inset 0 0 20px #1d0b29;
}

.content {
    background: #1a0c24;
    width: 100%;
    height: 100%;
    border-radius: 10px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .header {
        width: 100%;
        height: 20%;

        h1.title {
            color: #cc19c0;
            font-size: 3em;
            text-align: center;
            margin-bottom: 0.1rem;
        }

        .subtitle {
            margin-top: 0;
            font-size: 1.5rem;
            text-align: center;
            color: #572678;
        }
    }
}
</style>

<template>
    <div class="quiz-container">

        <div class="content-background">
            <div class="content">
                <div class="header">
                    <h1 class="title">WikiData Quiz</h1>
                    <h3 class="subtitle">query to the world</h3>
                </div>

                <div class="body">

                    <slot></slot>

                </div>
                <QuizFooter :questions="questions"></QuizFooter>
            </div>
        </div>


    </div>
</template>