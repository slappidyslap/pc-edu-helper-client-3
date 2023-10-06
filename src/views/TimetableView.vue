<script setup lang="ts">

import useTimetableStore from "@/stores/timetable";
import GroupModel from "@/ts/GroupModel";
import Class from "@/components/Class.vue";

const timetableStore = useTimetableStore();
timetableStore.addGroup(GroupModel.withName("ПКС 3-21"))
timetableStore.addGroup(GroupModel.withName("ПКС 2-21"))
timetableStore.addGroup(GroupModel.withName("КС 2-21"))

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
                  <Class :id="id" :clazz="clazz"/>
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