import exchangeSelections from './exchange-selections'
import { ReduxState } from '../../interface/redux';
import reducer from '../../reducers/index'

it('should exchange selection correctly', () => {
    const from: ReduxState = {
        persons: {},
        selections: {
            me: 'me',
            current: 'current',
        },
    }
    const to: ReduxState = {
        persons: {},
        selections: {
            me: 'current',
            current: 'me',
        }
    }
    const newState = reducer(from, exchangeSelections())
    expect(newState).toEqual(to)
})
