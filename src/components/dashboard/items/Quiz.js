import React, { Component } from 'react';
import { connect } from 'react-redux'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { fetchQuestion } from '../../../actions/playerActions';
import { updateScore } from '../../../actions/userActions';

const mapDispatchToProps = dispatch => {
  return {
    fetchQuestion: () => dispatch(fetchQuestion()),
    updateScore: (score) => dispatch(updateScore(score))
  }
};

const mapStateToProps = state => {
  return {
    player: state.player,
    user: state.user
  }
};

const styles = theme => ({
  score: {
    borderRadius: "45px",
    width: 300,
    height: 100,
    textAlign: "center",
    verticalAlign: "middle",
lineHeight: "100px",
margin: "0 auto",
},
value: {
  borderRadius: "45px",
  width: 300,
  height: 100,
  textAlign: "center",
  verticalAlign: "middle",
margin: "0 auto",
lineHeight: "100px",
marginTop: 20
},
  container: {
    display: "flex",
    paddingLeft: "15%",
paddingRight: "15%",
marginTop:" 2%"
},
header: {
  verticalAlign: "middle",
  display: "inline-block"
},
question: {
  marginTop: 80
},
btnGroup: {
  margin: 20
},
button: {
  margin: 20
}
});



class Quiz extends Component{

  state = {
    answer: "",
    error: false,
    validText: ""
  }

  handleChange = name => event => {
   this.setState({
     [name]: event.target.value,
   });
 };

 submitClick = event => {
   var correct = (this.props.player.question.answer).replace(/\W/g,'').toLowerCase();
   var answer = (this.state.answer).replace(/\W/g,'').toLowerCase();
   if(!this.state.revealed){
     if(correct == answer){
       this.props.updateScore(this.props.user.score+this.props.player.question.value)
       this.setState({
         error: false,
         valText: "Correct!",
       })
     }else{
       this.props.updateScore(this.props.user.score-this.props.player.question.value)

       this.setState({
         error: true,
         valText: "Wrong!"
       })
     }
   }else{
     this.setState({
       valText: "Answer already revealed!"
     })
   }

 }

 changeQuestion = event => {
   this.props.fetchQuestion();
   this.setState({
     valText: "",
     error: false,
     revealed: false
   })
 }

 revealAnswer = event => {
   this.setState({
     valText: this.props.player.question.answer,
     revealed: true
   })

 }

  render(){
    const { player } = this.props;
    const { user } = this.props;
    const { classes } = this.props;



    return (<div>
      <div className={classes.container}>
      <Paper className={classes.score} elevation={15}>
      <Typography variant="headline" gutterBottom className={classes.header}>
      Score: {user.score}
     </Typography>
        </Paper>
        <Paper className={classes.score} elevation={15}>
        <Typography variant="headline" gutterBottom className={classes.header}>
        Category: {player.category}
        </Typography>
          </Paper>

      </div>
      <br/>

              <Paper className={classes.value} elevation={15}>
              <Typography  variant="headline"  gutterBottom className={classes.header}>
              Value: {player.question.value}
              </Typography>          </Paper>
      <Typography variant="headline" gutterBottom className={classes.question}>
      Question: {player.question.question}
      </Typography>
      <TextField
          id="standard-name"
          label="Answer"
          value={this.state.answer}
          onChange={this.handleChange('answer')}
          margin="normal"
          error={this.state.error}
        />
        <br />
        <div className={classes.btnGroup}>
        <Button variant="contained" size="large" color="primary" className={classes.button} onClick={this.submitClick}>
          Submit
        </Button>


        <Button variant="contained" size="large" color="primary" className={classes.button} onClick={this.revealAnswer}>
                Reveal
        </Button>

        <Button variant="contained" size="large" color="primary" className={classes.button} onClick={this.changeQuestion}>
          Next
        </Button>

        </div>
        <Typography variant="display2" gutterBottom className={classes.question}>
        {this.state.valText}
        </Typography>
      </div>
    )
  }
}


export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Quiz));
