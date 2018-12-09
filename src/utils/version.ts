import { DiffPatcher, Delta } from 'jsondiffpatch'
import * as hash from 'object-hash'
import { ReduxState } from 'src/interface/redux';

interface StatePatch {
    delta: Delta
    fromHash: string
    toHash: string
}

const hashState = (state: ReduxState): string => hash(
    state,
    {
        algorithm: 'md5',
        encoding: 'base64',
    }
)

const diffPatcher = new DiffPatcher({
    cloneDiffValues: true,
})

export default {
    lastState: null,
    lastHash: '',
    update(newState: ReduxState) {
        this.lastState = newState
        this.lastHash = hashState(newState)
    },
    patch(newState: ReduxState): StatePatch {
        return {
            delta: diffPatcher.diff(this.lastState, newState),
            fromHash: this.lastHash,
            toHash: hashState(newState),
        }
    },
}
