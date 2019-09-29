import React, { Fragment } from 'react';
import { Card, CardContent, CardHeader, Typography } from '@material-ui/core';
import BookTable from './Components/booksTable';
import ReviewSite from './MainComponents/reviewSite';
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
      <ReviewSite />
    </Fragment>
  );
}

export default App;
