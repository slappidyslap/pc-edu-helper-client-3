<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">

import LessonModel from "@/ts/LessonModel";
import Tooltip from '@adamdehaven/vue-custom-tooltip'
import { toRef } from "vue";

const props = defineProps<{
  lesson: LessonModel
}>()

const lesson = toRef(props, 'lesson')

const emit = defineEmits<{
  changeSubject: [value: string]
  changeTarget: [value: string]
  changeTeacher: [value: string]
  changeAudience: [value: string]
}>()

function onChangeSubject(event: Event) {
  const input = event.target as HTMLInputElement
  emit('changeSubject', input.value.trim())
}

function onChangeTarget(event: Event) {
  const input = event.target as HTMLInputElement
  emit('changeTarget', input.value.trim())
}

function onChangeTeacher(event: Event) {
  const input = event.target as HTMLInputElement
  emit('changeTeacher', input.value.trim())
}

function onChangeAudience(event: Event) {
  const input = event.target as HTMLInputElement
  emit('changeAudience', input.value.trim())
}

</script>

<template>
  <input v-model="lesson.subject" @change="onChangeSubject" class="border-l w-4/12" type="text">
  <input v-model="lesson.target" @change="onChangeTarget" class="border-l w-1/12" type="text">
  <Tooltip :label="lesson.teacherFieldErrorMessage" :style="{ display: 'inline' }">
    <input
      v-model="lesson.teacher"
      @change="onChangeTeacher"
      :class="lesson.isTeacherValid ? 'border-l w-5/12' : 'border-l w-5/12 not-valid-teacher-input'"
      type="text">
  </Tooltip >
  <input v-model="lesson.audience" @change="onChangeAudience" class="border-l w-2/12" type="text">
</template>

<style scoped>
textarea:focus, input:focus{
  outline: none;
}

.not-valid-teacher-input {
  text-decoration: wavy underline hotpink;
}
</style>
