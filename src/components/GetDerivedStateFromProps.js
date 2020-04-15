import React from "react"

class GetDerivedStateFromProps extends React.Component {
    constructor(props) {
      super(props);
      this.state = {favoritecolor: "red"};
    }
    static getDerivedStateFromProps(props, state) {
        console.log ('getDerivedStateFromProps is called before the render')
        return {favoritecolor: "blue" };
    }
    render() {
        console.log ('render')
        return (
        <div>
            <h1>My Favorite Color is {this.state.favoritecolor}</h1>
            <h3>open your console</h3>
        </div>
      );
    }
  }

  export default GetDerivedStateFromProps