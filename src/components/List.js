import React from "react";
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return { articles: state.articles }
};


const mapDispatchToProps = dispatch => {
  return {
    addArticle: article => dispatch(addArticle(article))
  };
};

class ConnectedList extends React.Component {
  constructor() {
      super();
      this.state = {
        title: ""
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
      this.setState({ [event.target.id]: event.target.value });
    }
    handleSubmit(event) {
      event.preventDefault();
      const { title } = this.state;
      const id = 2;
      this.props.addArticle({ title, id });
      this.setState({ title: "" });
    }


return(){

return(<div>
  <ul>
    {articles.map(el => (
      <li key={el.id}>
        {el.title}
      </li>
    ))}
  </ul>

  <form onSubmit={this.handleSubmit}>
       <div className="form-group">
         <label htmlFor="title">Title</label>
         <input
           type="text"
           className="form-control"
           id="title"
           value={title}
           onChange={this.handleChange}
         />
       </div>
       <button type="submit" className="btn btn-success btn-lg">
         SAVE
       </button>
     </form>
  </div>);
}

};



const List = connect(mapStateToProps, mapDispatchToProps)(ConnectedList);
export default List;
