import React, { Component, Fragment } from 'react';
import SingleReview from './singleReview';
class BookReviews extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Fragment>
        <div>
          <table>
            <thead>
              <tr>
                <th>body</th>
                <th>rating</th>
                <th>author</th>
                <th>publicationDate</th>
              </tr>
            </thead>
            <tbody>
              <SingleReview />
              <SingleReview />
              <SingleReview />
              <SingleReview />
            </tbody>
          </table>
        </div>
      </Fragment>
    );
  }
}

export default BookReviews;
