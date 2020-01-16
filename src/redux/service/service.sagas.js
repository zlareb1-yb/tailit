import { takeEvery, call, put, all } from 'redux-saga/effects';

import { logCollectionTriggerSuccess, logCollectionTriggerFailure } from './service.actions';

import ServiceActionTypes from './service.types';

import end_points from '../../constants/end_points';

// API URL for starting tail process

export function* logCollectionTriggerAsync(action){
    try{
        const serviceInfo = yield action.payload;
        const pcIP = serviceInfo['pcIP']
        const username = serviceInfo['username']
        const password = serviceInfo['password']
        const serviceName = serviceInfo['serviceName']
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ pcIP, username, password, serviceName })
        };
        const res = yield fetch(end_points['log_collection_trigger'], requestOptions);
        yield put(logCollectionTriggerSuccess(res))
    } catch(error){
        yield put(logCollectionTriggerFailure(error.message));
    }
}

export function* logCollectionTriggerStart() {
    yield takeEvery(ServiceActionTypes.LOG_COLLECTION_TRIGGER_START, logCollectionTriggerAsync)
}

export function* serviceSagas() {
    yield all([call(logCollectionTriggerStart)]);
}
