import React, { Component, Fragment } from 'react';
import * as bookActions from '../Actions/bookAction';
import { ReactReduxContext, connect } from 'react-redux';
import axios from 'axios';

class Book extends Component {
  constructor(props) {
    super(props);
    this.goToBookReview = this.goToBookReview.bind(this);
    this.onClickShowBook = this.onClickShowBook.bind(this);
    this.getBookFromServer = this.getBookFromServer.bind(this);
    this.deleteBookFromServer = this.deleteBookFromServer.bind(this);
  }

  goToBookReview = id => {
    this.props.history.push(id);
  };

  deleteBookFromServer = () => {
    let getPath = 'https://demo.h88.dev' + this.props.id;
    axios.delete(getPath).then(resp => {});
    this.props.resetOneBook(this.props.id);
  };

  getBookFromServer = () => {
    let getPath = 'https://demo.h88.dev' + this.props.id;
    axios.get(getPath).then(resp => {
      console.log(resp.data);
      this.props.getBook(resp.data);
      // this.props.getBook(resp.data['isbn']);
      // this.props.getBook(resp.data['description']);
      // this.props.getBook(resp.data['author']);
      // this.props.getBook(resp.data['publicationDate']);
    });
  };

  onClickShowBook = () => {
    this.props.resetBooks();
    // if (this.props.books.length === 0) {
    this.getBookFromServer();
    // }
    this.goToBookReview(this.props.id);
  };

  render() {
    return (
      <Fragment>
        <tr>
          <td>{this.props.isbn}</td>
          <td>{this.props.title}</td>
          <td>{this.props.author}</td>
          <td>
            <a onClick={this.onClickShowBook}>SHOW</a>
            <button onClick={this.deleteBookFromServer}>DELETE</button>
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
  getAllBooks: bookActions.getAllBooks,
  resetBooks: bookActions.resetAllBooks,
  getBook: bookActions.getOneBook,
  resetOneBook: bookActions.resetOneBook,
};
export default connect(
  mapStateToProps,
  mapActionsToProps,
)(Book);
