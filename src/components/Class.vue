<script setup lang="ts">
import type {Class} from "@/ts/timetable";
import {ref} from "vue";
import Lesson from "@/components/Lesson.vue";

const props = defineProps<{
  clazz: Class,
  id: number
}>()

const isHasSecondLesson = ref(false)

</script>

<template>
  <div class="flex">
    <div class="cursor-pointer border-l border-b flex items-center"
         @click="isHasSecondLesson = !isHasSecondLesson">
      <div class="text-center w-5">{{ id + 1 }}</div>
    </div>
    <div class="flex-col">
      <div class="inline-block border-b">
        <Lesson :lesson="props.clazz.firstLesson"/>
      </div>
      <div class="inline-block border-b" v-show="isHasSecondLesson">
        <Lesson :lesson="props.clazz.secondLesson"/>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>