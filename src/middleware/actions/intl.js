import moment from 'moment';
import store from '../store';
import { INTL_LOCALE_SELECTED } from '../constants';

/**
 * setup moment locale
 * note, this is not actual redux action creator
 * so no dispatch required
 * @param {string} locale
 */
export const setupMoment = (locale) => {
  let momentLocale = locale;
  if (!locale) {
    const state = store.getState();
    if (state.intl && state.intl.locale) {
      momentLocale = state.intl.locale;
    }
  }
  if (locale) {
    moment.locale(momentLocale);
  }
};

/**
 * select application locale
 * @param {string} locale
 */
export const selectLocale = locale => (dispatch) => {
  dispatch({
    type: INTL_LOCALE_SELECTED,
    payload: locale,
  });
  setupMoment(locale);
};

