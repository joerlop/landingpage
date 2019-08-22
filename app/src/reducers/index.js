import {
  ADD_EMAIL_START,
  ADD_EMAIL_SUCCESS,
  ADD_EMAIL_FAILURE,
  RESET_STATE
} from "../actions";

// import { FETCH_START, FETCH_SUCCESS, FETCH_FAILURE } from "../actions";

const initialState = {
  error: "",
  success: "",
  savingEmail: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case RESET_STATE:
      return {
        error: "",
        success: "",
        savingEmail: false
      };
    case ADD_EMAIL_START:
      return {
        ...state,
        error: "",
        success: "",
        savingEmail: true
      };
    case ADD_EMAIL_SUCCESS:
      return {
        ...state,
        success: action.payload.message,
        savingEmail: false
      };
      case ADD_EMAIL_FAILURE:
        return {
          ...state,
          savingEmail: false,
          success: "",
          error: action.payload.response.data.message
        };
    default:
      return state;
  }
};

export default reducer;