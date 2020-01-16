import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import serviceReducer from './service/service.reducer';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  service: serviceReducer
});

export default persistReducer(persistConfig, rootReducer);
