import { defineStore } from 'pinia'
import { Variant } from '@/stores/types'

interface State {
  score: number
  step: number
  win: boolean | null
  count: number
  activeTool: Variant
  houseActiveTool: Variant | null
}

const isWin = {
  paper: {
    rock: true,
    scissors: false,
    spock: true,
    lizard: false
  },
  rock: {
    paper: false,
    scissors: true,
    spock: false,
    lizard: true
  },
  scissors: {
    paper: true,
    rock: false,
    spock: false,
    lizard: true
  },
  spock: {
    paper: false,
    rock: true,
    scissors: true,
    lizard: false
  },
  lizard: {
    paper: true,
    rock: false,
    scissors: false,
    spock: true
  }
}
export const useGameStore = defineStore('game', {
  state: (): State => ({
    score: 0,
    step: 1,
    win: null,
    count: 0,
    activeTool: Variant.Paper,
    houseActiveTool: null
  }),
  actions: {
    setActiveTool(value: Variant) {
      this.activeTool = value
      this.step = 2
    },
    setHouseActiveTool() {
      if (this.activeTool) {
        const allValues = Object.values(Variant)
        allValues.splice(allValues.indexOf(this.activeTool), 1)
        const value = allValues[Math.floor(Math.random() * allValues.length)]
        const indexOfValue = Object.values(Variant).indexOf(value as unknown as Variant)
        const key: keyof Variant = Object.keys(Variant)[indexOfValue]
        this.houseActiveTool = Variant[key]
      }
    },
    playAgain() {
      this.step = 1
      this.houseActiveTool = null
    },
    compare() {
      this.win = isWin[this.activeTool][this.houseActiveTool]
      if (this.win) {
        this.score = this.score + 1
      }
      this.step = 3
    }
  }
})
