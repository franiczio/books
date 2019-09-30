import { GET_BOOKS } from '../Actions/bookAction';
import { RESET_BOOKS } from '../Actions/bookAction';
import axios from 'axios';

const defaultBooks = [];

export default function bookReducer(state = defaultBooks, { type, payload }) {
  switch (type) {
    case GET_BOOKS: {
      payload.books.forEach(element => {
        state = [...state, element];
      });
      return state;
    }
    case RESET_BOOKS: {
      return [];
    }
    default: {
      return state;
    }
  }
}
