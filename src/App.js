import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import RMDB from "./Containers/RMDB/RMDB";

import "./App.css";
import Store from "./Redux/Store";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={Store}>
          <BrowserRouter>
            <RMDB />
          </BrowserRouter>
        </Provider>
      </div>
    );
  }
}

export default App;
