import setData from './set-data'
import reducer from '../../reducers/index'
import createPerson from '../../utils/create-person';

it('should set data correctly', () => {
    const me = createPerson()
    const current = createPerson()
    const persons = { me, current }
    const selections = {
        me: me.id,
        current: current.id,
    }
    const newState = reducer(
        {
            persons: {},
            selections: {
                me: '',
                current: '',
            }
        },
        setData({
            persons,
            selections,
        })
    )
    expect(newState.persons).toBe(persons)
    expect(newState.selections).toBe(selections)
})
