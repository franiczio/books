import React from 'react';
import { Card, CardContent, CardHeader, Typography } from '@material-ui/core';
import Book from './Components/book.jsx';
function App() {
  return (
    <Card>
      <CardHeader title="Books app" />
      <CardContent>
        <Book />
        <Typography>Hello books!</Typography>
      </CardContent>
    </Card>
  );
}

export default App;
