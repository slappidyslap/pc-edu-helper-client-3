<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import ClassModel from "@/ts/ClassModel";
import {ref} from "vue";
import Lesson from "@/components/Lesson.vue";
import type { LessonMetaData, ClassMetaData } from "@/ts/types"

const props = defineProps<{
  clazz: ClassModel,
  id: number
}>()

const emit = defineEmits<{
  changeSubject: [data: ClassMetaData]
  changeTarget: [data: ClassMetaData]
  changeTeacher: [data: ClassMetaData]
  changeAudience: [data: ClassMetaData]
}>()

const isHasSecondLesson = ref(false)

function onChangeSubject(data: LessonMetaData) {
  emit("changeSubject", {
    value: data.value,
    lessonId: data.lessonId,
    classId: props.id
  })
}

function onChangeTarget(data: LessonMetaData) {
  emit("changeTarget", {
    value: data.value,
    lessonId: data.lessonId,
    classId: props.id
  })
}

function onChangeTeacher(data: LessonMetaData) {
  emit("changeTeacher", {
    value: data.value,
    lessonId: data.lessonId,
    classId: props.id
  })
}

function onChangeAudience(data: LessonMetaData) {
  emit("changeAudience", {
    value: data.value,
    lessonId: data.lessonId,
    classId: props.id
  })
}

</script>

<template>
  <div class="flex">
    <div class="cursor-pointer border-l border-b flex items-center"
         @click="isHasSecondLesson = !isHasSecondLesson">
      <div class="text-center w-5">{{ id + 1 }}</div>
    </div>
    <div class="flex-col">
      <div class="inline-block border-b">
        <Lesson
          :lesson="props.clazz.firstLesson"
          @change-subject="v => onChangeSubject({value: v, lessonId: 1})"
          @change-target="v => onChangeTarget({value: v, lessonId: 1})"
          @change-teacher="v => onChangeTeacher({value: v, lessonId: 1})"
          @change-audience="v => onChangeAudience({value: v, lessonId: 1})"/>
      </div>
      <div class="inline-block border-b" v-show="isHasSecondLesson">
        <Lesson
          :lesson="props.clazz.secondLesson"
          @change-subject="v => onChangeSubject({value: v, lessonId: 2})"
          @change-target="v => onChangeTarget({value: v, lessonId: 2})"
          @change-teacher="v => onChangeTeacher({value: v, lessonId: 2})"
          @change-audience="v => onChangeAudience({value: v, lessonId: 2})"/>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
