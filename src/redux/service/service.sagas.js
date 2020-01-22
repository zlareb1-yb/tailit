import { takeEvery, call, put, all } from 'redux-saga/effects';

import { logCollectionTriggerSuccess, logCollectionTriggerFailure, addServiceSuccess, addServiceFailure } from './service.actions';

import ServiceActionTypes from './service.types';

import end_points from '../../constants/end_points';

// API URL for starting tail process

export function* addServiceStartAsync(action){
    try{
        const service = action.payload;
        
        console.log('pp')
        console.log(service)
        const uuid = service ? Object.keys(service).length: 0;
        yield put(addServiceSuccess({uuid}))
    } catch(error){
        yield put(addServiceFailure({uuid: action.payload.uuid, error: error.message}))
    }
}

export function* logCollectionTriggerAsync(action){
    try{
        console.log('saga')
        
        const serviceInfo = action.payload;

        const ip = serviceInfo['ip']
        const username = serviceInfo['username']
        const password = serviceInfo['password']
        const logPath = serviceInfo['logPath']
        const uuid = serviceInfo['uuid']
        /*
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ pcIP, username, password, serviceName })
        };
        */
        //const res = yield fetch(end_points['log_collection_trigger'], requestOptions);
        yield put(logCollectionTriggerSuccess({uuid, fileLink: 'https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_link_target', pid: 123}))
    } catch(error){
        yield put(logCollectionTriggerFailure(error.message));
    }
}

export function* addServiceStart() {
    yield takeEvery(ServiceActionTypes.ADD_SERVICE_START, addServiceStartAsync)
}

export function* logCollectionTriggerStart() {
    yield takeEvery(ServiceActionTypes.LOG_COLLECTION_TRIGGER_START, logCollectionTriggerAsync)
}

export function* serviceSagas() {
    yield all([call(addServiceStart), call(logCollectionTriggerStart)]);
}
