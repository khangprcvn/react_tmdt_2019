import axios from 'axios';
const USER_LOG_IN = 'user:log_in';


export function logInAction(user) {
  return {
    type: USER_LOG_IN,
    user
  }
}

export function logIn(user) {
  return dispatch => {
    const url = '/login';
    axios.post(url, user, {}).then(user => {
      dispatch(logInAction(user))
    }).catch(err => {
      console.log(err);
    })
  }
}


export default function UserReducer(state = null, action) {
  switch (action.type) {
    case USER_LOG_IN:
      return {
        ...state,
        user: action.user.data
      }
    default:
      return state;
  }
}