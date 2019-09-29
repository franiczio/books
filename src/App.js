import React, { Fragment } from 'react';
import { Card, CardContent, CardHeader, Typography } from '@material-ui/core';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import BookReviewSite from './MainComponents/bookReviewSite';
import CreateSite from './MainComponents/bookCreateSiteView';
import ReviewSite from './MainComponents/reviewSite';
import BooksSite from './MainComponents/booksSiteView';

function App() {
  return (
    <Router>
      <Card>
        <CardHeader title="Books App" />
      </Card>
      <div>
        <Route exact path="/" component={BooksSite} />
        <Route exact path="/books/create" component={CreateSite} />
        <Route exact path="/books/:id(\d+)" component={BookReviewSite} />
        <Route
          exact
          path="/books/:id(\d+)/reviews/create"
          component={ReviewSite}
        />
      </div>
    </Router>
  );
}

export default App;
