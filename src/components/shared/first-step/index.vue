<script setup lang="ts">
import IconTriangle from "@/components/icons/IconTriangle.vue";
import ButtonEl from "@/components/ui/button/index.vue";
import {useGameStore} from "@/stores/game";

const store = useGameStore()

</script>
<template>
  <div :class="$style.wrapper">
    <IconTriangle :class="$style.triangle" />
    <ButtonEl variant="paper" @click="store.setActiveTool('paper')" />
    <ButtonEl variant="scissors" @click="store.setActiveTool('scissors')" />
    <ButtonEl variant="rock" @click="store.setActiveTool('rock')" />
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

  .wrapper > div:last-child {
    grid-column-start: 1;
    grid-column-end: 3;
    margin: auto;
  }

  .triangle {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }

  @media screen and (max-width: 600px) {
    .triangle {
      margin-top: 20px;
    }
  }
</style>