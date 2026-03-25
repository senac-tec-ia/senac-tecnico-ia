import { ref, onMounted, onBeforeUnmount, type Ref } from "vue";

/**
 * Detecta quando o conteúdo de um slide ultrapassa a altura do `.slidev-layout`.
 * O Typescript é contornado castando `import.meta` para any.
 *
 * @param anchorRef - qualquer elemento dentro do `.slidev-layout` a monitorar.
 *                    Normalmente o próprio footer ou content-wrapper.
 */
export function useOverflowGuard(anchorRef: Ref<HTMLElement | null>) {
  const isOverflowing = ref(false);

  // Cast para any para evitar o erro "Property 'env' does not exist on type 'ImportMeta'"
  if (!(import.meta as any).env?.DEV) return { isOverflowing };

  let observer: ResizeObserver | null = null;

  const check = () => {
    const el = anchorRef.value;
    if (!el) return;
    const slide = el.closest(".slidev-layout") as HTMLElement | null;
    if (!slide) return;
    // scrollHeight > clientHeight significa que o conteúdo transbordou
    isOverflowing.value = slide.scrollHeight > slide.clientHeight;
  };

  onMounted(() => {
    const el = anchorRef.value;
    if (!el) return;
    const slide = el.closest(".slidev-layout") as HTMLElement | null;
    if (!slide) return;

    observer = new ResizeObserver(check);
    observer.observe(slide);
    // também observa mudanças internas (v-click, conteúdo dinâmico)
    observer.observe(el);
    check();
  });

  onBeforeUnmount(() => observer?.disconnect());

  return { isOverflowing };
}
