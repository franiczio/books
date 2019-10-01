import React, { Component, Fragment } from 'react';
import * as bookActions from '../../Actions/bookAction';
import * as reviewActions from '../../Actions/reviewAction';
import { ReactReduxContext, connect } from 'react-redux';
import axios from 'axios';

class SingleReview extends Component {
  constructor(props) {
    super(props);
    this.deleteReviewFromServer = this.deleteReviewFromServer.bind(this);
  }

  deleteReviewFromServer = () => {
    let getPath = 'https://demo.h88.dev' + this.props.id;
    axios.delete(getPath).then(resp => {});
    this.props.resetReview(this.props.id);
  };

  render() {
    return (
      <Fragment>
        <tr>
          <td>{this.props.body}</td>
          <td>{this.props.rating}</td>
          <td>{this.props.author}</td>
          <td>{this.props.publicationDate}</td>
          <td>
            <button onClick={this.deleteReviewFromServer}>DELETE</button>
          </td>
        </tr>
      </Fragment>
    );
  }
}
const mapStateToProps = state => {
  return state;
};
const mapActionsToProps = {
  resetReview: reviewActions.resetOneReview,
  getBook: bookActions.getOneBook,
  resetBooks: bookActions.resetAllBooks,
  resetReviews: reviewActions.resetAllReviews,
  getAllReviews: reviewActions.getAllReviews,
};
export default connect(
  mapStateToProps,
  mapActionsToProps,
)(SingleReview);
