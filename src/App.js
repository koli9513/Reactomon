import React, { Component } from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom'

class App extends Component {
 
  render() {
    return (
    <Router>
      <div >
        <header>
          <p>
            hello
          </p>
        </header>
      </div>
    </Router>
  );
}
}

export default App;
