<template>
  <div class="flex relative">
    <div
      v-if="slots.before"
      class="w-10 h-full absolute top-0 left-0 bottom-0 flex justify-center items-center"
    >
      <slot name="before"></slot>
    </div>
    <input
      :value="modelValue"
      :type="type"
      :class="`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
        slots.before ? 'pl-10' : ''
      } ${slots.after ? 'pr-10' : ''} `"
      :placeholder="placeholder"
      @input="handleInput"
    />
    <div
      class="w-10 h-full absolute top-0 right-0 bottom-0 flex justify-center items-center"
    >
      <Icon
        v-if="type == 'password'"
        name="solar:lock-password-bold"
        color="black"
        class="cursor-pointer"
        @click="updateType"
      />
      <Icon
        v-else
        name="solar:lock-password-unlocked-bold"
        color="black"
        class="cursor-pointer"
        @click="updateType"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, useSlots } from "vue";

defineProps({
  placeholder: {
    type: String,
    required: false,
    default: "",
  },
  modelValue: {
    type: String,
    required: false,
    default: "",
  },
});

const type = ref("password");

const emit = defineEmits(["update:modelValue"]);
const slots = useSlots();

const handleInput = (e: any) => {
  emit("update:modelValue", e.target.value);
};

const updateType = () => {
  type.value = type.value === "password" ? "text" : "password";
};
</script>

<style scoped></style>
