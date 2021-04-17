import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component{
  state = {
    name : "sara",
    lastname : "smith",
    age : "27",
    profession : "teacher",
    shows : false
  }
  render(){
return(
  
  <div>
  <button onClick={()=>this.setState({shows : !this.state.shows})}>Click me !</button>
  {
    this.state.shows?(
        <>
  <h1>{this.state.name}</h1>
<h1>{this.state.lastname}</h1>
<h1>{this.state.age}</h1>
<h1>{this.state.profession}</h1>

        </>
    ) :('')
  }

</div>
)
 
    
  }
 

  }

export default App;
