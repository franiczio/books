import React, { Component, Fragment } from 'react';
import SingleReview from '../ReviewComponents/singleReview';
import { ReactReduxContext, connect } from 'react-redux';
import * as reviewActions from '../../Actions/reviewAction';
import axios from 'axios';

class BooksReviews extends Component {
  constructor(props) {
    super(props);
    this.showReviewsState = this.showReviewsState.bind(this);
    this.getAllReviewsFromThisBook = this.getAllReviewsFromThisBook.bind(this);
  }

  showReviewsState = () => {
    this.getAllReviewsFromThisBook();
  };

  getAllReviewsFromThisBook() {
    var id = window.location.href.split('/')[4];
    if (id.slice(-1) === '?') {
      id = id.substring(0, id.length - 1);
    }
    axios.get('https://demo.h88.dev/reviews/').then(resp => {
      var respTable = resp.data['hydra:member'];
      let thisBookReviews = [];
      respTable.forEach(element => {
        if (element['book']['@id'].split('/')[2] === id) {
          thisBookReviews.push(element);
        }
      });
      this.props.getAllReviews(thisBookReviews);
    });
  }
  componentDidMount() {
    this.props.resetReviews();
    this.getAllReviewsFromThisBook();
  }

  render() {
    if (this.props.reviews.length === 0) {
      return <Fragment></Fragment>;
    } else {
      return (
        <Fragment>
          <div>
            <h1 onClick={this.showReviewsState}>REVIEWS</h1>
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
                    body={review['body']}
                    rating={review['rating']}
                    author={review['author']}
                    publicationDate={review['publicationDate']}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </Fragment>
      );
    }
  }
}

const mapStateToProps = state => {
  return state;
};
const mapActionsToProps = {
  resetReviews: reviewActions.resetAllReviews,
  getAllReviews: reviewActions.getAllReviews,
};
export default connect(
  mapStateToProps,
  mapActionsToProps,
)(BooksReviews);
