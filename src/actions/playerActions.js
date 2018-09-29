import fetch from 'cross-fetch';

const api = "http://jservice.io/api";

export const FETCH_QUESTION_REQUEST = "FETCH_QUESTION_REQUEST";

function requestQuestion(){
	return {
		type: FETCH_QUESTION_REQUEST
	};
}

export const FETCH_QUESTION_SUCCESS = "FETCH_QUESTION_SUCCESS"

function receiveQuestion(json){
	return {
		type: FETCH_QUESTION_SUCCESS,
		receivedAt: Date.now(),
		payload: json[0]
	}
}

export const FETCH_QUESTION_FAILURE = "FETCH_QUESTION_FAILURE"

function errQuestion(err){
	return {
		type: FETCH_QUESTION_FAILURE,
		error: err
	}
}

export function fetchQuestion(){
	return function(dispatch, getState){
		dispatch(requestQuestion())
		let fetch_api = api;
		if (getState().player.category == "random") {
			fetch_api += "/random";
		} else {
			fetch_api += ("/clues?category=" + getState().categoryId);
		}
		console.log(fetch_api)
		return fetch(fetch_api)
		  .then(
		    response => response.json(),
		    error => console.log("An error occurred.", dispatch(errQuestion(error)))
		  )
		  .then(json =>
		    dispatch(receiveQuestion(json))
		  )

	}
}
