import { PersonData } from 'src/interface/person'
import { ReduxAction } from 'src/interface/redux'

export const SET_DATA = 'SET_DATA'

export default (data: PersonData): ReduxAction<PersonData> => {
    return {
        type: SET_DATA,
        reversable: true,
        isVersionOperation: true,
        value: data,
    }
}
