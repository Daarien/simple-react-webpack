import React from "react";
import { Button } from "react-bootstrap";

class Counter extends React.Component {
  state = {
    count: 0
  };

  handlePlus = () => {
    this.setState(state => ({ count: state.count + 1 }));
  };

  handleMinus = () => {
    this.setState(state => ({ count: state.count - 1 }));
  };

  handleReset = () => {
    this.setState({ count: 0 });
  };

  render() {
    const { count } = this.state;
    return (
      <div id="counter-page">
        <p>Count: {count}</p>
        <Button variant="info" onClick={this.handlePlus}>
          count + 1
        </Button>
        <Button variant="danger" onClick={this.handleMinus}>
          count - 1
        </Button>
        <Button variant="warning" onClick={this.handleReset}>
          Reset
        </Button>
      </div>
    );
  }
}

export default Counter;
