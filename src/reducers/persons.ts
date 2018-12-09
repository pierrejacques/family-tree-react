import { ReduxAction } from 'src/interface/redux'
import { Persons } from 'src/interface/person'

const defaultState: Persons = {}

export default (state: Persons = defaultState, action: ReduxAction<any>): Persons => {
    return state
}
