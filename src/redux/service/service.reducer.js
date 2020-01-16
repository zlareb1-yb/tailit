import ServiceActionTypes from './service.types';

const INITIAL_STATE = {
  pcIP: null,
  username: null,
  password: null,
  serviceName: null,
  pid: null,
  logFileLink: null,
  error: null
};

const serviceReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ServiceActionTypes.LOG_COLLECTION_TRIGGER_START:
      console.log("hh")
      return {
        ...state,
        service_info: action.payload,
        error: null
      };
    case ServiceActionTypes.LOG_COLLECTION_STOP:
      return {
        ...state,
        service_info: INITIAL_STATE,
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
