<script setup lang="ts">
import TwoColsText from "./two-cols-text.vue";

const props = defineProps<{
  bgPreset?: "default" | "animate" | "palette";
  codeSize?: "lg" | "sm";
  kahootColors?: boolean;
}>();
</script>

<template>
  <TwoColsText v-bind="props">
    <slot />
    <template #right>
      <slot name="right" />
    </template>
  </TwoColsText>
</template>
