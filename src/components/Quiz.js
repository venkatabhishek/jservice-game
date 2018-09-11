import React, {Component} from 'react';
import {fetchQuestion} from '../actions/index';
import {connect} from "react-redux";

const mapDispatchToProps = dispatch => {
  return {
    fetchQuestion: () => dispatch(fetchQuestion())
  }
};

const mapStateToProps = state => {
  return {status: state.status, question: state.question, category: state.category}
};

class ConnectedQuiz extends Component {

  componentWillMount() {
    this.props.fetchQuestion();
  }

  render() {

    return (< div > <h1 > Category : {
      this.props.category
    } < /h1> <
      h1 > Status: {
        this.props.status
      } < /h1 > <h1 > Question : {
      this.props.status == "Fetched"
        ? this.props.question.question
        : "No value"
    } < /h1> <
      /div >)
  }

}

const Quiz = connect(mapStateToProps, mapDispatchToProps)(ConnectedQuiz);

export default Quiz;
