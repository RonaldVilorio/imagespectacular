import React, { Component } from "react";
import NavBar from "./components/NavBar";
import AppRouter from "./routes";
import { BrowserRouter as Router } from "react-router-dom";
class Main extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <NavBar />
            <AppRouter />
          </div>
        </Router>
      </div>
    );
  }
}
export default Main;
