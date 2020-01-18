import ServiceActionTypes from "./service.types";

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

const serviceReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ServiceActionTypes.LOG_COLLECTION_TRIGGER_START:
      console.log("reduce");
      return {
        ...state,
        serviceInfo: action.payload,
        error: null
      };
    case ServiceActionTypes.LOG_COLLECTION_TRIGGER_SUCCESS:
      console.log("reduce_success");
      console.log(state);
      console.log(action.payload);
      return {
        ...state,
        processInfo: action.payload,
        error: null
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
