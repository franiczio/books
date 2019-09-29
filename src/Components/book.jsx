import React, { Component, Fragment } from 'react';
class Book extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Fragment>
        <tr>
          <td>text1</td>
          <td>text2</td>
          <td>text3</td>
          <td>
            <a>link</a>
            <button>button</button>
          </td>
        </tr>
      </Fragment>
    );
  }
}

export default Book;
