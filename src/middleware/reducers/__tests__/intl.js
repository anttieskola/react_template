// Importing listened actions
import {
  APPLICATION_LOAD,
  INTL_LOCALE_SELECTED,
} from '../../constants';

// Import reducer
import { initialState, intl } from '../intl';
// Import english messages
import * as enMessages from '../../../locales/en';

// Test cases
describe('intl reducer', () => {
  it('initial state', () => {
    expect(intl(undefined, {}))
      .toEqual({
        ...initialState,
      });
  });

  it('APPLICATION_LOAD', () => {
    const action = {
      type: APPLICATION_LOAD,
      payload: {
        intl: {
          locale: 'en',
          messages: { this: 'should be refreshed' },
        },
      },
    };
    expect(intl(undefined, action))
      .toEqual({
        ...initialState,
        locale: 'en',
        messages: enMessages.messages,
      });
  });

  it('INTL_LOCALE_SELECTED', () => {
    const action = {
      type: INTL_LOCALE_SELECTED,
      payload: 'en',
    };
    expect(intl(undefined, action))
      .toEqual({
        ...initialState,
        locale: 'en',
        messages: enMessages.messages,
      });
  });
});
