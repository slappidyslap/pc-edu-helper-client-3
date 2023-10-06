import { defineStore } from 'pinia'
import TimetableSchema from '@/ts/TimetableSchema'
import GroupModel from '@/ts/GroupModel'

const useTimetableStore = defineStore('timetable', () => {
    const data: TimetableSchema = TimetableSchema.empty()

    function addGroup(group: GroupModel) {
        data.groups.push(group)
    }

    return { data, addGroup }
})

export default useTimetableStore