import GroupModel from "./GroupModel"

export default class TimetableSchema {
    private readonly _groups: GroupModel[]

    private constructor() {
        this._groups = []
    }

    public get groups() { return this._groups }

    public static empty(): TimetableSchema {
        return new TimetableSchema()
    }
}
