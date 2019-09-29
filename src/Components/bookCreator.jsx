import React, { Component, Fragment } from 'react';

class BookCreator extends Component {
  constructor(props) {
    super(props);
  }

  goBackToBooksSite = () => {
    this.props.history.push('/');
  };

  render() {
    return (
      <Fragment>
        <div>
          <h1>Create book</h1>
          <a onClick={this.goBackToBooksSite}>BACK</a>
        </div>
        <div>
          <form>
            <div>
              <fieldset>
                <legend>title</legend>
                <input placeholder="title"></input>
              </fieldset>
            </div>
            <div>
              <fieldset>
                <legend>isbn</legend>
                <input placeholder="isbn"></input>
              </fieldset>
            </div>
            <div>
              <fieldset>
                <legend>description</legend>
                <input placeholder="description"></input>
              </fieldset>
            </div>
            <div>
              <fieldset>
                <legend>author</legend>
                <input placeholder="author"></input>
              </fieldset>
            </div>
            <div>
              <fieldset>
                <legend>publicationDate</legend>
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
