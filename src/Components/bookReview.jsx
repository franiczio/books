import React, { Component, Fragment } from 'react';
import BookReviews from './bookReviews';
class BookReview extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Fragment>
        <div>
          <h1>bookName</h1>
          <a>BACK</a>
        </div>
        <div>
          <form>
            <div>
              <fieldset>
                <legend>
                  <span>title</span>
                </legend>
                <input placeholder="title" />
              </fieldset>
            </div>
            <div>
              <fieldset>
                <legend>
                  <span>isbn</span>
                </legend>
                <input placeholder="isbn" />
              </fieldset>
            </div>
            <div>
              <fieldset>
                <legend>
                  <span>description</span>
                </legend>
                <input placeholder="description" />
              </fieldset>
            </div>
            <div>
              <fieldset>
                <legend>
                  <span>author</span>
                </legend>
                <input placeholder="author" />
              </fieldset>
            </div>
            <div>
              <fieldset>
                <legend>
                  <span>publicationDate</span>
                </legend>
                <input placeholder="publicationDate" />
              </fieldset>
            </div>
            <button type="submit">UPDATE</button>
          </form>
        </div>
        <div>
          <h1>Book's reviews</h1>
          <a>CREATE</a>
        </div>
        <BookReviews />
      </Fragment>
    );
  }
}

export default BookReview;