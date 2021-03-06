import React, {Component} from 'react';

import {connect} from "react-redux";
import { Link } from 'react-router-dom'

import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { register } from '../../actions/userActions';

import "./signup.css"

const mapDispatchToProps = dispatch => {
  return {
    register: (auth) => dispatch(register(auth))
  }
};

const mapStateToProps = state => {
  return {
    user: state.user
  }
};

class Signup extends Component {

  state = {
    username: "",
    password: ""
  }

  handleUsernameChange = username => event => {
    this.setState({
      [username]: event.target.value,
    });
  };

  handlePasswordChange = password => event => {
    this.setState({
      [password]: event.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    var auth = {
      username: this.state.username,
      password: this.state.password
    }

    this.props.register(auth)


  }

  render() {

    var { user } = this.props;

    return (<div className="wrapper">
    <Paper className="paper" elevation={3}>

    <Typography variant="display2" gutterBottom>
            Signup
          </Typography>

<div  className="form-wrapper">
           <form onSubmit={this.handleSubmit.bind(this)}>
           <TextField
            id="filled-username"
            label="Username"
            value={this.state.username}
            onChange={this.handleUsernameChange('username')}
            className="field"
            margin="normal"
            fullWidth
            variant="filled"
       />

       <TextField
        id="filled-password"
        label="Password"
        value={this.state.password}
        onChange={this.handlePasswordChange('password')}
        className="field"
        margin="normal"
        fullWidth
        variant="filled"
   />
   <Button variant="extendedFab" color="secondary" aria-label="Delete" className="sub" type="submit">
        Signup
      </Button>
      </form>
<Typography>
{user.status}
</Typography>

      <Typography className="link">
      <Link to="/login">Already have an account? Login</Link>
      </Typography>
      </div>
         </Paper>
      </div>)
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
