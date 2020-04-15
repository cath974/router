import React from 'react';
import axios from "axios";

class ComponentDidMount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote:'',
      currentNumber: 1
    };
  }
 
  componentDidMount() {
    console.log ('componentDidMount')
    axios
    .get("https://thesimpsonsquoteapi.glitch.me/quotes")
    .then(response => response.data)
    .then(data => {
      this.setState({quote: data[0].quote});
    });
  }
  
  nextValue() {
    this.setState((prevState, props) => {
      return {
        currentNumber: prevState.currentNumber + 1
      };
    });
  }
  
  render() {
    console.log ('render');
    return (
      <div className="number-viewer">
         <h1>Component did Mount</h1>
        <p>{this.state.quote}</p>
        <button onClick={() => this.nextValue()}>Next Value</button>
        <p>Current Value: {this.state.currentNumber}</p>
      </div>
    );
  }
}

export default ComponentDidMount;
