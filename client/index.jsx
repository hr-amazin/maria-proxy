import React, {useState} from 'react';
import ReactDOM from 'react-dom';
// import Description from './Description.jsx';
// console.log('This is description', Description);

const App = () => {
  
  const [id, setId] = useState(1001);


  function handleChange(event) {
    setId(parseInt(event.target.value));
  }

  function handleSubmit (event) {
    console.log(id);
    event.preventDefault();
  }

  return (
     <div>
      <form onSubmit={handleSubmit}>
        <label>
        Enter an id
        <input type="text" value={id} onChange={handleChange}></input>
        </label>
        <input type="submit" value="Submit"/>
      </form> 
     
      <div className="header">header and search</div>
      <div className="body">
        <div id="image" className="graph" ><Images uuid={id}/></div>
        <div id="description" className="description"><Description id={id}/></div>
        <div id="action" className="action"><Action id={id}/></div>
      </div>
       
      <div id="carousel" className="carousel">Carousel</div>
      <div id="footer" className="footer">Review and Ratings</div>
    </div>    
  )

}

ReactDOM.render(<App/>, document.getElementById('app'));