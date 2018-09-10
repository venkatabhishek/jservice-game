import {
  FETCH_QUESTION_REQUEST,
  FETCH_QUESTION_SUCCESS,
  FETCH_QUESTION_FAILURE
} from '../actions/index';

const initialState = {
  status: "",
  question: {},
  category: "random",
  categoryId: -1
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_QUESTION_REQUEST:
      return { ...state,
        status: "Fetching"
      };
      break;
    case FETCH_QUESTION_SUCCESS:
      return { ...state,
        status: "Fetched",
        question: action.payload
      };
      break;
    case FETCH_QUESTION_FAILURE:
      return { ...state,
        status: "Error"
      };
      break;
    default:
      return state;
  }
};
export default rootReducer;
