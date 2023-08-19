// stores/counter.spec.ts
import { beforeEach, describe, expect, it } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'

import { useGameStore } from '@/stores/game'
import { Variant } from '@/stores/types'

describe('Game Store', () => {
  beforeEach(() => {
    // creates a fresh pinia and make it active so it's automatically picked
    // up by any useStore() call without having to pass it to it:
    // `useStore(pinia)`
    setActivePinia(createPinia())
  })

  it('compare tools', () => {
    const game = useGameStore()

    game.setActiveTool(Variant.Scissors)
    game.houseActiveTool = Variant.Rock
    game.compare()

    expect(game.win).toBe(false)

    game.setActiveTool(Variant.Scissors)
    game.houseActiveTool = Variant.Paper
    game.compare()

    expect(game.win).toBe(true)

    game.setActiveTool(Variant.Rock)
    game.houseActiveTool = Variant.Paper
    game.compare()

    expect(game.win).toBe(false)

    game.setActiveTool(Variant.Rock)
    game.houseActiveTool = Variant.Scissors
    game.compare()

    expect(game.win).toBe(true)
  })
})
