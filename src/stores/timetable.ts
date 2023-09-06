import { defineStore } from 'pinia'
import {Group, TimetableSchema} from '@/ts/timetable'

export const useTimetableStore = defineStore('timetable', () => {
    const data: TimetableSchema = TimetableSchema.empty()

    function addGroup(group: Group) {
        data.groups.push(group)
    }

    return { data, addGroup }
})
