import React, { PropTypes, Component } from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router';
import { injectIntl } from 'react-intl';

// component properties
const propTypes = {
  // react-intl injection
  intl: PropTypes.object.isRequired,
  // react properties
  children: PropTypes.element.isRequired,
};

// component properties default values
const defaultProps = {
  // react-intl injection
  intl: null,
  // react properties
  children: null,
};

/**
 * Root component holds every other view, component...
 * @export
 * @class Root
 * @extends {React.Component}
 */
export class Root extends Component {
  /**
   * component render
   */
  render() {
    return (
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">
                {this.props.intl.formatMessage({ id: 'navbar_brand' })}
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse />
        </Navbar>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}
// define component properties and default values
Root.propTypes = propTypes;
Root.defaultProps = defaultProps;

// export component as default with redux connection and intl injection
export default injectIntl(Root);
