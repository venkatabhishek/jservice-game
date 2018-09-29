import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGOUT,
  UPDATE_SCORE
} from '../actions/userActions';
import moment from 'moment'
const initialState = {
  token: "",
  isAuth: false,
  username: "",
  score: 0,
  status: "",
  persistExpiresAt: moment()
    .add(20, 's')
    .format()
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isAuth: false,
        status: "Logging in..."
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuth: true,
        token: action.token,
        score: action.score,
        username: action.username,
        status: action.msg
      }
    case LOGIN_FAILURE:
      return {
        ...state,
        isAuth: false,
        status: action.msg
      }
    case REGISTER_REQUEST:
      return {
        ...state,
        status: "Registering..."
      }
    case REGISTER_SUCCESS:
      return {
        ...state,
        status: action.msg
      }
    case REGISTER_FAIL:
      return {
        ...state,
        status: action.msg
      }
    case LOGOUT:
      return {
        initialState,
      }
    case UPDATE_SCORE:
      return {
        ...state,
        score: action.score
      }
    default:
      return {
        ...state
      }
  }
}

export default userReducer;
