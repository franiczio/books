import React, { Component, Fragment } from 'react';
import Book from './book';
import axios from 'axios';
import * as bookActions from '../../Actions/bookAction';
import { ReactReduxContext, connect } from 'react-redux';
class BooksTable extends Component {
  constructor(props) {
    super(props);
    this.getAllBooksFromServer = this.getAllBooksFromServer.bind(this);
    this.showState = this.showState.bind(this);
  }

  goToCreator = () => {
    this.props.resetBooks();
    this.props.history.push('/books/create');
  };

  getAllBooksFromServer() {
    axios.get('https://demo.h88.dev/books/').then(resp => {
      this.props.getAllBooks(resp.data['hydra:member']);
    });
  }
  componentDidMount() {
    this.props.resetBooks();
    this.getAllBooksFromServer();
  }

  showState() {
    console.log(this.props.books[0]);
  }

  render() {
    return (
      <Fragment>
        <div>
          <h1 onClick={this.showState}>Books</h1>
          <button onClick={this.goToCreator}>ADD</button>
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
            {this.props.books.map((book, i) => (
              <Book
                history={this.props.history}
                key={i}
                id={book['@id']}
                title={book['title']}
                isbn={book['isbn']}
                author={book['author']}
              />
            ))}
          </tbody>
        </table>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return state;
};
const mapActionsToProps = {
  getAllBooks: bookActions.getAllBooks,
  resetBooks: bookActions.resetAllBooks,
};
export default connect(
  mapStateToProps,
  mapActionsToProps,
)(BooksTable);
