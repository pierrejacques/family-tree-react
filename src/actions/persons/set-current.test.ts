import setCurrent from './set-current'
import reducer from '../../reducers'

it('should set current correctly', () => {
    expect(
        reducer({
            persons: {},
            selections: {
                me: '',
                current: '',
            },
        }, setCurrent('current'))
    ).toEqual({
        persons: {},
        selections: {
            me: '',
            current: 'current',
        }
    })
})
