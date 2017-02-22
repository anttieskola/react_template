import React from 'react';
import { Col } from 'react-bootstrap';

/**
 * Index view
 * @export
 * @class Index
 * @extends {React.Component}
 */
export class Index extends React.Component {
  constructor(props) {
    super(props);
  }
  /**
   * mounted to dom
   * @memberOf Index
   */
  componentDidMount() {
  }
  /**
   * new properties
   * @param {any} nextProps
   * @memberOf Index
   */
  componentWillReceiveProps(nextProps) {
  }
  /**
   * component render
   * @returns
   * @memberOf Index
   */
  render() {
    return (
      <Col xs={12}>
        <p>index view</p>
      </Col>
    );
  }
}

export default Index;
