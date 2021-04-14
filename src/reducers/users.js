import { USER_LOGIN_SUCCESS, USER_LOGOUT_SUCCESS } from '../utils/constants';

const initialState = {};

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        currentUser: action.user,
      };
    case USER_LOGOUT_SUCCESS:
      return {
        state: initialState,
      };

    default:
      return state;
  }
}

// When action ‘GET_NEWS’ was dispatched property of state loading becomes equal to TRUE and the spinner is appears on the screen.
// And of course call to API should be triggered and after response have arrived action ‘NEWS_RECEIVED’ must be dispatched.
// Redux-Saga will take care about all this.Next let’s go to the main file of this SAGA tutorial.

// Once response from the API call has received Redux state will have property NEWS which contains json of one news.
