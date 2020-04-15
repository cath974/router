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
  
  nextValue = () => {
    let counterValue = this.state.currentNumber;
    counterValue += 1;
    this.setState ({currentNumber:counterValue})
  }
  
  render() {
    console.log ('render');
    return (
      <div className="number-viewer">
         <h1>Component did Mount</h1>
        <p>{this.state.quote}</p>
        <button onClick={this.nextValue}>Next Value</button>
        <p>Current Value: {this.state.currentNumber}</p>
        <h3>open your console</h3>
      </div>
    );
  }
}

export default ComponentDidMount;
