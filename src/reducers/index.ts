import persons from './persons'
import selections from './selections'
import version from '../utils/version'
import history from '../utils/history'
import { ReduxAction, ReduxState } from '../interface/redux';
import { REDO } from '../actions/history/redo';
import { UNDO } from '../actions/history/undo';

export default (state: ReduxState, action: ReduxAction<any>) => {
    if (action.isHistoryOperation) {
        if (action.type === REDO) {
            return history.redo()
        }
        if (action.type === UNDO) {
            return history.undo()
        }
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
