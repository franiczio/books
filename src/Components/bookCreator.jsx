import React, { Component, Fragment } from 'react';

class BookCreator extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Fragment>
        <div>
          <h1>Create book</h1>
          <a>BACK</a>
        </div>
        <div>
          <form>
            <div>
              <label>title</label>
            </div>
            <div>
              <label>isbn</label>
            </div>
            <div>
              <label>description</label>
            </div>
            <div>
              <label>author</label>
            </div>
            <div>
              <label></label>
            </div>
            <button>CREATE</button>
          </form>
        </div>
      </Fragment>
    );
  }
}

export default BookCreator;
