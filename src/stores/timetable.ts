import { defineStore } from 'pinia'
import TimetableSchema from '@/ts/TimetableSchema'
import GroupModel from '@/ts/GroupModel'
import type { NewRecordData, GroupNameToLesson } from '@/ts/types'
import LessonModel from '@/ts/LessonModel'
import { reactive } from 'vue'
import ClassModel from '@/ts/ClassModel'
import DayModel from '@/ts/DayModel'

const useTimetableStore = defineStore('timetable', () => {
    const data = reactive(TimetableSchema.empty())

    function addGroup(group: GroupModel) {
        data.groups.push(group)
    }

    function insertTeacherRecord(recordData: NewRecordData) {
        /* const sourceGroup = data.groups.filter(g => g.name === recordData.groupName)[0]
        const sourceClass = sourceGroup.days.filter(day => day.dayOfWeek === recordData.dayOfWeek)[0].classes[recordData.classId]
        let sourceLesson = null as LessonModel | null
        if (recordData.lessonId === 1) sourceLesson = sourceClass.firstLesson as LessonModel | null
        else sourceLesson = sourceClass.secondLesson as LessonModel | null */

        const classesMap = new Map<string, GroupNameToLesson>()
        for (const group of data.groups) {
            const day = group.days.filter(day => day.dayOfWeek === recordData.dayOfWeek)[0] as DayModel
            const clazz = day.classes[recordData.classId] as ClassModel

            if (clazz.firstLesson.teacher.trim() !== '') {
                if (classesMap.has(clazz.firstLesson.teacher)) {
                    const pair = classesMap.get(clazz.firstLesson.teacher)
                    pair?.groupNames.add(group.name)
                    pair?.lessons.push(clazz.firstLesson)
                } else {
                    const groupNames = new Set([group.name])
                    const lessons = [clazz.firstLesson]
                    const pair: GroupNameToLesson = { groupNames, lessons }
                    classesMap.set(clazz.firstLesson.teacher, pair)
                }
            }
            if (clazz.secondLesson.teacher.trim() !== '') {
                if (classesMap.has(clazz.secondLesson.teacher)) {
                    const pair = classesMap.get(clazz.secondLesson.teacher)
                    pair?.groupNames.add(group.name)
                    pair?.lessons.push(clazz.secondLesson)
                } else {
                    const groupNames = new Set([group.name])
                    const lessons = [clazz.secondLesson]
                    const pair: GroupNameToLesson = { groupNames, lessons }
                    classesMap.set(clazz.secondLesson.teacher, pair)
                }
            }

            for (const {groupNames, lessons} of classesMap.values()) {
                if (lessons.length == 1) {
                    lessons.forEach(l => l.isTeacherValid = true)
                } else {
                    lessons.forEach(l => l.isTeacherValid = false)
                }
            }
        }
    }

    return { data, addGroup, insertTeacherRecord }
})

export default useTimetableStore