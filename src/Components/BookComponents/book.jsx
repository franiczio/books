import React, { Component, Fragment } from 'react';
import * as bookActions from '../../Actions/bookAction';
import { ReactReduxContext, connect } from 'react-redux';
import axios from 'axios';

class Book extends Component {
  constructor(props) {
    super(props);
    this.goToBookReview = this.goToBookReview.bind(this);
    this.onClickShowBook = this.onClickShowBook.bind(this);
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

  onClickShowBook = () => {
    this.props.resetBooks();
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
            <button onClick={this.onClickShowBook}>SHOW</button>
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
