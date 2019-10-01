import React, { Component, Fragment } from 'react';
import * as bookActions from '../../Actions/bookAction';
import { ReactReduxContext, connect } from 'react-redux';
import axios from 'axios';

class BookCreator extends Component {
  constructor(props) {
    super(props);
    this.create = this.create.bind(this);
  }

  create = event => {
    let title = event.target[1].value;
    let isbn = event.target[3].value;
    let description = event.target[5].value;
    let author = event.target[7].value;
    let publicationDate = event.target[9].value;
    var requestBody = {
      isbn: isbn,
      title: title,
      description: description,
      author: author,
      publicationDate: publicationDate,
      reviews: [],
    };
    console.log(requestBody);
    axios.post('https://demo.h88.dev/books', requestBody).then(resp => {});
    this.goBackToBooksSite();
  };

  goBackToBooksSite = () => {
    this.props.history.push('/');
  };

  render() {
    return (
      <Fragment>
        <div>
          <h1>Create book</h1>
          <button onClick={this.goBackToBooksSite}>BACK</button>
        </div>
        <div>
          <form onSubmit={this.create}>
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
                <input defaultValue="2019-10-01T00:00:00+02:00"></input>
              </fieldset>
            </div>
            <button type="submit">CREATE</button>
          </form>
        </div>
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
)(BookCreator);
