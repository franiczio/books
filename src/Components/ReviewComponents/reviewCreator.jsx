import React, { Component, Fragment } from 'react';
import { ReactReduxContext, connect } from 'react-redux';
import * as bookActions from '../../Actions/bookAction';
import axios from 'axios';

class CreateReview extends Component {
  constructor(props) {
    super(props);
    this.getBook = this.getBook.bind(this);
    this.create = this.create.bind(this);
    this.ratingIsLessThanFiveAndBiggerThanZero = this.ratingIsLessThanFiveAndBiggerThanZero.bind(
      this,
    );
  }

  // POST BODY EXAMPLE FROM WEBSITE...
  // {
  //   "body": "string",
  //   "rating": 0,
  //   "letter": "string",
  //   "author": "string",
  //   "publicationDate": "2019-10-01T15:53:00.591Z",
  //   "book": {
  //     "isbn": "string",
  //     "title": "string",
  //     "description": "string",
  //     "author": "string",
  //     "publicationDate": "2019-10-01T15:53:00.591Z",
  //     "reviews": [
  //       null
  //     ]
  //   }
  // }

  ratingIsLessThanFiveAndBiggerThanZero = rating => {
    if (rating > 5 || rating < 0) {
      return true;
    }
    return false;
  };

  create = event => {
    var rating = event.target[2].value;
    if (this.ratingIsLessThanFiveAndBiggerThanZero(rating)) {
      window.alert('rating should be less than 5 and bigger than 0');
    } else {
      var book = this.props.books[0][0];
      var body = event.target[4].value;
      var author = event.target[6].value;
      var publicationDate = event.target[8].value;
      var bookISBN = book['isbn'];
      var bookAuthor = book['author'];
      var bookTitle = book['title'];
      var bookDescriptions = book['description'];
      var bookPublicationDate = book['publicationDate'];
      var bookReviews = '[null]';
      var requestBody = {
        body: body,
        rating: rating,
        letter: '',
        author: author,
        publicationDate: publicationDate,
        book: {
          isbn: bookISBN,
          title: bookTitle,
          description: bookDescriptions,
          author: bookAuthor,
          publicationDate: bookPublicationDate,
          reviews: bookReviews,
        },
      };
      console.log(requestBody);
      axios.post('https://demo.h88.dev/reviews', requestBody).then(resp => {});
      this.goBackToBookReview();
    }
  };

  goBackToBookReview = () => {
    let id = this.props.books[0][0]['@id'];
    this.props.history.push(id);
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
    this.props.resetBooks();
    this.getBook();
  }

  render() {
    if (this.props.books.length !== 0) {
      return (
        <Fragment>
          <div>
            <h1>Create review</h1>
            <h2>{this.props.books[0][0]['title']}</h2>
            <button onClick={this.goBackToBookReview}>BACK</button>
          </div>
          <div>
            <form onSubmit={this.create}>
              <div>{}</div>
              <div>
                <fieldset>
                  <legend>rating</legend>
                  <input type="number" defaultValue="0" />
                </fieldset>
              </div>
              <div>
                <fieldset>
                  <legend>body</legend>
                  <input placeholder="body" type="text" />
                </fieldset>
              </div>
              <div>
                <fieldset>
                  <legend>author</legend>
                  <input placeholder="author" type="text" />
                </fieldset>
              </div>
              <div>
                <fieldset>
                  <legend>publicationDate</legend>
                  <input defaultValue="2019-10-01T00:00:00+02:00" type="text" />
                </fieldset>
              </div>
              <button type="submit">CREATE</button>
            </form>
          </div>
        </Fragment>
      );
    } else {
      return <Fragment></Fragment>;
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
)(CreateReview);
