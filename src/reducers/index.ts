import { combineReducers } from 'redux'

import persons from './persons'
import selections from './selections'

export default combineReducers({
    persons,
    selections,
})
