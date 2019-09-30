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
  }

  goToBookReview = id => {
    this.props.history.push(id);
  };

  getBookFromServer = () => {
    let getPath = 'https://demo.h88.dev' + this.props.id;
    axios.get(getPath).then(resp => {
      console.log();
      this.props.getBook(resp.data['title']);
      this.props.getBook(resp.data['isbn']);
      this.props.getBook(resp.data['description']);
      this.props.getBook(resp.data['author']);
      this.props.getBook(resp.data['publicationDate']);
    });
  };

  onClickShowBook = () => {
    this.props.resetBooks();
    this.getBookFromServer();
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
            <button>DELETE</button>
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
  resetBooks: bookActions.resetAllBooks,
  getBook: bookActions.getOneBook,
};
export default connect(
  mapStateToProps,
  mapActionsToProps,
)(Book);
