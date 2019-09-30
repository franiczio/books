//hydra:member
export const GET_BOOKS = 'getBooks';
export const RESET_BOOKS = 'resetBooks';

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
