import "./App.css";
import React, { Component } from "react";
import Header from "./components/headers/Header";
import Body from "./components/body/body";
import Footer from './components/footer/Footer'

class App extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Body></Body>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
