<script setup>
import LoginRegister from './LoginRegister.vue'

import { defineEmits, defineProps } from 'vue'

const emit = defineEmits(['close'])
const props = defineProps({
  type: {
    type: String,
    required: true
  }
})

const close = () => {
  emit('close')
}
</script>

<template>
    <div class="modal-overlay" @click="close">
        <div class="modal-content" @click.stop>
            <button class="close-button" @click="close">×</button>
            <LoginRegister :type="type" />
        </div>
    </div>
</template>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  opacity: 1;
  transition: opacity 1s;
}

.modal-content {
  background: white;
  /* padding: 20px; */
  border-radius: 8px;
  position: relative;
  opacity: 1;
  transition: opacity 1s;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
}
</style>