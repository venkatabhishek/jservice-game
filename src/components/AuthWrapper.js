import { Redirect } from 'react-router'
import React, { Component } from 'react';
import Dashboard from './dashboard/Dashboard'
import {connect} from "react-redux";
import {logout} from '../actions/userActions'

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
};

class AuthWrapper extends Component {

  render(){

    var isAuth = this.props.user.isAuth;


    return(
      <div>
      {isAuth? <Dashboard logout={this.props.logout.bind(this)}/> : <Redirect to="/login"/>}
      </div>
    )
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(AuthWrapper);
