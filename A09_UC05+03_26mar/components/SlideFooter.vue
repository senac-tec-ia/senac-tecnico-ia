<script setup lang="ts">
import { useNav, useSlideContext, configs } from "@slidev/client";
import { computed, ref } from "vue";
import { useOverflowGuard } from "../composables/useOverflowGuard";

const { currentPage, total } = useNav();
const { $frontmatter } = useSlideContext();

const footerRef = ref<HTMLElement | null>(null);
const { isOverflowing } = useOverflowGuard(footerRef, currentPage);

const author = (configs as any).author ?? "Leonardo Zanini";
const courseTitle = (configs as any).courseTitle ?? (configs as any).title ?? "Técnico em Inteligência Artificial";
const aulaNum = computed(() => ($frontmatter as any)?.aulaNum ?? (configs as any).aulaNum ?? "");
const footerLogo = (configs as any).footerLogo ?? "/assets/senac-logo.png";
</script>

<template>
  <footer ref="footerRef" class="global-footer">
    <div class="footer-left flex items-center gap-2">
      <img :src="footerLogo" class="footer-logo" alt="Logo" />
      <div>{{ courseTitle }}</div>
    </div>
    <div class="footer-center">{{ aulaNum }}</div>
    <div class="footer-right flex items-center gap-4">
      <div>{{ author }}</div>
      <div class="opacity-40">|</div>
      <div>{{ currentPage }} / {{ total }}</div>
    </div>
  </footer>

  <!-- Aviso de overflow — só aparece em dev (npm run dev) -->
  <div v-if="isOverflowing" class="overflow-badge" aria-label="Conteúdo transbordando a altura do slide">
    ⚠️ OVERFLOW — conteúdo ultrapassa a altura do slide
  </div>
</template>

<style scoped>
.global-footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 24px;
  background-color: rgba(0, 0, 0, 0.92);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.25rem;
  font-size: 0.72rem;
  color: rgba(255, 255, 255, 0.55);
  z-index: 100;
  box-shadow: 0 -1px 6px rgba(0, 0, 0, 0.4);
  gap: 0.75rem;
  border-top: 1px solid #2d2d2d;
  line-height: 1;
}

.footer-logo {
  height: 1rem;
  width: auto;
  object-fit: contain;
  opacity: 0.75;
}

.footer-right {
  flex: 0;
  text-align: right;
  white-space: nowrap;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.65);
}

.footer-center {
  flex: 1;
  text-align: center;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

/* ── Overflow guard — só visível em dev ─────────────────────────── */
.overflow-badge {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  background: rgba(239, 68, 68, 0.92);
  color: #fff;
  font-size: 0.7rem;
  font-weight: 700;
  text-align: center;
  padding: 3px 8px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  pointer-events: none;
  border-bottom: 2px solid #dc2626;
}
</style>
