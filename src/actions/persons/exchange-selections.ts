import { ReduxAction } from 'src/interface/redux'

export const EXCHANGE_SELECTIONS = 'EXCHANGE_SELECTIONS'

export default (): ReduxAction<any> => {
    return {
        type: EXCHANGE_SELECTIONS,
    }
}
