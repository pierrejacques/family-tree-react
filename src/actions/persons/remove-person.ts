import { ReduxAction } from 'src/interface/redux'

export const REMOVE_PERSON = 'REMOVE_PERSON'

export default (id: string): ReduxAction<string> => {
    return {
        type: REMOVE_PERSON,
        value: id,
    }
}
