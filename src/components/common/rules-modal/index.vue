<script setup lang="ts">
import IconClose from '@/components/icons/IconClose.vue'
import IconRules from '@/components/icons/IconRules.vue'

const props = defineProps<{
  isOpen: Boolean
  closeModal?: Function
}>()

const handleClose = () => {
  props.closeModal && props.closeModal()
}
</script>
<template>
  <div v-if="props.isOpen" :class="$style.backdrop" @click="handleClose">
    <div :class="$style.popup" @click.stop>
      <IconClose :class="$style.close" @click="handleClose" />
      <h2 :class="$style.title">Rules</h2>
      <IconRules :class="$style.rules" />
    </div>
  </div>
</template>
<style module>
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.47);
  z-index: 100;
  display: flex;
  justify-content: center;
}

.popup {
  background: var(--color-text);
  max-width: 400px;
  height: fit-content;
  width: 100%;
  display: grid;
  padding: 20px 0 50px;
}

@media screen and (max-width: 600px) {
  .popup {
    height: 100%;
    align-content: start;
  }
}

@media screen and (min-width: 600px) {
  .popup {
    margin-top: 30px;
    border-radius: 12px;
  }
}

.close {
  margin-left: auto;
  margin-right: 20px;
  cursor: pointer;
}

.title {
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 30px;
  color: var(--color-dark-blue);
}

.rules {
  margin: 0 auto;
  transform: scale(0.9);
}
</style>
