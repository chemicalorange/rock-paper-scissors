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
  [Variant.Paper]: {
    [Variant.Rock]: true,
    [Variant.Scissors]: false,
    [Variant.Spock]: true,
    [Variant.Lizard]: false
  },
  [Variant.Rock]: {
    [Variant.Paper]: false,
    [Variant.Scissors]: true,
    [Variant.Spock]: false,
    [Variant.Lizard]: true
  },
  [Variant.Scissors]: {
    [Variant.Paper]: true,
    [Variant.Rock]: false,
    [Variant.Spock]: false,
    [Variant.Lizard]: true
  },
  [Variant.Spock]: {
    [Variant.Paper]: false,
    [Variant.Rock]: true,
    [Variant.Scissors]: true,
    [Variant.Lizard]: false
  },
  [Variant.Lizard]: {
    [Variant.Paper]: true,
    [Variant.Rock]: false,
    [Variant.Scissors]: false,
    [Variant.Spock]: true
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
        // @ts-ignore
        const key: keyof Variant = Object.keys(Variant)[indexOfValue]
        this.houseActiveTool = Variant[key as keyof typeof Variant]
      }
    },
    playAgain() {
      this.step = 1
      this.houseActiveTool = null
    },
    compare() {
      if (this.houseActiveTool) {
        // @ts-ignore
        this.win = isWin[this.activeTool][this.houseActiveTool]
        if (this.win) {
          this.score = this.score + 1
        }
        this.step = 3
      }
    }
  }
})
