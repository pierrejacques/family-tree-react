import { ReduxAction } from '../../interface/redux'

export const SET_CURRENT = 'SET_CURRENT'

export default (currentId: string): ReduxAction<string> => {
    return {
        type: SET_CURRENT,
        value: currentId,
    }
}
