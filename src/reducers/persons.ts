import { ReduxAction } from '../interface/redux'
import { Persons } from '../interface/person'

import { SET_DATA } from '../actions/persons/set-data'
import { SET_PERSON } from '../actions/persons/set-person'
import { REMOVE_PERSON } from '../actions/persons/remove-person'

const defaultState: Persons = {}

export default (state: Persons = defaultState, action: ReduxAction<any>): Persons => {
    const { type, value } = action
    if (type === SET_PERSON) {
        return Object.assign({}, state, {
            [value.id]: value
        })
    }
    if (type === REMOVE_PERSON) {
        const newState = Object.assign({}, state)
        Reflect.deleteProperty(newState, value)
        return newState
    }
    if (type === SET_DATA) {
        return value.persons
    }
    return state
}
