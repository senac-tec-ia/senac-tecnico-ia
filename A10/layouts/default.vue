<script setup lang="ts">
import { computed, useAttrs } from "vue";
import SlideBackground from "../components/SlideBackground.vue";
import SlideFooter from "../components/SlideFooter.vue";

defineOptions({
  inheritAttrs: false,
});

const attrs = useAttrs();

const props = withDefaults(
  defineProps<{
    bgPreset?: "default" | "animate" | "palette";
    codeSize?: "lg" | "sm";
    kahootColors?: boolean;
    highContrast?: boolean;
  }>(),
  {
    bgPreset: "default",
    kahootColors: false,
  },
);

const bgOpacity = computed(() =>
  props.bgPreset === "palette" || props.bgPreset === "animate" ? 0.3 : 0.15,
);
</script>

<template>
  <div class="slidev-layout default px-14 py-10 h-full">
    <SlideBackground
      v-bind="attrs"
      :preset="props.bgPreset"
      :x="350"
      :y="150"
      :zoom="4"
      nodeColor="#121212"
      nodeStrokeColor="#37fa10"
      :nodeStrokeWidth="0.1"
      :backgroundOpacity="bgOpacity"
    />
    <div class="content-wrapper">
      <div
        :class="[
          'p-8 rounded-xl',
          props.highContrast
            ? 'bg-slate-900/85 border border-white/30 backdrop-blur-md'
            : 'border border-white backdrop-blur-xl',
          { 'kahoot-mode': props.kahootColors },
        ]"
        :style="props.codeSize ? { '--q-code-fs': props.codeSize === 'sm' ? '1.75rem' : '2rem' } : {}"
      >
        <slot />
      </div>
    </div>
    <SlideFooter />
  </div>
</template>

<style scoped>
.default {
  position: relative;
  padding-bottom: 2rem;
}

.content-wrapper {
  position: relative;
  z-index: 10;
}

/* Título principal */
.content-wrapper :deep(h1) {
  margin-bottom: 2rem;
}

/* Subtítulos */
.content-wrapper :deep(h2) {
  font-size: 1.75rem;
  font-weight: 600;
  margin-top: 2rem;
  margin-bottom: 1rem;
  color: var(--slidev-theme-text-muted);
}

/* Parágrafos */
.content-wrapper :deep(p) {
  font-size: 1.125rem;
  line-height: 1.6;
  color: #e2e8f0;
  margin-bottom: 1rem;
}

/* Listas */
.content-wrapper :deep(ul),
.content-wrapper :deep(ol) {
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.content-wrapper :deep(li) {
  font-size: 1.125rem;
  margin-top: 0.75rem;
  color: #e2e8f0;
}

/* Strong/Bold */
.content-wrapper :deep(strong) {
  font-weight: 700;
  color: #f1f5f9;
}

/* Code blocks */
.content-wrapper :deep(code) {
  background-color: rgba(59, 130, 246, 0.1);
  padding: 0.125rem 0.375rem;
  border-radius: 0.25rem;
  font-size: 0.95em;
}

.content-wrapper :deep(pre) {
  background-color: rgba(15, 23, 42, 0.8);
  padding: 1rem;
  border-radius: 0.5rem;
  margin: 1.5rem 0;
}

/* Kahoot: código grande + alternativas coloridas (props codeSize/kahootColors) */
.kahoot-mode :deep(pre),
.kahoot-mode :deep(pre code) {
  font-size: var(--q-code-fs, 2rem) !important;
  line-height: 1.5;
}

.kahoot-mode :deep(li) {
  font-size: 1.75rem;
  font-weight: 600;
  margin-top: 0.5rem;
}

.kahoot-mode :deep(li:nth-child(1)) {
  color: #facc15;
}

.kahoot-mode :deep(li:nth-child(2)) {
  color: #60a5fa;
}

.kahoot-mode :deep(li:nth-child(3)) {
  color: #4ade80;
}

.kahoot-mode :deep(li:nth-child(4)) {
  color: #f87171;
}

/* Fix: inline code dentro de h1 não recebe fundo escuro */
.content-wrapper :deep(h1 code) {
  background-color: transparent !important;
  color: inherit;
  padding: 0;
}
</style>
