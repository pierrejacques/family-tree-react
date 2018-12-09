import { ReduxAction } from 'src/interface/redux'

export const EXCHANGE_SELECTION = 'EXCHANGE_SELECTION'

export default (): ReduxAction<any> => {
    return {
        type: EXCHANGE_SELECTION,
    }
}
