import {
  ADD_EMAIL_START,
  ADD_EMAIL_SUCCESS,
  ADD_EMAIL_FAILURE,
} from "../actions";

// import { FETCH_START, FETCH_SUCCESS, FETCH_FAILURE } from "../actions";

const initialState = {
  error: "",
  savingEmail: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EMAIL_START:
      return {
        ...state,
        error: "",
        savingEmail: true
      };
    case ADD_EMAIL_SUCCESS:
      return {
        ...state,
        savingEmail: false
      };
      case ADD_EMAIL_FAILURE:
        return {
          ...state,
          savingEmail: false,
          error: "Couldn't save e-mail"
        };
    default:
      return state;
  }
};

export default reducer;