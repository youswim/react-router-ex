import React from "react";
import { Routes, Route, useParams, Link, useNavigate } from "react-router-dom";

import Home from "./Home";
import Dog from "./Dog";
import Cat from "./Cat";

const App = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/cat/nabi')
  }

  const handleGoBack = () => {
    navigate(-1)
  }

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
      <button onClick={handleGoBack}>이전으로 가기</button>
      <button onClick={handleNavigation}>고양이로 가기</button>
    </div>
  );
}

export default App;
