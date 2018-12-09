import { ReduxAction } from '../interface/redux'
import { PersonSelections } from '../interface/person'
import { SET_CURRENT } from '../actions/persons/set-current';
import { REMOVE_PERSON } from '../actions/persons/remove-person';
import { SET_ME } from '../actions/persons/set-me';
import { EXCHANGE_SELECTIONS } from '../actions/persons/exchange-selections';
import { SET_DATA } from '../actions/persons/set-data';

const defaultState: PersonSelections = {
    me: '',
    current: '',
}

export default (state: PersonSelections = defaultState, action: ReduxAction<any>): PersonSelections => {
    const { value, type } = action
    if (type === REMOVE_PERSON) {
        if (action.value === state.current) {
            return {
                me: state.me,
                current: '',
            }
        }
        if (action.value === state.me) {
            return  {
                me: '',
                current: state.current,
            }
        }
    }
    if (type === SET_CURRENT) {
        return {
            me: state.me,
            current: action.value,
        }
    }
    if (type === SET_ME) {
        return {
            me: action.value,
            current: state.current,
        }
    }
    if (type === EXCHANGE_SELECTIONS) {
        return {
            me: state.current,
            current: state.me,
        }
    }
    if (type === SET_DATA) {
        return value.selections
    }
    return state
}
