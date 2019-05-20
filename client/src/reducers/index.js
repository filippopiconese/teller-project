import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import authReducer from './auth'
import auth from './auth';

export default combineReducers({
  form: formReducer,
  auth: authReducer
})
