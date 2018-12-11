import history from './history'
import createPerson from './create-person'
import { ReduxState } from '../interface/redux';

const StateFactory = (count = 5): ReduxState => {
    const persons = {}
    let me = ''
    let current = ''
    for (let i = 0; i < count; i ++) {
        const person = createPerson()
        Reflect.set(persons, person.id, person)
        if (!me) {
            me = person.id
        } else if (!current) {
            current = person.id
        }
    }
    return {
        persons,
        selections: {
            me,
            current,
        }
    }
}

const state1 = StateFactory()
const state2 = StateFactory()
const state3 = StateFactory()
const state4 = StateFactory()
const state5 = StateFactory()

it('should act correctly when initiated', () => {
    expect(history.undo()).toBe(null)
    expect(history.redo()).toBe(null)
})

it('should act correctly when has only one state', () => {
    history.push(state1)
    expect(history.undo()).toEqual(state1)
    expect(history.redo()).toEqual(state1)
})

it('should undo correctly', () => {
    history.push(state2)
    history.push(state3)
    history.push(state4)
    expect(history.undo()).toEqual(state3)
    expect(history.undo()).toEqual(state2)
    expect(history.undo()).toEqual(state1)
})

it('should redo correctly', () => {
    expect(history.redo()).toEqual(state2)
    expect(history.redo()).toEqual(state3)
    expect(history.redo()).toEqual(state4)
    expect(history.redo()).toEqual(state4)
})

it('should undo => edit => redo correctly', () => {
    expect(history.undo()).toEqual(state3)
    expect(history.undo()).toEqual(state2)
    history.push(state5)
    expect(history.redo()).toEqual(state5)
    expect(history.redo()).toEqual(state5)
    expect(history.undo()).toEqual(state2)
})
