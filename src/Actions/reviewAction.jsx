export const GET_REVIEW = 'getReview';
export const RESET_REVIEWS = 'resetReview';
export const GET_ONE_REVIEW = 'oneReview';
export const RESET_ONE_REVIEW = 'resetOneReview';

export const getAllReviews = myReviews => {
  return {
    type: GET_REVIEW,
    payload: { reviews: myReviews },
  };
};

export const resetAllReviews = () => {
  return {
    type: RESET_REVIEWS,
  };
};

export const getOneReview = review => {
  return {
    type: GET_ONE_REVIEW,
    payload: { review: review },
  };
};

export const resetOneReview = id => {
  return {
    type: RESET_ONE_REVIEW,
    payload: { id: id },
  };
};
