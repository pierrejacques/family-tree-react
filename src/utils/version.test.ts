import { DiffPatcher } from 'jsondiffpatch'
import version from './version'
import StateFactory from '../test-utils/state-factory'

const fromState = StateFactory()
const toState = StateFactory()

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
