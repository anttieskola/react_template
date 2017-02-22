import { connect } from 'react-redux';
import { IntlProvider } from 'react-intl';

// map intl settings for react-intl from redux state
const mapStateToProps = state => ({
  locale: state.intl.locale,
  messages: state.intl.messages,
});

// connect redux state props to IntlProvider component
export default connect(mapStateToProps)(IntlProvider);
