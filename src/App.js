import React, { Component } from 'react';
import Clima from './components/Clima';

class App extends Component {
  render() {
    return (
      <div style={{display: "flex", height: "100%"}}>
        <Clima/>
      </div>
    );
  }
}

export default App;
