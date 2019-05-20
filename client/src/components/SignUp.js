import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'

import CustomInput from './Custominput'
class SignUp extends Component {
  render() {
    return (
      <div className="row">
        <div className="col">
          <form>
            <fieldset>
              <Field
                name="email"
                type="text"
                id="email"
                label="Enter your email"
                placeholder="example@example.com"
                component={CustomInput}
              />
            </fieldset>
            <fieldset>
              <Field
                name="password"
                type="password"
                id="password"
                label="Enter your password"
                placeholder="yoursuperpassword"
                component={CustomInput}
              />
            </fieldset>

            <button type="submit" className="btn btn-primary">Sign Up</button>
          </form>
        </div>
        <div className="col">
          <div className="text-center">
            <div className="alert alert-primary">
              Sin Up
            </div>
            <button className="btn btn-default">Facebook</button>
            <button className="btn btn-default">Google</button>
          </div>
        </div>
      </div>
    )
  }
}

export default reduxForm({ form: 'signup' })(SignUp)
