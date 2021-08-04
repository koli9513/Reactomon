import React, { Component } from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Navbar from './Components/Navbar'

class App extends Component {
 
  render() {
    return (
    <Router>
        <div className="App">
        <div className="container">
            <Navbar/>
            <p>
            hello
            </p>
        </div>
        </div>
    </Router>
  );
}
}

export default App;
