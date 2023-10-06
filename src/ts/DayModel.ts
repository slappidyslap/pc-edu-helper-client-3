import ClassModel from "./ClassModel"

export default class DayModel {
    private readonly _dayOfWeek: string
    private readonly _classes: Tuple<ClassModel, 8>

    private constructor(name: string) {
        this._dayOfWeek = name
        this._classes = [ClassModel.empty(), ClassModel.empty(), ClassModel.empty(), ClassModel.empty(), ClassModel.empty(), ClassModel.empty(), ClassModel.empty(), ClassModel.empty()]
    }

    public get classes(): ClassModel[] { return this._classes }

    public get dayOfWeek(): string { return this._dayOfWeek }

    public static ofWeek(name: string): DayModel { return new DayModel(name) }

}