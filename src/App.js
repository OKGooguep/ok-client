import React from "react";
import { HashRouter, Route } from "react-router-dom";
import "./App.css";
import KakaoMap from "./pages/kakaomap";

function App() {
  return (
    <HashRouter>
      <Route path="/" exact={true} component={KakaoMap} />
    </HashRouter>
  );
}

export default App;
