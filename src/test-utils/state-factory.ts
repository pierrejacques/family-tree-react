import createPerson from '../utils/create-person'
import { ReduxState } from '../interface/redux';

export default (count = 5): ReduxState => {
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
