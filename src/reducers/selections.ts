import { ReduxAction } from 'src/interface/redux';
import { PersonSelections } from 'src/interface/person';

const defaultState: PersonSelections = {
    me: '',
    current: '',
}

export default (state: PersonSelections = defaultState, action: ReduxAction<any>): PersonSelections => {
    return state
}
