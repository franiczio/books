export const GET_BOOKS = 'getBooks';
export const RESET_BOOKS = 'resetBooks';
export const GET_ONE_BOOK = 'oneBook';
export const RESET_ONE_BOOK = 'resetOneBook';

export const getAllBooks = myBooks => {
  return {
    type: GET_BOOKS,
    payload: { books: myBooks },
  };
};

export const resetAllBooks = () => {
  return {
    type: RESET_BOOKS,
  };
};

export const getOneBook = book => {
  return {
    type: GET_ONE_BOOK,
    payload: { book: book },
  };
};

export const resetOneBook = id => {
  return {
    type: RESET_ONE_BOOK,
    payload: { id: id },
  };
};
