import React, { Component } from "react";
import "./App.css";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    axios.get("/whateverIwant").then(results => {
      this.setState({ data: results.data });
    });
  }

  render() {
    return (
      <div className="App">
        {this.state.data.map((val, i) => {
          return (
            <div>
              <h1>{val.name}</h1>
              <h3>{val.description}</h3>
              <img src={val.image_url} />
              <p>{val.price}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
