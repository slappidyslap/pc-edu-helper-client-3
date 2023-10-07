<script setup lang="ts">

import useTimetableStore from "@/stores/timetable";
import GroupModel from "@/ts/GroupModel";
import Class from "@/components/Class.vue";
import type { ClassMetaData } from "@/ts/types";

const timetableStore = useTimetableStore();
timetableStore.addGroup(GroupModel.withName("ПКС 3-21"))
timetableStore.addGroup(GroupModel.withName("ПКС 2-21"))
timetableStore.addGroup(GroupModel.withName("КС 2-21"))

function onChangeSubject(data: ClassMetaData, dayOfWeek: string, groupName: string) {
  console.log('пук')
}

function onChangeTarget(data: ClassMetaData, dayOfWeek: string, groupName: string) {
  console.log('пук')
}

function onChangeTeacher(data: ClassMetaData, dayOfWeek: string, groupName: string) {
  timetableStore.insertTeacherRecord({
    value: data.value,
    lessonId: data.lessonId,
    classId: data.classId,
    dayOfWeek,
    groupName
  })
}

function onChangeAudience(data: ClassMetaData, dayOfWeek: string, groupName: string) {
  console.log('пук')
}

</script>

<template>
  <div class="grid grid-cols-3 gap-3">
    <template v-for="group in timetableStore.data.groups" :key="group.name">
      <div class="flex-col border">
        <div class="text-center font-bold">
          {{ group.name }}
        </div>
        <div class="flex-col border">
          <template v-for="day in group.days" :key="day">
            <div class="flex border-t">
              <div class="flex items-center justify-center w-1/12 align-bottom">
                {{ day.dayOfWeek }}
              </div>
              <div class="flex-col w-11/12">
                <template v-for="(clazz, id) in day.classes" :key="id">
                  <Class
                    :id="id"
                    :clazz="clazz"
                    @change-subject="data => onChangeSubject(data, day.dayOfWeek, group.name)"
                    @change-target="data => onChangeTarget(data, day.dayOfWeek, group.name)"
                    @change-teacher="data => onChangeTeacher(data, day.dayOfWeek, group.name)"
                    @change-audience="data => onChangeAudience(data, day.dayOfWeek, group.name)"/>
                </template>
              </div>
            </div>
          </template>
        </div>
      </div>
    </template>
  </div>
</template>

<style scoped lang="scss">
</style>