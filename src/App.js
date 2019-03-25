import React, { Component } from "react";
import NavBar from "./components/NavBar";
import AppRouter from "./routes";
import { BrowserRouter as Router } from "react-router-dom";
import SearchBar from "./components/SearchBar";

class App extends Component {
  componentDidMount() {
    async function fetchImages() {
      const resp = await fetch("/api/images");
      const images = await resp.json();
      images.map(image => {
        return <img src={image.url} key={image.id} alt={image.description} />;
      });
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

export default App;
