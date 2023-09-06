<script setup lang="ts">

import {Lesson} from "@/ts/timetable";

defineProps<{
  lesson: Lesson
}>()

</script>

<template>
  <input v-model="lesson.subject" class="border-l w-4/12" type="text">
  <input v-model="lesson.target" class="border-l w-1/12" type="text">
  <input v-model="lesson.teacher" class="border-l w-5/12" type="text">
  <input v-model="lesson.audience" class="border-l w-2/12" type="text">
</template>

<style scoped>
textarea:focus, input:focus{
  outline: none;
}
</style>