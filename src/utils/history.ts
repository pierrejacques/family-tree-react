import { DiffPatcher, Delta } from 'jsondiffpatch'

import { ReduxState } from '../interface/redux';

const diffPatcher = new DiffPatcher({
    cloneDiffValues: true,
})

const patches: Delta[] = []
let currentState: ReduxState = null
let pointer: number = -1

export default {
    push(newState: ReduxState) {
        if (pointer < 0) {
            pointer = 0
        } else {
            patches.splice(pointer)
            patches.push(
                diffPatcher.diff(currentState, newState)
            )
            pointer++
        }
        currentState = newState
    },
    undo(): ReduxState {
        if (pointer > 0) {
            pointer --
            const patch = patches[pointer]
            const lastState = diffPatcher.clone(currentState)
            currentState = diffPatcher.unpatch(lastState, patch)
        }
        return currentState
    },
    redo(): ReduxState {
        if (patches.length && patches.length > pointer) {
            const patch = patches[pointer]
            const nextState = diffPatcher.clone(currentState)
            currentState = diffPatcher.patch(nextState, patch)
            pointer ++
        }
        return currentState
    },
}
