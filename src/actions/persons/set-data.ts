import { PersonData } from 'src/interface/person';
import { ReduxAction } from 'src/interface/redux';

export const DATA_SET = 'DATA_SET'

export default (data: PersonData): ReduxAction<PersonData> => {
    return {
        type: DATA_SET,
        value: data,
    }
}
