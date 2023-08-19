<script setup lang="ts">
import { useGameStore } from '@/stores/game'

const store = useGameStore()
</script>
<template>
  <div :class="$style.wrapper">
    <h1 :class="$style.title">Rock<br />paper<br />scissors<br />lizard<br />spock</h1>
    <div :class="$style.score">
      <h2>Score</h2>
      <span :class="$style.scoreNumber">
        {{ store.score }}
      </span>
    </div>
  </div>
</template>
<style module>
.wrapper {
  width: 100%;
  max-width: 500px;
  display: flex;
  justify-content: space-between;
  border: 3px solid var(--color-header-outline);
  border-radius: 12px;
  padding: 10px 20px;
  margin-top: 20px;
  margin-bottom: 10px;
}

.title {
  line-height: 120%;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  color: var(--color-text);
}

.score {
  background: var(--color-text);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100px;
}

.score h2 {
  color: var(--color-score-text);
  text-transform: uppercase;
  font-size: 12px;
}

.scoreNumber {
  font-size: 30px;
  color: var(--color-dark-text);
  font-weight: bold;
  line-height: 100%;
}
</style>
