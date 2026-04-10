<script setup lang="ts">
import { computed } from 'vue'
import { configs } from '@slidev/client'

// `unlock` permite sobrescrever explicitamente com ISO 8601 (ex: '2026-04-11T15:00').
// Se omitido, deriva de `aulaDate` + `unlockHour` definidos no frontmatter global.
const props = defineProps<{
  unlock?: string
}>()

const TOKEN_KEY = 'lms_admin_jwt'

function getCookie(name: string): string {
  const match = document.cookie.split('; ').find(r => r.startsWith(name + '='))
  return match ? decodeURIComponent(match.split('=')[1]) : ''
}

function decodePayload(token: string): Record<string, unknown> | null {
  try {
    const part = token.split('.')[1]
    if (!part) return null
    const b64 = part.replace(/-/g, '+').replace(/_/g, '/')
    return JSON.parse(atob(b64))
  } catch {
    return null
  }
}

const isAdmin = computed(() => {
  const token = getCookie(TOKEN_KEY)
  if (!token) return false
  const payload = decodePayload(token)
  if (!payload) return false
  if (payload['role'] !== 'admin') return false
  if (typeof payload['exp'] === 'number' && Date.now() / 1000 > payload['exp']) return false
  return true
})

const unlockTime = computed(() => {
  if (props.unlock) return props.unlock
  const date = (configs as any).aulaDate as string | undefined
  if (!date) return ''
  const hour = String((configs as any).unlockHour ?? 13).padStart(2, '0')
  return `${date}T${hour}:00`
})

const isUnlocked = computed(() => {
  if (!unlockTime.value) return false
  return Date.now() >= new Date(unlockTime.value).getTime()
})

const visible = computed(() => isAdmin.value || isUnlocked.value)
</script>

<template>
  <slot v-if="visible" />
</template>
