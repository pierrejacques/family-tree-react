import createPerson from './create-person'

it('should create different ids', () => {
    const set = new Set()
    const weakSet = new WeakSet()
    for (let i = 0; i < 10000; i ++) {
        const person = createPerson()
        const { id } = person
        expect(weakSet.has(person)).toBe(false)
        expect(set.has(id)).toBe(false)
        weakSet.add(person)
        set.add(id)
    }
})
