import removePerson from './remove-person'
import createPerson from '../../utils/create-person';

import { ReduxState } from '../../interface/redux';
import reducer from '../../reducers/index'

const me = createPerson({ id: 'me' })
const current = createPerson({ id: 'current' })
const other = createPerson({ id: 'other' })
const from: ReduxState = {
    persons: { me, current, other, },
    selections: {
        me: 'me',
        current: 'current',
    },
}

it('should remove me correctly', () => {
    const removeMeState = reducer(from, removePerson('me'))
    expect(removeMeState).toEqual({
        persons: { current, other },
        selections: {
            me: '',
            current: 'current',
        },
    })
})

it('should remove current correctly', () => {
    const removeCurrentState = reducer(from, removePerson('current'))
    expect(removeCurrentState).toEqual({
        persons: { me, other },
        selections: {
            me: 'me',
            current: '',
        }
    })
})

it('should remove other correctly', () => {
    const removeOtherState = reducer(from, removePerson('other'))
    expect(removeOtherState).toEqual({
        persons: { me, current },
        selections: {
            me: 'me',
            current: 'current',
        }
    })
})
