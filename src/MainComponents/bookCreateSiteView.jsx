import React, { Component, Fragment } from 'react';
import BookCreator from '../Components/bookCreator';
class CreateSite extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Fragment>
        <BookCreator></BookCreator>
      </Fragment>
    );
  }
}

export default CreateSite;
