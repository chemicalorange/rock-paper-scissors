<script setup lang="ts">
import ButtonEl from "@/components/ui/button/index.vue"
import { onMounted } from "vue"
import { useGameStore } from "@/stores/game"
const store = useGameStore()

onMounted(() => {
  setTimeout(() => {
    store.setHouseActiveTool()
    store.compare()
  }, 1000)
})
</script>
<template>
  <div :class="$style.wrapper">
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
</template>
<style module>
  .wrapper {
    display: flex;
    gap: 60px;
  }

  @media screen and (max-width: 600px) {
    .wrapper {
      gap: 40px;
    }
  }

  .column {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    flex-shrink: 0;
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

  @media screen and (max-width: 600px) {
    .house {
      margin-top: 5px;
    }
  }
</style>