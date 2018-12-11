import redo from './redo'
import undo from './undo'
import setData from '../persons/set-data'
import reducer from '../../reducers'
import StateFactory from '../../test-utils/state-factory'

const state1 = StateFactory()
const state2 = StateFactory()
const state3 = StateFactory()

it('should undo & redo correcly', () => {
    expect(reducer(state1, setData(state2))).toEqual(state2)
    expect(reducer(state2, setData(state3))).toEqual(state3)
    expect(reducer(state3, undo())).toEqual(state2)
    expect(reducer(state2, redo())).toEqual(state3)
})
