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
          <td>text1</td>
          <td>text2</td>
          <td>text3</td>
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
