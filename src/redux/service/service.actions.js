import ServiceActionTypes from './service.types';
 
export const addServiceStart = service => ({
    type: ServiceActionTypes.ADD_SERVICE_START,
    payload: service
});

export const addServiceSuccess = service => ({
  type: ServiceActionTypes.ADD_SERVICE_SUCCESS,
  payload: service
});

export const addServiceFailure = service => ({
  type: ServiceActionTypes.ADD_SERVICE_FAILURE,
  payload: service
});

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
