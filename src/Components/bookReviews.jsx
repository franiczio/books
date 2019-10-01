import React, { Component, Fragment } from 'react';
import SingleReview from './singleReview';
import { ReactReduxContext, connect } from 'react-redux';
import * as reviewActions from '../Actions/reviewAction';
class BooksReviews extends Component {
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
              {this.props.reviews.map((review, i) => (
                <SingleReview
                  history={this.props.history}
                  key={i}
                  id={review['@id']}
                  title={review['title']}
                  isbn={review['isbn']}
                  author={review['author']}
                />
              ))}
            </tbody>
          </table>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return state;
};
const mapActionsToProps = {
  getAllReviews: reviewActions.getAllReviews,
};
export default connect(
  mapStateToProps,
  mapActionsToProps,
)(BooksReviews);
