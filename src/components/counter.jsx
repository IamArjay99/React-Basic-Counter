import React, { Component } from "react";

class Counter extends Component {
  state = {
    counters: [
      {
        name: "Initial Name",
        quantity: 0,
      },
      {
        name: "Name",
        quantity: 2,
      },
    ],
    inputName: "",
    inputQty: 0,
  };

  handleCounter = (event) => {
    event.preventDefault();
    console.log("Submitted form");
    const { inputName, inputQty } = this.state;
    if (inputName !== "" && inputQty >= 0 && inputQty !== "") {
      const counters = [...this.state.counters];
      counters.push({ name: inputName, quantity: parseInt(inputQty) });
      this.setState({
        counters,
        inputName: "",
        inputQty: 0,
      });
    }
  };

  handleName = (event) => {
    const counters = [...this.state.counters];
    const inputName = event.target.value;
    this.setState({
      counters,
      inputName,
    });
  };

  handleQuantity = (event) => {
    const counters = [...this.state.counters];
    const inputQty = event.target.value;
    this.setState({
      counters,
      inputQty,
    });
  };

  handleIncrement = (id) => {
    const counters = [...this.state.counters];
    counters[id].quantity += 1;
    this.setState({
      counters,
    });
  };

  handleDecrement = (id) => {
    const counters = [...this.state.counters];
    if (counters[id].quantity > 0) counters[id].quantity -= 1;
    this.setState({
      counters,
    });
  };

  handleDelete = (id) => {
    const counters = [...this.state.counters];
    const newCounters = counters.filter((item) => item !== counters[id]);
    this.setState({
      counters: newCounters,
    });
  };

  render() {
    return (
      <div className="container mt-5">
        <div className="d-flex justify-content-end mb-2">
          <form onSubmit={this.handleCounter}>
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter name"
              className="mx-1"
              onChange={this.handleName}
              value={this.state.inputName}
            />
            <input
              type="number"
              name=""
              id=""
              placeholder="Enter quantity"
              className="mx-1"
              onChange={this.handleQuantity}
              value={this.state.inputQty}
            />
            <button type="submit" className="btn btn-primary btn-sm mb-1">
              Add new
            </button>
          </form>
        </div>
        <table className="table table-bordered text-center">
          <thead>
            <tr>
              <th>Name</th>
              <th>Quantity</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.counters.map((counter, index) => {
              return (
                <tr key={index}>
                  <td>{counter.name}</td>
                  <td className="text-info">{counter.quantity}</td>
                  <td>
                    <button
                      className="btn btn-success btn-sm"
                      onClick={() => this.handleIncrement(index)}
                    >
                      Increment
                    </button>
                    <button
                      className="btn btn-warning btn-sm mx-1"
                      onClick={() => this.handleDecrement(index)}
                    >
                      Decrement
                    </button>
                    <button
                      className="btn btn-danger btn-sm mx-1"
                      onClick={() => this.handleDelete(index)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <p>Current Name : {this.state.inputName}</p>
        <p>Current Quantity : {this.state.inputQty}</p>
      </div>
    );
  }
}

export default Counter;
