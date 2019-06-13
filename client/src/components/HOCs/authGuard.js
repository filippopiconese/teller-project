import React, { Component } from 'react'
import { connect } from 'react-redux'

export default (OriginalComponent) => {
  class MixedComponent extends Component {

    componentDidMount() {
      // Whether the user is authenticated
      if (this.props.isAuth && this.props.jwtToken) {
        console.log('All is good, user\'s entrance is allowed')
      } else {
        console.log('User is not authenticated, decline access')
        this.props.history.push('/')
      }
    }

    componentDidUpdate() {
      // Whether the user is authenticated
      if (this.props.isAuth && this.props.jwtToken) {
        console.log('All is good, user\'s entrance is allowed')
      } else {
        console.log('User is not authenticated, decline access')
        this.props.history.push('/')
      }
    }

    render() {
      return <OriginalComponent />
    }
  }

  function mapStateToProps(state) {
    return {
      isAuth: state.auth.isAuthenticated,
      jwtToken: state.auth.token
    }
  }

  return connect(mapStateToProps)(MixedComponent)
}

