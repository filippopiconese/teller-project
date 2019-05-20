import axios from 'axios'

/*
  ActionCreators -> create/return Actions ({ }) -> dispatched -> middlewares -> reducers
*/

export const signUp = data => {
  /*
    Step 1) Use the form data and make HTTP request to our Back-End and send it along (axios library needed)
    Step 2) Take the BE's response (jwtToken is here now!)
    Step 3) Dispatch user just signed u (with jwtToken)
    Step 4) Save the jwtToken into our localStorage
  */

  return async dispatch => {
    try {
      const res = await axios.post('http://localhost:5000/users/signup', data)
      console.log('res', res)
    } catch (error) {
      console.error(error)
    }
  }
}
