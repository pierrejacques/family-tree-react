import { Dispatch } from 'redux'

import { PersonData } from 'src/interface/person'
import ajax from 'src/utils/ajax'

import dataSet from '../persons/set-data'

export default () => () => {
    return (dispatch: Dispatch) => {
        ajax.get('data/latestVersion').then((res) => {
            dispatch(dataSet(res.data.data as PersonData))
        })
    }
}
