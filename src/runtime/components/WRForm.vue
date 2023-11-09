<template>
  <form :id="id" class="w-full h-full p-2 flex flex-col space-y-2">
    <slot />
  </form>
</template>

<script setup lang="ts">
defineProps({
  id: {
    type: String,
    required: false,
    default: "",
  },
});
</script>
