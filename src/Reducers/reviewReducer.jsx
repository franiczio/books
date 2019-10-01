import { GET_REVIEW } from '../Actions/reviewAction';
import { RESET_REVIEWS } from '../Actions/reviewAction';
import { GET_ONE_REVIEW, RESET_ONE_REVIEW } from '../Actions/reviewAction';
import axios from 'axios';

const defaultReviews = [1, 2, 3];

export default function bookReducer(state = defaultReviews, { type, payload }) {
  switch (type) {
    case GET_REVIEW: {
      return payload.reviews;
    }
    case RESET_REVIEWS: {
      return [];
    }
    case GET_ONE_REVIEW: {
      state = [...state, [payload.review]];
      return state;
    }
    case RESET_ONE_REVIEW: {
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
