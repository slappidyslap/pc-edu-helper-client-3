<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">

import LessonModel from "@/ts/LessonModel";

const props = defineProps<{
  lesson: LessonModel
}>()

</script>

<template>
  <input v-model="props.lesson.subject" class="border-l w-4/12" type="text">
  <input v-model="props.lesson.target" class="border-l w-1/12" type="text">
  <input v-model="props.lesson.teacher" class="border-l w-5/12" type="text">
  <input v-model="props.lesson.audience" class="border-l w-2/12" type="text">
</template>

<style scoped>
textarea:focus, input:focus{
  outline: none;
}
</style>@/ts/TimetableSchema