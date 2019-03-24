import React, { Component } from "react";
import NavBar from "./components/NavBar";
import AppRouter from "./routes";
import { BrowserRouter as Router } from "react-router-dom";
import SearchBar from "./components/SearchBar";
class Main extends Component {
  componentDidMount() {
    async function fetchImages() {
      const resp = await fetch("/api/images");
      const images = await resp.json();
      console.log(images);
    }
    fetchImages();
  }
  render() {
    return (
      <div>
        <SearchBar />
        <Router>
          <React.Fragment>
            <NavBar />
            <AppRouter />
          </React.Fragment>
        </Router>
      </div>
    );
  }
}
export default Main;
