import React, { Component, Fragment } from 'react';
import Review from '../Components/review';
class ReviewSite extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Fragment>
        <Review history={this.props.history} />
      </Fragment>
    );
  }
}

export default ReviewSite;
