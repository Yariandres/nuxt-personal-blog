<script setup>
const props = defineProps({
  author: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: "info",
  },
});
const formattedDate = computed(() => {
  return new Date(props.date).toDateString();
});
</script>

<template>
  <div>
    <span>{{ author }}</span>
    <span>{{ formattedDate }}</span>
  </div>
</template>