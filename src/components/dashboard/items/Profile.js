import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const mapDispatchToProps = dispatch => {
  return {
  }
};

const mapStateToProps = state => {
  return {
    player: state.player,
    user: state.user
  }
};

const styles = theme => ({
  root: {
   ...theme.mixins.gutters(),
   paddingTop: theme.spacing.unit * 2,
   paddingBottom: theme.spacing.unit * 2,
   width: 500,
   height: "60vh",
   margin: "0 auto"
 },
 image: {
   width: 64,
   height: 64,
   margin: "0 auto",
   background: "url('https://ui-avatars.com/api/?name=Lurg')"
 }
});




class Profile extends Component{
  render(){
    const {classes} = this.props;

    return (
      <div>
      <Paper className={classes.root} elevation={16}>
       <Paper className={classes.image} elevation={0}>
       </Paper>
     </Paper>
      </div>
    )
  }
}


export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Profile));
