import { Person } from 'src/interface/person';
import { ReduxAction } from 'src/interface/redux';

export const SET_PERSON = 'SET_PERSON'

export default (data: Person): ReduxAction<Person> => {
    return {
        type: SET_PERSON,
        reversable: true,
        value: data,
    }
}
