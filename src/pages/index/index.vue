<script setup lang="ts">
import Score from '@/components/ui/score/index.vue'
import FirstStep from '@/components/shared/first-step/index.vue'
import SecondStep from '@/components/shared/second-step/index.vue'
import ThirdStep from '@/components/shared/third-step/index.vue'
import RulesModal from '@/components/common/rules-modal/index.vue'
import { useGameStore } from '@/stores/game'
import { ref } from 'vue'

const store = useGameStore()

const getResult = () => {
  setTimeout(() => {
    store.setHouseActiveTool()
    store.compare()
  }, 1000)
}

const isOpen = ref(false)

const close = () => {
  isOpen.value = false
}

const open = () => {
  isOpen.value = true
}
</script>
<template>
  <div :class="$style.wrapper">
    <Score />
    <FirstStep v-if="store.step === 1" :get-result="getResult" />
    <SecondStep v-if="store.step === 2" />
    <ThirdStep v-if="store.step === 3" />
    <button :class="$style.button" @click="open">Rules</button>
    <RulesModal :is-open="isOpen" :close="close" />
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

.button {
  margin-top: 20px;
  background: transparent;
  border: 1px solid var(--color-text);
  color: var(--color-text);
  border-radius: 8px;
  padding: 10px 50px;
  font-size: 13px;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
}

@media screen and (max-width: 800px) {
  .button {
    margin-top: 40px;
  }
}
</style>
