import React, { Component, Fragment } from 'react';
import BookReview from '../Components/bookReview';
class BookReviewSite extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Fragment>
        <BookReview />
      </Fragment>
    );
  }
}

export default BookReviewSite;
