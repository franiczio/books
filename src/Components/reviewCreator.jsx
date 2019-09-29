import React, { Component, Fragment } from 'react';
class CreateReview extends Component {
  constructor(props) {
    super(props);
  }

  goBackToBookReview = () => {
    this.props.history.push('/books/1');
  };

  render() {
    return (
      <Fragment>
        <div>
          <h1>Create review</h1>
          <a onClick={this.goBackToBookReview}>BACK</a>
        </div>
        <div>
          <form>
            <div>
              <fieldset>
                <legend>
                  <span>book</span>
                </legend>
              </fieldset>
            </div>
            <div>
              <fieldset>
                <legend>
                  <span>rating</span>
                </legend>
                <input type="number" value="0" />
              </fieldset>
            </div>
            <div>
              <fieldset>
                <legend>
                  <span>body</span>
                </legend>
                <input placeholder="body" type="text" />
              </fieldset>
            </div>
            <div>
              <fieldset>
                <legend>
                  <span>author</span>
                </legend>
                <input placeholder="author" type="text" />
              </fieldset>
            </div>
            <div>
              <fieldset>
                <legend>
                  <span>publicationDate</span>
                </legend>
                <input type="text" />
              </fieldset>
            </div>
            <button type="submit">CREATE</button>
          </form>
        </div>
      </Fragment>
    );
  }
}

export default CreateReview;
