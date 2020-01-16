import ServiceActionTypes from './service.types';

export const logCollectionTriggerStart = serviceInfo => ({
    type: ServiceActionTypes.LOG_COLLECTION_TRIGGER_START,
    payload: serviceInfo
});

export const logCollectionTriggerSuccess = serviceInfo => ({
    type: ServiceActionTypes.LOG_COLLECTION_TRIGGER_SUCCESS,
    payload: serviceInfo
  });
  
  export const logCollectionTriggerFailure = errorMessage => ({
    type: ServiceActionTypes.LOG_COLLECTION_TRIGGER_FAILURE,
    payload: errorMessage
  });

export const logCollectionStop = () => ({
    type: ServiceActionTypes.LOG_COLLECTION_STOP
});

export const logCollectionReset = () => ({
    type: ServiceActionTypes.LOG_COLLECTION_RESET
});
