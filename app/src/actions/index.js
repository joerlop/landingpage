import axios from 'axios';

export const ADD_EMAIL_START = 'ADD_EMAIL_START';
export const ADD_EMAIL_SUCCESS = 'ADD_EMAIL_SUCCESS';
export const ADD_EMAIL_FAILURE = 'ADD_EMAIL_FAILURE';
export const addEmail = email => dispatch => {
  dispatch({ type: ADD_EMAIL_START });
  axios
    .post(`${process.env.REACT_APP_DATABASE_URL}/api/emails`, email)
    .then(res => {
      console.log(res)
      dispatch({ type: ADD_EMAIL_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: ADD_EMAIL_FAILURE });
    });
};