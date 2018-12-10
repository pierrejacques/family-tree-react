import persons from './persons'
import selections from './selections'
import version from '../utils/version'
import history from '../utils/history'
import { ReduxAction, ReduxState } from '../interface/redux';

export default (state: ReduxState, action: ReduxAction<any>) => {
    if (action.isHistoryOperation) {

    }
    const newState = {
        persons: persons(state.persons, action),
        selections: selections(state.selections, action),
    }
    if (action.isVersionOperation) {
        version.update(newState)
    }
    if (action.reversable) {
        history.push(newState)
    }
    return newState
}
