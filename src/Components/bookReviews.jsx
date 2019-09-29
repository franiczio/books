import React, { Component, Fragment } from 'react';
class BookReviews extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Fragment>
        <div>
          <table>
            <thead>
              <tr>
                <th>body</th>
                <th>rating</th>
                <th>author</th>
                <th>publicationDate</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>text1</td>
                <td>text2</td>
                <td>text3</td>
                <td>text4</td>
                <td>
                  <button>DELETE</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Fragment>
    );
  }
}

export default BookReviews;
