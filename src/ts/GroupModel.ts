import type {Tuple} from '@/ts/types'
import DayModel from './DayModel'

export default class GroupModel {
    private readonly _name: string
    private readonly _days: Tuple<DayModel, 6>

    private constructor(name: string) {
        this._name = name
        this._days = [
            /*DayModel.ofWeek("Понедельник"), DayModel.ofWeek("Вторник"), DayModel.ofWeek("Среда"),
            DayModel.ofWeek("Четверг"), DayModel.ofWeek("Пятница"), DayModel.ofWeek("Суббота")*/
            DayModel.ofWeek("ПН"), DayModel.ofWeek("ВТ"), DayModel.ofWeek("СР"),
            DayModel.ofWeek("ЧТ"), DayModel.ofWeek("ПТ"), DayModel.ofWeek("СБ")
        ]
    }

    public get days(): DayModel[] {
        return this._days
    }

    public get name(): string {
        return this._name
    }

    public static withName(name: string): GroupModel { return new GroupModel(name) }

}
