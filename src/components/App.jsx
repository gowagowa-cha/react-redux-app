import "./app.less";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { reposAction } from "../redux/reposReducer";

const App = () => {
  const dispatch = useDispatch()
  const count = useSelector(state => state.repos.count)

  return (
    <div className="app">
      <h1>Hello word</h1>
      <button onClick={() => dispatch(reposAction(5))}>press</button>
      <div>{count}</div>
    </div>
  );
};

export default App;
