import React, { Component, Fragment } from 'react';
import * as bookActions from '../Actions/bookAction';
import { ReactReduxContext, connect } from 'react-redux';

class Book extends Component {
  constructor(props) {
    super(props);
    this.goToBookReview = this.goToBookReview.bind(this);
    this.onClickShowBook = this.onClickShowBook.bind(this);
  }

  goToBookReview = id => {
    this.props.history.push(id);
  };

  onClickShowBook = () => {
    this.goToBookReview(this.props.id);
    this.props.resetBooks();
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
};
export default connect(
  mapStateToProps,
  mapActionsToProps,
)(Book);
