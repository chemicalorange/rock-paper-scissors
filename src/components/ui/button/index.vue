<script lang="ts" setup>
import IconRock from "@/components/icons/IconRock.vue";
import IconPaper from "@/components/icons/IconPaper.vue";
import IconScissors from "@/components/icons/IconScissors.vue";
import type { Variant } from "@/stores/types";


defineProps<{
  variant: Variant
}>()

</script>
<template>
  <div :class="[$style.button, $style[variant]]">
    <div :class="$style.buttonContainer">
      <IconRock v-if="variant === 'rock'" :class="$style.icon" />
      <IconPaper v-if="variant === 'paper'" :class="$style.icon" />
      <IconScissors v-if="variant === 'scissors'" :class="$style.icon" />
    </div>
  </div>
</template>
<style module>
  .button {
    width: 160px;
    height: 150px;
    border-radius: 200px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    cursor: pointer;
    box-shadow: 0px 15px 5px -5px hsl(237, 49%, 15%);
  }

  @media screen and (max-width: 600px) {
    .button {
      width: 140px;
      height: 130px;
    }
  }

  .button:active {
    box-shadow: 0px 10px 5px -5px hsl(237, 49%, 15%);
  }

  .button::after, .button::before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    border-radius: 200px;
    top: 0;
    left: 0;
  }

  .button::after {
    top: 8px;
  }

  .button::before {
    z-index: 1;
  }

  .rock.button::before {
    background: var(--rock-gradient);
  }

  .rock.button::after {
    background: var(--rock-shadow);
  }

  .rock.button:active::after {
    background: var(--rock-active);
  }

  .paper.button::before {
    background: var(--paper-gradient);
  }

  .paper.button::after {
    background: var(--paper-shadow);
  }

  .paper.button:active::after {
    background: var(--paper-active);
  }

  .scissors.button::before {
    background: var(--scissors-gradient);
  }

  .scissors.button::after {
    background: var(--scissors-shadow);
  }

  .scissors.button:active::after {
    background: var(--scissors-active);
  }

  .button:active::after {
    top: 4px;
  }

  .buttonContainer {
    width: 75%;
    height: 75%;
    border-radius: 200px;
    z-index: 2;
    position: relative;
    transform: translateY(-3px);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .buttonContainer::before, .buttonContainer::after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    border-radius: 200px;
    top: 0;
    left: 0;
    background: var(--color-btn-inner-shadow);
  }

  .buttonContainer::before {
    z-index: 1;
    background: var(--color-text);
    top: 6px;
  }

  .button:active .buttonContainer::before {
    top: 2px;
  }

  .icon {
    position: relative;
    z-index: 2;
  }

  .button:active .icon {
    transform: translateY(-2px);
  }
</style>
