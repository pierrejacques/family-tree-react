import { Dispatch } from 'redux';

import { PersonData } from 'src/interface/person';
import ajax from 'src/utils/ajax'

import dataSet from '../persons/set-data'

export default () => {
    return (dispatch: Dispatch) => {
        ajax('latestTree').then((res) => {
            dispatch(dataSet(res as PersonData))
        })
    }
}
