import React, { Component, Fragmet } from 'react';
class Review extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Fragment>
        <div>
          <h1>Create review</h1>
          <a>back</a>
        </div>
        <div>
          <form>
            <div>
              <label>book</label>
              <fieldset>
                <legend>
                  <span>???</span>
                </legend>
              </fieldset>
            </div>
            <div>
              <label>rating</label>
              <fieldset>
                <input type="number" value="0" />
              </fieldset>
              <button>+</button>
              <button>-</button>
            </div>
            <div>
              <label>body</label>
              <fieldset>
                <input type="text" />
              </fieldset>
            </div>
            <div>
              <label>author</label>
              <fieldset>
                <input type="text" />
              </fieldset>
            </div>
            <div>
              <label>pulicationDate</label>
              <fieldset>
                <input type="text" />
              </fieldset>
            </div>
            <button type="submit"></button>
          </form>
        </div>
      </Fragment>
    );
  }
}

export default Review;
