import React, { Component, Fragment } from 'react';
import BookReviews from './bookReviews';
import axios from 'axios';
import { ReactReduxContext, connect } from 'react-redux';
import * as bookActions from '../Actions/bookAction';

class BookReview extends Component {
  constructor(props) {
    super(props);
    this.goBackToBooksSite = this.goBackToBooksSite.bind(this);
    this.goToReviewCreator = this.goToReviewCreator.bind(this);
    this.getBookFromServer = this.getBookFromServer.bind(this);
  }

  getBookFromServer() {
    console.log(this.props.books);
  }

  goBackToBooksSite = () => {
    this.props.resetBooks();
    this.props.history.push('/');
  };

  goToReviewCreator = () => {
    this.props.history.push('/books/1/reviews/create');
  };

  render() {
    return (
      <Fragment>
        <div>
          <h1 onClick={this.getBookFromServer}>{this.props.books[0]}</h1>
          <a onClick={this.goBackToBooksSite}>BACK</a>
        </div>
        <div>
          <form>
            <div>
              <fieldset>
                <legend>
                  <span>title</span>
                </legend>
                <input placeholder={this.props.books[0]} />
              </fieldset>
            </div>
            <div>
              <fieldset>
                <legend>
                  <span>isbn</span>
                </legend>
                <input placeholder={this.props.books[1]} />
              </fieldset>
            </div>
            <div>
              <fieldset>
                <legend>
                  <span>description</span>
                </legend>
                <input placeholder={this.props.books[2]} />
              </fieldset>
            </div>
            <div>
              <fieldset>
                <legend>
                  <span>author</span>
                </legend>
                <input placeholder={this.props.books[3]} />
              </fieldset>
            </div>
            <div>
              <fieldset>
                <legend>
                  <span>publicationDate</span>
                </legend>
                <input placeholder={this.props.books[4]} />
              </fieldset>
            </div>
            <button type="submit">UPDATE</button>
          </form>
        </div>
        <div>
          <h1>Book's reviews</h1>
          <a onClick={this.goToReviewCreator}>CREATE</a>
        </div>
        <BookReviews />
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return state;
};
const mapActionsToProps = {
  resetBooks: bookActions.resetAllBooks,
};
export default connect(
  mapStateToProps,
  mapActionsToProps,
)(BookReview);
