import React from "react"

class GetDerivedStateFromProps extends React.Component {
    constructor(props) {
      super(props);
      this.state = {favoritecolor: "red"};
    }
    static getDerivedStateFromProps(props, state) {
        console.log ('getDerivedStateFromProps is called before the render')
        return {favoritecolor: props.favcol };
    }
    render() {
        console.log ('render')
        return (
        <h1>My Favorite Color is {this.state.favoritecolor}</h1>
      );
    }
  }

  export default GetDerivedStateFromProps