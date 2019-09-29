import React, { Fragment } from 'react';
import { Card, CardContent, CardHeader, Typography } from '@material-ui/core';
import BookTable from './Components/booksTable';
import BookReviewSite from './MainComponents/bookReviewSite';
import CreateSite from './MainComponents/bookCreateSiteView';
import ReviewSite from './MainComponents/reviewSite';
import BooksSite from './MainComponents/booksSiteView';

function App() {
  return (
    <Fragment>
      <Card>
        <CardHeader title="Books app" />
      </Card>
      <Card>
        <BooksSite />
      </Card>
      <Card>
        <BookReviewSite />
      </Card>
      <Card>
        <ReviewSite />
      </Card>
      <Card>
        <CreateSite />
      </Card>
    </Fragment>
  );
}

export default App;
