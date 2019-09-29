import React, { Component, Fragment } from 'react';
import BooksTable from '../Components/booksTable';
class BooksSite extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Fragment>
        <BooksTable></BooksTable>
      </Fragment>
    );
  }
}

export default BooksSite;
