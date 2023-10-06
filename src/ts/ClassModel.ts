import LessonModel from "./LessonModel"

export default class ClassModel {
    private readonly _firstLesson: LessonModel
    private readonly _secondLesson: LessonModel

    private constructor() {
        this._firstLesson = LessonModel.empty()
        this._secondLesson = LessonModel.empty()
    }
    get firstLesson(): LessonModel {
        return this._firstLesson;
    }

    get secondLesson(): LessonModel {
        return this._secondLesson;
    }

    public static empty(): ClassModel { return new ClassModel() }

}