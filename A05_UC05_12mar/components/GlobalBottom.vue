<script setup lang="ts">
import { ref } from "vue";

// Tamanhos disponíveis em rem — botões ciclam entre eles
const sizes = [0.72, 0.80, 0.85, 0.92, 1.00, 1.10, 1.20];
const currentIndex = ref(2); // 0.85rem é o padrão

function setSize(index: number) {
  currentIndex.value = index;
  const size = sizes[index];
  document.documentElement.style.setProperty("--code-font-size", `${size}rem`);
}

function increase() {
  if (currentIndex.value < sizes.length - 1) setSize(currentIndex.value + 1);
}

function decrease() {
  if (currentIndex.value > 0) setSize(currentIndex.value - 1);
}

function reset() {
  setSize(2); // volta ao padrão 0.85rem
}
</script>

<template>
  <div class="code-font-controls" title="Tamanho da fonte do código">
    <button
      class="ctrl-btn"
      :disabled="currentIndex === 0"
      @click="decrease"
      title="Diminuir fonte do código"
    >−</button>
    <span class="ctrl-label" @click="reset" title="Resetar para padrão">
      {{ sizes[currentIndex].toFixed(2) }}
    </span>
    <button
      class="ctrl-btn"
      :disabled="currentIndex === sizes.length - 1"
      @click="increase"
      title="Aumentar fonte do código"
    >+</button>
  </div>
</template>

<style scoped>
.code-font-controls {
  position: fixed;
  bottom: 2.6rem;   /* acima do footer do Slidev */
  right: 0.9rem;
  z-index: 9999;
  display: flex;
  align-items: center;
  gap: 0.2rem;
  background: rgba(15, 23, 42, 0.85);
  border: 1px solid rgba(99, 102, 241, 0.4);
  border-radius: 8px;
  padding: 0.25rem 0.45rem;
  backdrop-filter: blur(6px);
  font-family: "IBM Plex Mono", monospace;
  font-size: 0.72rem;
  color: #a5b4fc;
  opacity: 0.35;
  transition: opacity 0.2s;
  user-select: none;
}

.code-font-controls:hover {
  opacity: 1;
}

.ctrl-btn {
  background: transparent;
  border: none;
  color: #a5b4fc;
  font-size: 0.9rem;
  line-height: 1;
  cursor: pointer;
  padding: 0.1rem 0.3rem;
  border-radius: 4px;
  transition: background 0.15s, color 0.15s;
}

.ctrl-btn:hover:not(:disabled) {
  background: rgba(99, 102, 241, 0.25);
  color: #fff;
}

.ctrl-btn:disabled {
  opacity: 0.25;
  cursor: not-allowed;
}

.ctrl-label {
  min-width: 2.8rem;
  text-align: center;
  cursor: pointer;
  padding: 0.1rem 0.2rem;
  border-radius: 4px;
  transition: background 0.15s;
}

.ctrl-label:hover {
  background: rgba(99, 102, 241, 0.2);
}
</style>
