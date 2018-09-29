import fetch from 'cross-fetch';
import {
  push
} from 'connected-react-router'

const server = "https://server-nggkbglopf.now.sh"

export const LOGIN_REQUEST = "LOGIN_REQUEST";

function requestLogin() {
  return {
    type: LOGIN_REQUEST
  };
}

export const LOGIN_SUCCESS = "LOGIN_SUCCESS"

function loginSuccess(json) {
  return {
    type: LOGIN_SUCCESS,
    token: json.token,
    username: json.username,
    score: json.score,
    status: json.msg
  }
}

export const LOGIN_FAILURE = "LOGIN_FAILURE"

function loginFail(err) {
  return {
    type: LOGIN_FAILURE,
    error: err.msg
  }
}

export const LOGOUT = "LOGOUT"

export function logout() {
  return function(dispatch){
    dispatch({
      type: LOGOUT
    })
    dispatch(push('/login'))
  }
}

export function login(auth) {
  return function(dispatch, getState) {
    dispatch(requestLogin())
    var state = getState();
    if (state.user.isAuth) {
      dispatch(loginSuccess({
        token: state.user.token,
        username: state.user.username,
        score: state.user.score
      }))
    } else {
      fetch(server + "/login", {
          method: 'post',
          headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            username: auth.username,
            password: auth.password
          })
        }).then(res => res.json())
        .then(res => {
          if (res.status == 1) {
            dispatch(loginSuccess(res))
            dispatch(push('/app'))
          } else if (res.status == -1) {
            dispatch(loginFail(res))
          }
        });
    }
  }
}

export const REGISTER_REQUEST = "REGISTER_REQUEST";

function registerRequest() {
  return {
    type: REGISTER_REQUEST
  }
}

export const REGISTER_SUCCESS = "REGISTER_SUCCESS";

function registerSuccess(json) {
  return {
    type: REGISTER_SUCCESS,
    msg: json.msg
  }
}

export const REGISTER_FAIL = "REGISTER_FAIL";

function registerFail(json) {
  return {
    type: REGISTER_FAIL,
    msg: json.msg
  }
}

export function register(auth) {
  return function(dispatch) {
    dispatch(registerRequest())
    fetch(server + "/register", {
        method: 'post',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: auth.username,
          password: auth.password
        })
      }).then(res => res.json())
      .then(res => {
        if (res.status == 1) {
          dispatch(registerSuccess(res))
          dispatch(push('/login'))
        } else if (res.status == -1) {
          dispatch(registerFail(res))
        }
      });
  }

}

export const UPDATE_SCORE = "UPDATE_SCORE";

export function updateScore(score) {
  return function(dispatch, getState) {
    fetch(server + "/update", {
        method: 'post',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            token: getState().user.token,
            score: score
          })
        }).then(res => res.json())
      .then(res => {
        console.log(res.msg)
        if (res.status == 1) {
          dispatch({
            type: UPDATE_SCORE,
            score: score
          })
        } else if (res.status == -1) {

        }
      });
    }
  }
