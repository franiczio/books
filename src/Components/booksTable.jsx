import React, { Component, Fragment } from 'react';
import Book from './book';
class BooksTable extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Fragment>
        <div>
          <h1>Books</h1>
          <a>ADD</a>
        </div>
        <table>
          <thead>
            <tr>
              <th>isbn</th>
              <th>title</th>
              <th>autror</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <Book></Book>
            <Book></Book>
            <Book></Book>
            <Book></Book>
          </tbody>
        </table>
      </Fragment>
    );
  }
}

export default BooksTable;
