import { ReduxAction } from '../../interface/redux';

export const UNDO = 'UNDO'

export default (): ReduxAction<null> => {
    return {
        type: UNDO,
        isHistoryOperation: true,
    }
}
