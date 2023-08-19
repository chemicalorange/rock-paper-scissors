<script setup lang="ts">
import IconTriangle from '@/components/icons/IconPentagon.vue'
import ButtonEl from '@/components/ui/button/index.vue'
import { useGameStore } from '@/stores/game'
import { Variant } from '@/stores/types'

const store = useGameStore()

const props = defineProps({
  getResult: Function
})
const handleClick = (variant: Variant) => {
  store.setActiveTool(variant)
  props.getResult()
}
</script>
<template>
  <div :class="$style.wrapper">
    <IconTriangle :class="$style.triangle" />
    <ButtonEl :variant="Variant.Scissors" @click="handleClick(Variant.Scissors)" />
    <ButtonEl :variant="Variant.Spock" @click="handleClick(Variant.Spock)" />
    <ButtonEl :variant="Variant.Paper" @click="handleClick(Variant.Paper)" />
    <ButtonEl :variant="Variant.Lizard" @click="handleClick(Variant.Lizard)" />
    <ButtonEl :variant="Variant.Rock" @click="handleClick(Variant.Rock)" />
  </div>
</template>
<style module>
.wrapper {
  display: grid;
  position: relative;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  align-content: center;
  gap: 50px;
}

@media screen and (max-width: 600px) {
  .wrapper {
    gap: 30px;
  }
}

.wrapper > div:first-of-type {
  grid-column-start: 1;
  grid-column-end: 3;
  margin: auto;
  transform: translateY(20px);
}

.wrapper > div:nth-of-type(2) {
  transform: translateX(-44px);
}

.wrapper > div:nth-of-type(3) {
  transform: translateX(44px);
}

.triangle {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

@media screen and (max-width: 600px) {
  .triangle {
    margin-top: 20px;
  }
}
</style>
