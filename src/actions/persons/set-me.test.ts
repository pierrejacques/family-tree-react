import setMe from './set-me'
import reducer from '../../reducers'

it('should set me correctly', () => {
    expect(
        reducer({
            persons: {},
            selections: {
                me: '',
                current: '',
            },
        }, setMe('me'))
    ).toEqual({
        persons: {},
        selections: {
            me: 'me',
            current: '',
        }
    })
})
