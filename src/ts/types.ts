import LessonModel from '@/ts/LessonModel'

export type Tuple<
    T,
    N extends number,
    R extends T[] = []
> = number extends N
    ? T[]
    : R['length'] extends N
        ? R
        : Tuple<T, N, [T, ...R]>;

export type LessonMetaData = {
    value: string
    lessonId: number
}

export type ClassMetaData = {
    classId: number
} & LessonMetaData

export type NewRecordData = {
    dayOfWeek: string
    groupName: string
} & ClassMetaData

export type GroupNameToLesson = {
    groupNames: Set<string>
    lessons: Array<LessonModel>
}
