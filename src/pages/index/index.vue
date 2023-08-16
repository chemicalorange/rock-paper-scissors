<script setup lang="ts">
import Score from '@/components/ui/score/index.vue'
import FirstStep from "@/components/shared/first-step/index.vue";
import SecondStep from "@/components/shared/second-step/index.vue";
import ThirdStep from "@/components/shared/third-step/index.vue"
import { useGameStore } from "@/stores/game";

const store = useGameStore()
</script>

<template>
  <div :class="$style.wrapper">
    <Score />
    <FirstStep v-if="store.step === 1" />
    <SecondStep v-if="store.step === 2" />
    <ThirdStep v-if="store.step === 3" />
  </div>
</template>

<style module>
  .wrapper {
     display: flex;
     align-items: center;
     justify-content: center;
     flex-direction: column;
     min-height: 100vh;
  }
</style>
