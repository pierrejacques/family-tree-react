import { ReduxAction } from 'src/interface/redux';

export const SET_ME = 'SET_ME'

export default (meId: string): ReduxAction<string> => {
    return {
        type: SET_ME,
        value: meId,
    }
}
