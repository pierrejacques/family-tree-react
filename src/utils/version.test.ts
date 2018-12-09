import { DiffPatcher } from 'jsondiffpatch'
import createPerson from './create-person'
import version from './version'

const fromState = {
    persons: {
        me: createPerson({ id: 'me' }),
        current: createPerson({ id: 'current' }),
        other: createPerson({ id: 'other' }),
    },
    selections: {
        current: 'current',
        me: 'me',
    },
}

const toState = {
    persons: {
        me: createPerson({ id: 'me' }),
        current: createPerson({ id: 'current' }),
        other: createPerson({ id: 'other' }),
        another: createPerson({ id: 'another' }),
    },
    selections: {
        current: 'me',
        me: 'current',
    },
}

const diffPatcher = new DiffPatcher({
    cloneDiffValues: true,
})

it('should update version correctly', () => {
    version.update(fromState)
    expect(version.lastState).toBe(fromState)
})

it('should patch and unpatch correctly', () => {
    version.update(fromState)
    const { delta } = version.patch(toState)
    expect(
        diffPatcher.patch(
            diffPatcher.clone(fromState),
            delta
        )
    )
    .toEqual(toState)
    expect(
        diffPatcher.unpatch(
            diffPatcher.clone(toState),
            delta
        )
    )
    .toEqual(fromState)
})
