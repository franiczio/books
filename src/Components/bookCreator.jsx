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
              <fieldset>
                <legend></legend>
                <input placeholder="title"></input>
              </fieldset>
            </div>
            <div>
              <fieldset>
                <input placeholder="isbn"></input>
                <legend></legend>
              </fieldset>
            </div>
            <div>
              <fieldset>
                <legend></legend>
                <input placeholder="description"></input>
              </fieldset>
            </div>
            <div>
              <fieldset>
                <legend></legend>
                <input placeholder="author"></input>
              </fieldset>
            </div>
            <div>
              <fieldset>
                <legend></legend>
                <input placeholder="12-21-2019"></input>
              </fieldset>
            </div>
            <button>CREATE</button>
          </form>
        </div>
      </Fragment>
    );
  }
}

export default BookCreator;
