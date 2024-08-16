import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { Highscore } from '../models/highscore'
import geographie from '@/data/geographie'

export const useGameStore = defineStore('game', () => {
    const topics = [
        {
            name: "Geografie",
            questions: geographie
        }
    ]

    function createGame() {
        const questions = ref
    }

    return { scores, add }
})