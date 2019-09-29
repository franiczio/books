import React, { Fragment } from 'react';
import { Card, CardContent, CardHeader, Typography } from '@material-ui/core';
import BookTable from './Components/booksTable';
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
    </Fragment>
  );
}

export default App;
