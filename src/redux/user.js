import axios from 'axios';
const USER_SIGN_UP = 'user:sign_up';
const USER_LOG_IN = 'user:log_in';
const USER_GET_USER = 'user:get_user';


//TODO: Make action
// export function signUpAction(user) {
//   return {
//     type: USER_SIGN_UP,
//     user
//   }
// }

export function logInAction(user) {
  return {
    type: USER_LOG_IN,
    user
  }
}


//TODO: middleware to check
// export function signUp(user) {
//   return () => {
//     const url = '/signup';
//     axios.post(url, user, {}).then(data => {
//       // console.log(data);
//     }).catch(err => {
//       console.log(err);
//     })
//   }
// }

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