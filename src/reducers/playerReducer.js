import {
  FETCH_QUESTION_REQUEST,
  FETCH_QUESTION_SUCCESS,
  FETCH_QUESTION_FAILURE
} from '../actions/playerActions';

const initialState = {
  status: "",
  question: {},
  category: "random",
  categoryId: -1,
  receivedAt: -1
};
const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_QUESTION_REQUEST:
      return { ...state,
        status: "Fetching"
      };
    case FETCH_QUESTION_SUCCESS:
      return { ...state,
        status: "Fetched",
        question: action.payload,
        receivedAt: action.receivedAt
      };
    case FETCH_QUESTION_FAILURE:
      return { ...state,
        status: "Error"
      };
    default:
      return state;
  }
};
export default playerReducer;
