import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";

export const Calculadora = styled.main`
  background: purple;
  max-width: 250px;
  width: 50%;
  height: 300px;
  margin: 0 auto;
  border-radius: 5px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  h1 {
    color: gray;
  }

  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input {
    outline: none;
    padding: 0.7rem;
    border-radius: 5px;
    border: none;
  }

  button {
    padding: 0.4rem;
    width: 40px;
    margin-left: 5px;
    cursor: pointer;
    color: blueviolet;
    background-color: white;
    border: none;
    border-radius: 5px;
  }

  button:last-child {
    background-color: orange;
    color: white;
  }

  h2 {
    background-color: white;
    width: 50%;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export class App extends Component {
  state = {
    numero1: "",
    numero2: "",
    resultado: ""
  };

  primeiroInput = (event) => {
    this.setState({
      numero1: Number(event.target.value)
    });
  };

  segundoInput = (event) => {
    this.setState({
      numero2: Number(event.target.value)
    });
  };

  soma = () => {
    this.setState({
      resultado: this.state.numero1 + this.state.numero2
    });
  };

  apagar = () => {
    this.setState({
      numero1: "",
      numero2: "",
      resultado: ""
    });
  };

  render() {
    return (
      <>
        <Header />
        <Calculadora>
          <h1>Calculadora</h1>
          <input
            onChange={this.primeiroInput}
            type="number"
            value={this.state.numero1}
          />
          <input
            onChange={this.segundoInput}
            type="number"
            value={this.state.numero2}
          />
          <div>
            <button onClick={this.soma}>+</button>
            <button>-</button>
            <button>/</button>
            <button>*</button>
            <button onClick={this.apagar}>c</button>
          </div>
          <h2>{this.state.resultado}</h2>
        </Calculadora>
        <Footer />
      </>
    );
  }
}

export default App;
