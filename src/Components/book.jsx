import React, { Component, Fragment } from 'react';
class Book extends Component {
  constructor(props) {
    super(props);
  }

  goToBookReview = () => {
    this.props.history.push('books/1');
  };

  render() {
    return (
      <Fragment>
        <tr>
          <td>{this.props.isbn}</td>
          <td>{this.props.title}</td>
          <td>{this.props.author}</td>
          <td>
            <a onClick={this.goToBookReview}>SHOW</a>
            <button>DELETE</button>
          </td>
        </tr>
      </Fragment>
    );
  }
}

export default Book;
