import React, { Component, Fragment } from 'react';
class SingleReview extends Component {
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
          <td>text4</td>
          <td>
            <button>DELETE</button>
          </td>
        </tr>
      </Fragment>
    );
  }
}

export default SingleReview;
