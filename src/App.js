import React from "react";
import { Routes, Route, useParams, Link } from "react-router-dom";

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

        <div>
          <Link to="/">Home으로 가기</Link>
          <Link to="/cat/nabi">Cat으로 가기</Link>
          <Link to="/dog">Dog으로 가기</Link>
        </div>

        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/cat" element={<Cat/>} />
          <Route path="/cat/:cat_name" element={<Cat/>} />
          <Route path="/dog" element={<Dog/>} />
        </Routes>
      </div>
    );
  }
}

export default App;
