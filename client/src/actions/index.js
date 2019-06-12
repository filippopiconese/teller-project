import axios from 'axios'

import { AUTH_SIGN_UP, AUTH_ERROR } from './types'
/*
  ActionCreators -> create/return Actions ({ }) -> dispatched -> middlewares -> reducers
*/

export const oauthGoogle = data => {
  return async dispatch => {
    const res = await axios.post('http://localhost:5000/users/oauth/google', {
      access_token: data
    })

    dispatch({
      type: AUTH_SIGN_UP,
      payload: res.data.token
    })

    localStorage.setItem('JWT_TOKEN', res.data.token)
  }
}

export const signUp = data => {
  /*
    Step 1) Use the form data and make HTTP request to our Back-End and send it along (axios library needed) [X]
    Step 2) Take the BE's response (jwtToken is here now!) [X]
    Step 3) Dispatch user just signed up (with jwtToken) [X]
    Step 4) Save the jwtToken into our localStorage [X]
  */

  return async dispatch => {
    try {
      console.log('[ActionCreator] signUp called!')
      const res = await axios.post('http://localhost:5000/users/signup', data)

      console.log('[ActionCreator] signUp dispatched an action!')
      dispatch({
        type: AUTH_SIGN_UP,
        payload: res.data.token
      })

      localStorage.setItem('JWT_TOKEN', res.data.token)
    } catch (error) {
      dispatch({
        type: AUTH_ERROR,
        payload: 'Email is already in use'
      })
    }
  }
}
