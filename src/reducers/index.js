import { combineReducers } from 'redux';
import dataReducer from './reducer_data';

const rootReducer = combineReducers({
  ebayData : dataReducer
});

export default rootReducer;
