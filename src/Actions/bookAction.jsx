//hydra:member
export const GET_BOOKS = 'getBooks';

export const getAllBooks = myBooks => {
  return {
    type: GET_BOOKS,
    payload: { books: myBooks },
  };
};
