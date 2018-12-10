import { ReduxAction } from '../../interface/redux';

export const REDO = 'REDO'

export default (): ReduxAction<null> => {
    return {
        type: REDO,
        isHistoryOperation: true,
    }
}
