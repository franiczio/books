import { GET_BOOKS } from '../Actions/bookAction';
import { RESET_BOOKS } from '../Actions/bookAction';
import { GET_ONE_BOOK, RESET_ONE_BOOK } from '../Actions/bookAction';
import axios from 'axios';

const defaultBooks = [];

export default function bookReducer(state = defaultBooks, { type, payload }) {
  switch (type) {
    case GET_BOOKS: {
      payload.books.forEach(element => {
        state = [...state, element];
      });
      return payload.books;
    }
    case RESET_BOOKS: {
      return [];
    }
    case GET_ONE_BOOK: {
      state = [...state, [payload.book]];
      return state;
    }
    case RESET_ONE_BOOK: {
      var newArray = [];
      for (var i = 0; i < state.length; i++) {
        if (state[i]['@id'] !== payload.id) {
          newArray = [...newArray, state[i]];
        }
      }
      return newArray;
    }
    default: {
      return state;
    }
  }
}
