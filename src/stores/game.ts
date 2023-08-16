import { defineStore } from "pinia"
import type { Variant } from "@/stores/types"
interface State {
  score: number,
  step: number,
  win: boolean | null,
  count: number,
  activeTool: Variant,
  houseActiveTool: Variant | null
}
export const useGameStore = defineStore('game', {
  state: (): State => ({
    score: 0,
    step: 1,
    win: null,
    count: 0,
    activeTool: 'paper',
    houseActiveTool: null,
  }),
  actions: {
    setActiveTool(value: Variant) {
      this.activeTool = value
      this.step = 2
    },
    setHouseActiveTool() {
        const getRandom = ():Variant => {
          const randomNumber = Math.floor(Math.random() * 3)
          const variants: Variant[] = ['rock', 'paper', 'scissors']
          const value = variants[randomNumber]
          if( value !== this.activeTool ) {
            return value
          }
          return getRandom()
        }
        this.houseActiveTool = getRandom()
    },
    playAgain() {
      this.step = 1
      this.houseActiveTool = null
    },
    compare() {
      if(this.activeTool === 'rock') {
          if(this.houseActiveTool === 'paper') {
            this.win = false
          }

          if(this.houseActiveTool === 'scissors') {
            this.win = true
          }
      }

      if(this.activeTool === 'paper') {
        if(this.houseActiveTool === 'scissors') {
          this.win = false
        }

        if(this.houseActiveTool === 'rock') {
          this.win = true
        }
      }

      if(this.activeTool === 'scissors') {
        if(this.houseActiveTool === 'rock') {
          this.win = false
        }

        if(this.houseActiveTool === 'paper') {
          this.win = true
        }
      }
      if(this.win) {
        this.score = this.score + 1
      }
      this.step = 3
    }
  },
})