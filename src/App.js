import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import Dog from "./Dog";
import Cat from "./Cat";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/cat" element={<Cat/>} />
          <Route path="/dog" element={<Dog/>} />
        </Routes>
      </div>
    );
  }
}

export default App;
