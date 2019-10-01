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
    this.getBook = this.getBook.bind(this);
  }

  getBookFromServer() {
    console.log(window.location.href);
  }

  goBackToBooksSite = () => {
    this.props.resetBooks();
    this.props.history.push('/');
  };

  goToReviewCreator = () => {
    this.props.history.push('/books/1/reviews/create');
  };

  getBook = () => {
    let getPath =
      'https://demo.h88.dev' +
      '/' +
      'books' +
      '/' +
      window.location.href.split('/')[4];
    axios.get(getPath).then(resp => {
      this.props.getBook(resp.data);
    });
  };

  componentDidMount() {
    this.getBook();
  }

  render() {
    if (this.props.books.length > 0) {
      return (
        <Fragment>
          <div>
            <h1 onClick={this.getBookFromServer}>
              {this.props.books[0][0]['title']}
            </h1>
            <a onClick={this.goBackToBooksSite}>BACK</a>
          </div>
          <div>
            <form>
              <div>
                <fieldset>
                  <legend>
                    <span>title</span>
                  </legend>
                  <input placeholder={this.props.books[0][0]['title']} />
                </fieldset>
              </div>
              <div>
                <fieldset>
                  <legend>
                    <span>isbn</span>
                  </legend>
                  <input placeholder={this.props.books[0][0]['isbn']} />
                </fieldset>
              </div>
              <div>
                <fieldset>
                  <legend>
                    <span>description</span>
                  </legend>
                  <input placeholder={this.props.books[0][0]['description']} />
                </fieldset>
              </div>
              <div>
                <fieldset>
                  <legend>
                    <span>author</span>
                  </legend>
                  <input placeholder={this.props.books[0][0]['author']} />
                </fieldset>
              </div>
              <div>
                <fieldset>
                  <legend>
                    <span>publicationDate</span>
                  </legend>
                  <input
                    placeholder={this.props.books[0][0]['publicationDate']}
                  />
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
    } else {
      return (
        <Fragment>
          <h1 onClick={this.getBookFromServer}>aaa</h1>
        </Fragment>
      );
    }
  }
}

const mapStateToProps = state => {
  return state;
};
const mapActionsToProps = {
  getBook: bookActions.getOneBook,
  resetBooks: bookActions.resetAllBooks,
};
export default connect(
  mapStateToProps,
  mapActionsToProps,
)(BookReview);
