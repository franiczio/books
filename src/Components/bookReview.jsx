import React, { Component, Fragment } from 'react';
import BookReviews from './bookReviews';
import axios from 'axios';
import { ReactReduxContext, connect } from 'react-redux';
import * as bookActions from '../Actions/bookAction';
import * as reviewActions from '../Actions/reviewAction';

class BookReview extends Component {
  constructor(props) {
    super(props);
    this.goBackToBooksSite = this.goBackToBooksSite.bind(this);
    this.goToReviewCreator = this.goToReviewCreator.bind(this);
    this.getBookFromServer = this.getBookFromServer.bind(this);
    this.getBook = this.getBook.bind(this);
    this.update = this.update.bind(this);
    this.getAllReviewsFromThisBook = this.getAllReviewsFromThisBook.bind(this);
  }

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
      return JSON.parse(thisBookReviews);
    });
  }

  update = event => {
    var reviews = this.getAllReviewsFromThisBook;
    let title = event.target[1].value;
    let isbn = event.target[3].value;
    let description = event.target[5].value;
    let author = event.target[7].value;
    let publicationDate = event.target[9].value;
    var requestBody = {
      isbn: isbn,
      title: title,
      description: description,
      author: author,
      publicationDate: publicationDate,
      reviews: reviews,
    };

    console.log(requestBody);
    let getPath =
      'https://demo.h88.dev' +
      '/' +
      'books' +
      '/' +
      window.location.href.split('/')[4];
    axios.patch(getPath, requestBody).then(resp => {});
    this.forceUpdate();
  };

  getBookFromServer() {
    console.log(window.location.href);
  }

  goBackToBooksSite = () => {
    this.props.resetBooks();
    this.props.history.push('/');
  };

  goToReviewCreator = () => {
    let id = this.props.books[0][0]['@id'];
    let getPath = id + '/reviews/create';
    this.props.history.push(getPath);
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
            <form onSubmit={this.update}>
              <div>
                <fieldset>
                  <legend>
                    <span>title</span>
                  </legend>
                  <input defaultValue={this.props.books[0][0]['title']} />
                </fieldset>
              </div>
              <div>
                <fieldset>
                  <legend>
                    <span>isbn</span>
                  </legend>
                  <input defaultValue={this.props.books[0][0]['isbn']} />
                </fieldset>
              </div>
              <div>
                <fieldset>
                  <legend>
                    <span>description</span>
                  </legend>
                  <input defaultValue={this.props.books[0][0]['description']} />
                </fieldset>
              </div>
              <div>
                <fieldset>
                  <legend>
                    <span>author</span>
                  </legend>
                  <input defaultValue={this.props.books[0][0]['author']} />
                </fieldset>
              </div>
              <div>
                <fieldset>
                  <legend>
                    <span>publicationDate</span>
                  </legend>
                  <input
                    defaultValue={this.props.books[0][0]['publicationDate']}
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
  resetReviews: reviewActions.resetAllReviews,
  getAllReviews: reviewActions.getAllReviews,
};
export default connect(
  mapStateToProps,
  mapActionsToProps,
)(BookReview);
