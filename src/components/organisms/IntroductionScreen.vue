<script setup lang="ts">
import { ref } from 'vue';
import QuizFooter from '@/components/molecules/QuizFooter.vue';
import { Question } from '@/models/question'

import geographie from '@/data/geographie'



const questions = ref<Question[]>([])
questions.value.push(geographie[Math.floor(Math.random() * geographie.length)])

</script>

<style scoped lang="scss">



</style>

<template>
    <div class="screen">
        <p>
            
        </p>
    </div>
</template>