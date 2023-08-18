// stores/counter.spec.ts
import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'

import { useGameStore } from '@/stores/game'

describe('Game Store', () => {
  beforeEach(() => {
    // creates a fresh pinia and make it active so it's automatically picked
    // up by any useStore() call without having to pass it to it:
    // `useStore(pinia)`
    setActivePinia(createPinia())
  })

  it('compare tools', () => {
    const game = useGameStore()

    game.setActiveTool('scissors')
    game.houseActiveTool = 'rock'
    game.compare()

    expect(game.win).toBe(false)

    game.setActiveTool('scissors')
    game.houseActiveTool = 'paper'
    game.compare()

    expect(game.win).toBe(true)

    game.setActiveTool('rock')
    game.houseActiveTool = 'paper'
    game.compare()

    expect(game.win).toBe(false)

    game.setActiveTool('rock')
    game.houseActiveTool = 'scissors'
    game.compare()

    expect(game.win).toBe(true)
  })
})
