import React from 'react';
import { Card, CardContent, CardHeader, Typography } from '@material-ui/core';
import BookTable from './Components/booksTable';
function App() {
  return (
    <Card>
      <CardHeader title="Books app" />
      <CardContent>
        <BookTable></BookTable>
        <Typography>Hello books!</Typography>
      </CardContent>
    </Card>
  );
}

export default App;
