import fetch from 'cross-fetch'​;

const url = "http://jservice.io/api";

export const FETCH_QUESTION_REQUEST = 'FETCH_QUESTION_REQUEST'

function requestQuestion() {
  return {
    type: FETCH_QUESTION_REQUEST
  }
}​

export const FETCH_QUESTION_SUCCESS = 'FETCH_QUESTION_SUCCESS'

function receiveQuestion(json) {
  return {
    type: FETCH_QUESTION_SUCCESS,
    payload: {
      receivedAt: Date.now(),
      data: json
    }
  }
}​

export const FETCH_QUESTION_FAILURE = 'FETCH_QUESTION_FAILURE'
export function errQuestion(err) {
  return {
    type: FETCH_QUESTION_FAILURE,
    error: err
  }
}​

export function fetchQuestion() {
  return function(dispatch, getState) {​
    dispatch(requestQuestion())​
    let fetch_url = url;​
    if (getState().category == "random") {
      fetch_url += "/random";
    } else {
      fetch_url += ("/clues?category=" + getState().categoryId);
    }

    dispatch(receivePosts({question: "Testin question?"}))

    // return fetch(fetch_url)
    //   .then(
    //     response => response.json(),
    //     error => console.log('An error occurred.', dispatch(errQuestion(error)))
    //   )
    //   .then(json =>
    //     dispatch(receivePosts(json))
    //   )
  }
}
