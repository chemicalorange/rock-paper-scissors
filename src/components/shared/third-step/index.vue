<script setup lang="ts">
import ButtonEl from "@/components/ui/button/index.vue";
import { onMounted } from "vue";
import { useGameStore } from "@/stores/game";
const store = useGameStore()

onMounted(() => {
  store.setHouseActiveTool()
})
</script>
<template>
  <div :class="$style.wrapper">
    <div :class="$style.row">
      <div :class="$style.column">
        <h3>You picked</h3>
        <ButtonEl :variant="store.activeTool" />
      </div>
      <div :class="$style.column">
        <h3>The house picked</h3>
        <div v-if="!store.houseActiveTool" :class="$style.house"></div>
        <ButtonEl v-if="store.houseActiveTool" :variant="store.houseActiveTool" />
      </div>
    </div>
    <div :class="$style.again">
      <span>{{store.win ? 'You win' : 'You lose'}}</span>
      <button @click="store.playAgain()" >Play again</button>
    </div>
  </div>
</template>
<style module>
  .row {
    display: flex;
    gap: 60px;
  }

  @media screen and (max-width: 600px) {
    .row {
      gap: 40px;
    }
  }

  .column {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
  }

  .column h3 {
    color: var(--color-text);
    text-transform: uppercase;
    text-align: center;
  }

  .house {
    width: 120px;
    height: 120px;
    background: var(--color-dark-blue);
    border-radius: 120px;
    margin-top: 15px;
    opacity: 0.6;
  }

  .again {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .again span {
    text-transform: uppercase;
    font-size: 30px;
    font-weight: bold;
    color: var(--color-text);
  }

  .again button {
    background: var(--color-text);
    color: var(--color-dark-blue);
    padding: 10px 60px;
    border: none;
    border-radius: 8px;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-top: 10px;
    cursor: pointer;
  }
</style>