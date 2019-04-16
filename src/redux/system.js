import axios from 'axios';

export const UPDATE_SYSTEM_STATE = 'system:updateSystemState';

// Action
export function updateSystemState(state) {
  return {
    type: UPDATE_SYSTEM_STATE,
    state
  };
}

// Reducer
export default function systemReducer(state = {}, data) {
  switch (data.type) {
    case UPDATE_SYSTEM_STATE:
      return Object.assign({}, state, data.state.data);
    default:
      return state;
  }
}

// Middleware

export function getSystemState() {
  return dispatch => {
    const url = '/home/state';
    axios
      .get(url, {})
      .then(resp => {
        if (resp) {
          dispatch(updateSystemState(resp));
        }
      })
      .catch(error => {
        console.error('GET: ' + url + '. ' + error);
      });
  };
}
