import React, {Fragment} from 'react';
import './App.css';

//components
import InputItems from "./components/InputItems";
import ListItems from "./components/ListItems";

function App() {
  return (
  <Fragment>
    <div className="container">
      <InputItems />
      <ListItems />
    </div>
  </Fragment>);
}

export default App;
