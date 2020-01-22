import ServiceActionTypes from "./service.types";

/*
const INITIAL_STATE = {
    serviceInfo: {
      ip: null,
      username: null,
      password: null,
      logPath: null
    },
    processInfo: {
      fileLink: null,
      pid: null
    },
  error: null
};
*/

const INITIAL_STATE = {

}

const serviceReducer = (state = INITIAL_STATE, action) => {
  const uuid = action.payload ? [action.payload.uuid]: null;
  console.log('jj')
  console.log(action.payload);
  console.log(action.type);
  switch (action.type) {
    case ServiceActionTypes.ADD_SERVICE_START:
      return {
        ...state,
        serviceList: {...state.serviceList, [uuid]: {error: null}}
      };
    case ServiceActionTypes.ADD_SERVICE_SUCCESS:
      return {
        ...state,
        serviceList: {...state.serviceList, [uuid]: {serviceInfo: {}, processInfo: {}, error: null}}
      };
    case ServiceActionTypes.ADD_SERVICE_FAILURE:
      return {
        ...state,
        serviceList: {...state.serviceList, [uuid]: {serviceInfo: {}, processInfo: {}, error: action.payload.error}}
      };
    case ServiceActionTypes.LOG_COLLECTION_TRIGGER_START:
      return {
        ...state,
        serviceList: {...state.serviceList, [uuid]: {serviceInfo: action.payload, error: null}}
      };
    case ServiceActionTypes.LOG_COLLECTION_TRIGGER_SUCCESS:
      return {
        ...state,
        serviceList: {...state.serviceList, [uuid]: {...state.serviceList[uuid], processInfo: action.payload, error: null}}
      };
    case ServiceActionTypes.LOG_COLLECTION_TRIGGER_FAILURE:
      return {
        ...state,
        serviceList: {...state.serviceList, [uuid]: {...state.serviceList[uuid], error: action.payload}}
      };
    case ServiceActionTypes.LOG_COLLECTION_STOP:
      return {
        ...state,
        serviceInfo: INITIAL_STATE.serviceInfo,
        error: null
      };
    case ServiceActionTypes.LOG_COLLECTION_RESET:
      return {
        ...state,
        currentUser: INITIAL_STATE,
        error: null
      };
    default:
      return state;
  }
};

export default serviceReducer;
