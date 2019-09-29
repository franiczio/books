import React, { Fragment } from 'react';
import { Card, CardContent, CardHeader, Typography } from '@material-ui/core';
import BookTable from './Components/booksTable';
import BookReviewSite from './MainComponents/bookReviewSite';
function App() {
  return (
    <Fragment>
      <Card>
        <CardHeader title="Books app" />
        <CardContent></CardContent>
      </Card>
      <Card>
        <BookTable></BookTable>
      </Card>
      <BookReviewSite />
    </Fragment>
  );
}

export default App;
