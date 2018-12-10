import { DiffPatcher, Delta } from 'jsondiffpatch'

import { ReduxState, ReduxAction } from '../interface/redux';
import { REDO } from '../actions/history/redo';
import { UNDO } from '../actions/history/undo';

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
            pointer++
            patches.splice(pointer)
            patches.push(
                diffPatcher.diff(currentState, newState)
            )
        }
        currentState = newState
    },
    reduce(action: ReduxAction<null>): ReduxState {
        if (action.type === REDO) {
            return this.redo()
        }
        if (action.type === UNDO) {
            return this.undo()
        }
        return currentState
    },
    undo(): ReduxState {
        if (pointer > 0) {
            pointer --
            const patch = patches[pointer]
            const newState = diffPatcher.clone(currentState)
            return diffPatcher.unpatch(newState, patch)
        }
        return currentState
    },
    redo(): ReduxState {
        if (patches.length > pointer + 1) {
            const patch = patches[pointer]
            const newState = diffPatcher.clone(currentState)
            pointer ++
            return diffPatcher.patch(newState, patch)
        }
        return currentState
    },
}
