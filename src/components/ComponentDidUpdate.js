import React from "react"
import randomcolor from "randomcolor"

class ComponentDidUpdate extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 0,
            color: ""
        }
       
    }
    
    increment = () => {
        let counterValue = this.state.count;
        counterValue += 1;
        this.setState ({count:counterValue})
      }
   
        
    componentDidUpdate(prevProps, prevState) {
        if(prevState.count !== this.state.count) {
            const newColor = randomcolor()
            this.setState({color: newColor})
        }
    }
    
    render() {
        return (
            <div>
                 <h1>Component did Update</h1>
                <h3 style={{color: this.state.color}}>{this.state.count}</h3>
                <button onClick={this.increment}>
                    Increment!
                </button>
               
            </div>
        )
    }
}

export default ComponentDidUpdate