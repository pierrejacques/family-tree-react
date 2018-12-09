import setPerson from './set-person'
import reducer from '../../reducers/index'
import createPerson from '../../utils/create-person';

const from = {
    persons: {
        me: createPerson({ id: 'me' }),
        current: createPerson({ id: 'current' }),
        original: createPerson({ id: 'original' }),
    },
    selections: {
        me: 'me',
        current: 'current',
    }
}

it('should set new person correctly', () => {
    const newPerson = createPerson()
    const newState = reducer(from, setPerson(newPerson))
    expect(newState.persons[newPerson.id]).toBe(newPerson)
})

it('should modify existed person correctly', () => {
    const newPerson = createPerson({ id: 'original' })
    const newState = reducer(from, setPerson(newPerson))
    expect(newState.persons['original']).toBe(newPerson)
})
