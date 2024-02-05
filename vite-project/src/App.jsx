// eslint-disable-next-line no-unused-vars
import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: ["ready", "set", "GO"],
      text: "",
    };

    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(event) {
    event.preventDefault();
    if (this.state.text.trim() !== "") {
      const newArr = [...this.state.list, this.state.text.trim()];
      this.setState({ list: newArr, text: "" });
    }

  }
  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            name="text"
            id="text"
            value={this.state.text}
            onChange={(e) => {
              this.setState({ text: e.target.value });
            }}
          />
          <button type="submit">Add</button>
        </form>

        <ul>
          {this.state.list.map((item, index) => {
            return <li key={item + index}>{item}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default App;
