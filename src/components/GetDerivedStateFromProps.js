import React from "react"


class GetDerivedStateFromProps extends React.Component {
    constructor(props) {
      super(props);
      this.state = {favoritecolor: 'red'};
    }
    static getDerivedStateFromProps(props, state) {
        console.log ('getDerivedStateFromProps is called before the render')
        return {favoritecolor: "blue" };
    }

    nextValue = () => {
      let counterValue = this.state.currentNumber;
      counterValue += 1;
      this.setState ({currentNumber:counterValue})
    }


    render() {
        console.log ('render')
        return (
        <div>
            <h1>My Favorite Color is {this.state.favoritecolor}</h1>
            <button onClick={this.nextValue}>new fav color</button>
            <h3>open your console</h3>
        </div>
      );
    }
  }

  export default GetDerivedStateFromProps