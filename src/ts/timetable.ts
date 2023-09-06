import type {Tuple} from '@/ts/types'

export class Lesson {

    private readonly _subject: string
    private readonly _target: string
    private readonly _teacher: string
    private readonly _audience: string

    private constructor() {
        this._subject = ""
        this._target = ""
        this._teacher = ""
        this._audience = ""
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

    public static empty(): Lesson {
        return new Lesson()
    }

}

export class Class {
    private readonly _firstLesson: Lesson
    private readonly _secondLesson: Lesson

    private constructor() {
        this._firstLesson = Lesson.empty()
        this._secondLesson = Lesson.empty()
    }
    get firstLesson(): Lesson {
        return this._firstLesson;
    }

    get secondLesson(): Lesson {
        return this._secondLesson;
    }

    public static empty(): Class { return new Class() }

}

export class Day {
    private readonly _dayOfWeek: string
    private readonly _classes: Tuple<Class, 8>

    private constructor(name: string) {
        this._dayOfWeek = name
        this._classes = [Class.empty(), Class.empty(), Class.empty(), Class.empty(), Class.empty(), Class.empty(), Class.empty(), Class.empty()]
    }

    public get classes(): Class[] { return this._classes }

    public get dayOfWeek(): string { return this._dayOfWeek }

    public static ofWeek(name: string): Day { return new Day(name) }

}

export class Group {
    private readonly _name: string
    private readonly _days: Tuple<Day, 6>

    private constructor(name: string) {
        this._name = name
        this._days = [
            /*Day.ofWeek("Понедельник"), Day.ofWeek("Вторник"), Day.ofWeek("Среда"),
            Day.ofWeek("Четверг"), Day.ofWeek("Пятница"), Day.ofWeek("Суббота")*/
            Day.ofWeek("ПН"), Day.ofWeek("ВТ"), Day.ofWeek("СР"),
            Day.ofWeek("ЧТ"), Day.ofWeek("ПТ"), Day.ofWeek("СБ")
        ]
    }

    public get days(): Day[] {
        return this._days
    }

    public get name(): string {
        return this._name
    }

    public static withName(name: string): Group { return new Group(name) }

}

export class TimetableSchema {
    private readonly _groups: Group[]

    private constructor() {
        this._groups = []
    }

    public get groups() { return this._groups }

    public static empty(): TimetableSchema {
        return new TimetableSchema()
    }
}
