import React, {Component} from 'react';
import ReactDOM from 'react-dom';
// import Description from './Description.jsx';
// console.log('This is description', Description);

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange (event) {
    this.setState({value: event.target.value});
  }

  handleSubmit (event) {
    console.log(this.state.value);
    event.preventDefault();
  }

  render () {
    // console.log(window.Description)
    return (
     <div>
      <form onSubmit={this.handleSubmit}>
        <label>
        Enter an id
        <input type="text" value={this.state.value} onChange={this.handleChange}></input>
        </label>
        <input type="submit" value="Submit"/>
      </form> 
     
      <div className="header">header and search</div>
        <div className="body">
          <div id="image" className="graph">Graph</div>
          <div id="description" className="description"><Description /></div>
          <div id="action" className="action">Action</div>
        </div>
       
        <div id="carousel" className="carousel">Carousel</div>
        <div id="footer" className="footer">Review and Ratings</div>
      </div>    
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));