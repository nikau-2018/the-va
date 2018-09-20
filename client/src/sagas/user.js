import { call, put, takeLatest } from 'redux-saga/effects';

import { REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_ERROR, registerUser } from '../actions/register'

const apiCallRegisterUser = (userData) => {
    console.log(userData);// here sould be api request to backend
}

function* register({ payload }) {
    try {
        const response = yield call(apiCallRegisterUser, payload)

        yield put({
            type: REGISTER_SUCCESS,
            payload: response,
        })
    } catch (error) {
        yield put({
            type: REGISTER_ERROR,
            payload: error,
        })   
    }
}

export default [
    takeLatest(REGISTER_REQUEST, register),
];
