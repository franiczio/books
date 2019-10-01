import React, { Component, Fragment } from 'react';
class SingleReview extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Fragment>
        <tr>
          <td>{this.props.body}</td>
          <td>{this.props.rating}</td>
          <td>{this.props.author}</td>
          <td>{this.props.publicationDate}</td>
          <td>
            <button>DELETE</button>
          </td>
        </tr>
      </Fragment>
    );
  }
}

export default SingleReview;
