<script setup lang="ts">
import { computed, nextTick, onMounted, ref, useAttrs } from "vue";
import SlideBackground from "../components/SlideBackground.vue";
import SlideFooter from "../components/SlideFooter.vue";

defineOptions({
  inheritAttrs: false,
});

const attrs = useAttrs();

const props = withDefaults(
  defineProps<{
    bgPreset?: "default" | "animate" | "palette";
    codeSize?: "lg" | "sm" | "xs";
    kahootColors?: boolean;
  }>(),
  {
    bgPreset: "default",
    kahootColors: false,
  },
);

const bgOpacity = computed(() =>
  props.bgPreset === "palette" || props.bgPreset === "animate" ? 0.3 : 0.2,
);

const headerRef = ref<HTMLElement | null>(null);
const leftRef = ref<HTMLElement | null>(null);

const moveHeader = () => {
  if (!headerRef.value || !leftRef.value) return;

  const left = leftRef.value;

  // Move o primeiro H1 (título) para o header
  const title = left.querySelector("h1");
  if (title) headerRef.value.appendChild(title);
};

onMounted(async () => {
  await nextTick();
  moveHeader();
});
</script>

<template>
  <div
    class="slidev-layout two-cols-text h-full flex justify-center items-center relative"
  >
    <SlideBackground
      v-bind="attrs"
      :preset="props.bgPreset"
      :x="400"
      :y="400"
      :zoom="2"
      nodeColor="#121212"
      nodeStrokeColor="#37fa10"
      :backgroundOpacity="bgOpacity"
    />

    <div
      class="bg-slate-900/85 rounded-[14px] border border-white/30 backdrop-blur-md relative z-10 h-full p-8 max-w-4xl max-h-md"
      :style="props.codeSize ? { '--q-code-fs': props.codeSize === 'xs' ? '1.25rem' : props.codeSize === 'sm' ? '1.75rem' : '2rem' } : {}"
      :class="{ 'kahoot-mode': props.kahootColors }"
    >
      <div ref="headerRef" class="two-cols-text-header"></div>

      <div class="two-cols-text-grid justify-center flex">
        <div ref="leftRef" class="col-left content-wrapper">
          <slot />
        </div>

        <div class="col-right content-wrapper">
          <slot name="right" />
        </div>
      </div>
    </div>

    <SlideFooter />
  </div>
</template>

<style scoped>
.two-cols-text {
  position: relative;
  padding-bottom: 2rem;
}

.two-cols-text-header {
  position: relative;
  z-index: 10;
  margin-bottom: 1.25rem;
}

.two-cols-text-grid {
  position: relative;
  z-index: 10;
  height: calc(100% - 3rem);
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: 2rem;
}

.content-wrapper {
  min-width: 0;
}

/* Header (título/subtítulo compartilhados) */
.two-cols-text-header :deep(h1) {
  margin: 0 0 0.5rem;
}

.two-cols-text-header :deep(p),
.two-cols-text-header :deep(h2) {
  font-size: 1.4rem;
  font-weight: 600;
  margin: 0;
  color: var(--slidev-theme-text-muted);
}

.two-cols-text-header :deep(strong) {
  font-weight: 800;
  color: #f1f5f9;
}

/* Colunas */
.content-wrapper :deep(h2) {
  font-size: 1.5rem;
  font-weight: 600;
  margin-top: 8px;
  margin-bottom: 8px;
  color: var(--slidev-theme-text-muted);
}

.content-wrapper :deep(p) {
  font-size: 1rem;
  line-height: 1.5;
  color: #e2e8f0;
}

.content-wrapper :deep(ul),
.content-wrapper :deep(ol) {
  margin-top: 8px;
}

.content-wrapper :deep(li) {
  font-size: 1rem;
  margin-top: 8px;
  color: #e2e8f0;
}

.vs-divider {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  font-weight: 700;
  color: #94a3b8;
}

/* Kahoot: código grande + alternativas coloridas (props codeSize/kahootColors) */
.kahoot-mode .content-wrapper :deep(pre),
.kahoot-mode .content-wrapper :deep(pre code) {
  font-size: var(--q-code-fs, 2rem) !important;
  line-height: 1.5;
}

.kahoot-mode .col-right :deep(li) {
  font-size: 1.75rem;
  font-weight: 600;
  margin-top: 0.5rem;
}

.kahoot-mode .col-right :deep(li:nth-child(1)) {
  color: #facc15; /* Amarelo - A */
}

.kahoot-mode .col-right :deep(li:nth-child(2)) {
  color: #60a5fa; /* Azul - B */
}

.kahoot-mode .col-right :deep(li:nth-child(3)) {
  color: #4ade80; /* Verde - C */
}

.kahoot-mode .col-right :deep(li:nth-child(4)) {
  color: #f87171; /* Vermelho - D */
}

/* Fix: inline code dentro do h1 não recebe fundo escuro */
.two-cols-text-header :deep(code) {
  background: transparent !important;
  color: inherit;
  padding: 0;
}
</style>
