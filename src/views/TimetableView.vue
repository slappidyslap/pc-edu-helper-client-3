<script setup lang="ts">

import {useTimetableStore} from "@/stores/timetable";
import {Group, Day} from '@/ts/timetable'
import {onMounted, ref} from "vue";
import Class from "@/components/Class.vue";

const timetableStore = useTimetableStore();
const isHasSecondLesson = ref(false)
timetableStore.addGroup(Group.withName("ПКС 3-21"))
timetableStore.addGroup(Group.withName("ПКС 2-21"))
timetableStore.addGroup(Group.withName("КС 2-21"))

</script>

<template>
  <div class="grid grid-cols-3 gap-3">
    <template v-for="group in timetableStore.data.groups">
      <div class="flex-col border">
        <div class="text-center font-bold">
          {{ group.name }}
        </div>
        <div>
          <template v-for="day in group.days" class="flex-col border">
            <div class="flex border-t">
              <div class="flex items-center justify-center w-1/12 align-bottom">
                {{ day.dayOfWeek }}
              </div>
              <div class="flex-col w-11/12">
                <template v-for="(clazz, id) in day.classes">
                  <Class :id="id" :clazz="clazz"/>
                </template>
              </div>
            </div>
          </template>
        </div>
      </div>
    </template>
  </div>
  <input type="text"/>
</template>

<style scoped lang="scss">
</style>