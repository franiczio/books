import React, { Component, Fragment } from 'react';
import Book from './book';
class BooksTable extends Component {
  constructor(props) {
    super(props);
  }

  goToCreator = () => {
    this.props.history.push('/books/create');
  };

  render() {
    return (
      <Fragment>
        <div>
          <h1>Books</h1>
          <a onClick={this.goToCreator}>ADD</a>
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
            <Book history={this.props.history}></Book>
            <Book history={this.props.history}></Book>
            <Book history={this.props.history}></Book>
            <Book history={this.props.history}></Book>
          </tbody>
        </table>
      </Fragment>
    );
  }
}

export default BooksTable;
