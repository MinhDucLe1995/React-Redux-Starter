import * as types from '../constants/actionTypes'

export const decValue = () => {
    return (dispatch) => {
        dispatch({ type: types.DEC_COUNT_VALUE, payload: 1 });
    }
}

export const incValue = () => {
    return (dispatch) => {
        dispatch({ type: types.INC_COUNT_VALUE, payload: 1 });
    }
}