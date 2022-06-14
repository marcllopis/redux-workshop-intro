import React, { useState } from "react";
import "./App.css";

// function App() {
//   let [title] = useState("My redux app");
//   let [counter, setCounter] = useState(0);

//   const increase = () => setCounter(counter + 1);
//   const decrease = () => setCounter(counter - 1);

//   return (
//     <div className="App">
//       <h1>Welcome to Redux</h1>
//       <h2>{title}</h2>
//       <hr />
//       <h3>Counter: {counter}</h3>
//       <button onClick={increase}>+</button>
//       <button onClick={decrease}>-</button>
//     </div>
//   );
// }

/*
Install redux packages
Wrap our App.js in the store provider (this happens on index.js)
Create a store
   - Activate redux dev tools
Create the actions
Create the reducers
Connect App.js to the store and receive the state as props
*/

import { connect } from "react-redux";
import { increaseCounter, decreaseCounter } from "./actions";

function App(props) {
  const increase = () => props.dispatch(increaseCounter(props.count));
  const decrease = () => props.dispatch(decreaseCounter(props.count));

  return (
    <div className="App">
      <h1>Welcome to Redux</h1>
      <h2>{props.title}</h2>
      <hr />
      <h3>Counter: {props.count}</h3>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    count: state.count,
    title: state.title,
  };
}

export default connect(mapStateToProps)(App);
