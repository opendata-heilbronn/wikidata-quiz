<script setup lang="ts">
import { defineProps } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCheck, faX, faQuestion, faHome, faInfo, faTable, faTrophy } from '@fortawesome/free-solid-svg-icons'

import { Question } from '../../models/question'


interface p {
    questions: Array<Question>
}

const props = defineProps<p>()

</script>

<style scoped lang="scss">
.timeline {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 64px;
    border-top: #572678 solid 2px;

    .entry {
        display: flex;
        flex-direction: row;
        align-items: center;

        .bullet {
            width: 44px;
            height: 44px;
            border-radius: 50%;
            border-color: #572678;
            border-style: solid;
            border-width: 2px;
            color: #fff;
            display: flex;
            align-items: center;
            justify-content: center;

            &.correct {
                color: #267838;
            }

            &.incorrect {
                color: #782626;
            }

            &.unanswered {
                color: #572678;
            }

            &.idle, &.intro, &.results, &.highscore {
                color: #572678;
            }

            &.idle.done, &.intro.done, &.results.done {
                color: #cc19c0;
            }

            &.highscore.done {
                color: #bea111;
            }
        }

        .connector {
            width: 24px;
            height: 2px;
            background: #572678;
        }

        &:last-child .connector {
            display: none;
        }
    }

}
</style>

<template>
    <div class="quiz-footer">
        <div class="timeline">
            <div class="entry" >
                <div class="bullet idle done"
                    title="Idle Screen">
                    <FontAwesomeIcon :icon="faHome"/>
                </div>
                <div class="connector"></div>
            </div>
            <div class="entry" >
                <div class="bullet intro"
                    title="Introduction">
                    <FontAwesomeIcon :icon="faInfo"/>
                </div>
                <div class="connector"></div>
            </div>
            <div class="entry" v-for="q in questions" :key="q.Topic">
                <div class="bullet"
                    :class="{ 'unanswered': q.Answer == null, 'correct': q.Answer?.IsCorrect, 'incorrect': !q.Answer?.IsCorrect }"
                    :title="q.Content">
                    <FontAwesomeIcon :icon="faCheck" v-if="q.Answer != null && q.Answer.IsCorrect" />
                    <FontAwesomeIcon :icon="faX" v-if="q.Answer != null && !q.Answer.IsCorrect" />
                    <FontAwesomeIcon :icon="faQuestion" v-if="q.Answer == null" />
                </div>
                <div class="connector"></div>
            </div>
            <div class="entry" >
                <div class="bullet results"
                    title="Intoduction">
                    <FontAwesomeIcon :icon="faTable"/>
                </div>
                <div class="connector"></div>
            </div>
            <div class="entry" >
                <div class="bullet highscore done"
                    title="Intoduction">
                    <FontAwesomeIcon :icon="faTrophy"/>
                </div>
                <div class="connector"></div>
            </div>
        </div>
    </div>
</template>