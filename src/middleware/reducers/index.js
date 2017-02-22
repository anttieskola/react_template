import { combineReducers } from 'redux';
import { intl } from './intl';

// root reducer containing all others
export const rootReducer = combineReducers({
  intl,
});

export default rootReducer;
