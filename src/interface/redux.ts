import { PersonData } from './person'

export interface ReduxState extends PersonData {

}

export interface ReduxAction<T> {
    type: string
    reversable?: boolean
    value?: T
}

export interface RootReducer {
    (state: ReduxState, action: ReduxAction<any>): ReduxState
}
