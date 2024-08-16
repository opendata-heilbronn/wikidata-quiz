import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { Highscore } from '../models/highscore'

export const useHighscoreStore = defineStore('highscore', () => {
    const scores = ref<Highscore[]>([])

    function add(score: Highscore) {
        scores.value.push(score)

        localStorage.setItem("highscore", JSON.stringify(scores.value));
    }


    return { scores, add }
})