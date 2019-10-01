import React, { Component, Fragment } from 'react';
import BookReview from '../BookComponents/bookReview';
class BookReviewSite extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Fragment>
        <BookReview history={this.props.history} />
      </Fragment>
    );
  }
}

export default BookReviewSite;
