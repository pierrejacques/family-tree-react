import persons from './persons'
import selections from './selections'
import version from '../utils/version'
import { ReduxAction, ReduxState } from '../interface/redux';

let historyStates = []

export default (state: ReduxState, action: ReduxAction<any>) => {
    const newState = {
        persons: persons(state.persons, action),
        selections: selections(state.selections, action),
    }
    if (action.reset) {
        historyStates = [newState]
        version.update(newState)
    }
    if (action.reversable) {
        historyStates.push(newState)
    }
    return newState
}
