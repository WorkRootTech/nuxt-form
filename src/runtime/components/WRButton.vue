<template>
  <button
    :type="type"
    class="flex justify-center items-center space-x-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
  >
    <slot name="before"></slot>
    <div>
      <slot />
    </div>
    <slot name="before"></slot>
  </button>
</template>

<script setup lang="ts">
import type { PropType } from "vue";

defineProps({
  type: {
    type: String as PropType<"button" | "submit" | "reset">,
    default: "button",
    validator: (prop: Type) => ["button", "submit", "reset"].includes(prop),
  },
});
</script>
