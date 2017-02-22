import { addLocaleData } from 'react-intl';
// import react-intl data of supported languages
import en from 'react-intl/locale-data/en';
// import messages of supported locales
import * as enMessages from '../../locales/en';
// import redux actions we listen for
import {
  APPLICATION_LOAD,
  INTL_LOCALE_SELECTED,
} from '../constants';

export const initialState = {
  locale: 'en', // default locale
  locales: ['en'], // add new locales here
  messages: enMessages.messages,
};

// load react-intl datas of supported languages
addLocaleData(en);

/**
* Get localization messages
* @param {string} locale
*/
const getMessages = (locale) => {
  // set messages depending on locale
  switch (locale) {
  case 'en':
  default:
    return enMessages.messages;
  }
};

/**
 * Internatilization
 * State contains info about current locale and all localization messages
 * @param {object} state - current state or initialState
 * @param {object} action - action containing type and payload
 */
export const intl = (state = initialState, action) => {
  switch (action.type) {
  case APPLICATION_LOAD: {
    // pickup saved state data
    let locale = state.locale;
    if (action && action.payload && action.payload.intl) {
      locale = action.payload.intl.locale ? action.payload.intl.locale : locale;
    }
    // always reload localization messages
    const messages = getMessages(locale);
    return {
      ...state,
      locale,
      messages,
    };
  }
  case INTL_LOCALE_SELECTED: {
    // set correct object depending on locale
    const messages = state.messages;
    return {
      ...state,
      locale: getMessages(action.payload),
      messages,
    };
  }
  default:
    return state;
  }
};
