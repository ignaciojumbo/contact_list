import React, { Component } from "react";
import PropTypes from "prop-types";

export default class greeting extends Component {
  static propTypes = {
    prop: PropTypes,
    name: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      age: 22,
    };
  }

  render() {
    return (
      <div>
        <h1>HOLA {this.props.name}</h1>
        <h2>Tu edad es de: {this.state.age}</h2>


        <div>
          <button onClick={this.birthday}>Cumplir años</button>
        </div>
      </div>
    );
  }

  birthday = () => {
    this.setState((prevState) => ({
      age: prevState.age + 1,
    }));
  };
}
