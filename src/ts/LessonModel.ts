export default class LessonModel {

    private _subject: string
    private _target: string
    private _teacher: string
    private _audience: string
    private _isTeacherValid: boolean

    private constructor() {
        this._subject = ""
        this._target = ""
        this._teacher = ""
        this._audience = ""
        this._isTeacherValid = true
    }

    set subject(value: string) {
        this._subject = value
    }

    set target(value: string) {
        this._target = value
    }

    set teacher(value: string) {
        this._teacher = value
    }
    
    set audience(value: string) {
        this._audience = value
    }

    get subject(): string {
        return this._subject;
    }

    get target(): string {
        return this._target;
    }

    get teacher(): string {
        return this._teacher;
    }

    get audience(): string {
        return this._audience;
    }

    get isTeacherValid(): boolean {
        return this._isTeacherValid
    }
    set isTeacherValid(value: boolean) {
        this._isTeacherValid = value
    }

    public static empty(): LessonModel {
        return new LessonModel()
    }

}