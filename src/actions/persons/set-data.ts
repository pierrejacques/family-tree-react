import { ReduxAction } from 'src/interface/redux';
import { PersonData } from 'src/interface/person';
export const DATA_SET = 'DATA_SET'

export default (data: PersonData): ReduxAction<PersonData> => {
    return {
        type: DATA_SET,
        value: data,
    }
}
