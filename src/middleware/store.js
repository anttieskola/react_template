import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './reducers';
import { STORE_STATE_INIT, STORE_STATE_LOAD } from './constants';
import { applicationInit } from './actions';

// define name for redux store state in browsers localstorage
const STATE_NAME = 'state';

/**
 * Saves application state (from all reducers) into localStorage.
 * @param {store} s
 */
const saveState = (s) => {
  const state = s.getState();
  const stateJson = JSON.stringify(state);
  localStorage.setItem(STATE_NAME, stateJson);
};

/**
 * Loads application state from localstorage
 * @returns {any} - store as object or null
 */
const loadState = () => {
  const savedState = localStorage.getItem(STATE_NAME);
  if (saveState) {
    return JSON.parse(savedState);
  }
  return null;
};

/**
 * Application middleware for redux
 */
const applicationMiddleware = s => next => (action) => {
  const at = action.type;
  LOG(`REDUX ACTION ${at}`);
  if (at === STORE_STATE_INIT) {
    let savedState;
    try {
        // check state from storage
      savedState = loadState();
    } catch (e) {
      LOG(e);
    }
    if (savedState) {
      LOG('REDUX LOADING STATE');
        // dispatch loading event
      Promise.resolve(s.dispatch({
        type: STORE_STATE_LOAD,
        payload: savedState,
      })).then(() => {
        applicationInit(s);
      });
    } else {
      applicationInit(s);
    }
  } else if (at !== STORE_STATE_LOAD) {
    // run action's reducers
    // add try catch here if we use multiple reducers to detect hard to find errors
    const r = next(action);
    // save state
    saveState(s);
    return r;
  }
  return next(action);
};

/**
 * Configure redux store
 */
const configureStore = () => {
  const s = createStore(rootReducer, applyMiddleware(thunk, applicationMiddleware));
  if (module.hot) {
    // Enable Webpack hot module replacement for reducer
    module.hot.accept(rootReducer, () => {
      s.replaceReducer(rootReducer);
    });
  }
  return s;
};

// create and export store
const Store = configureStore();
export default Store;

// fire application initialize event
Store.dispatch({ type: STORE_STATE_INIT });
