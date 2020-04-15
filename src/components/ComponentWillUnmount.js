import React from "react"



class ComponentWillUnmount extends React.Component {
    constructor()
        {
         super();
         this.state = {show: false}  
        }
        
        render(){
            return(
            <div>
                <h1>Component will Unmount</h1>
                {this.state.show? <Child /> : null}
                <button
                onClick={() => {this.setState({show: !this.state.show})}}
                >
                    Toogle Child
                </button>
            </div>
            )
        }
}
export default ComponentWillUnmount

class Child extends React.Component {
    
    componentWillUnmount()
    {
        alert("The component named Child is about to be unmounted.");
    }
    render(){
        return (
            <div>
                <h2>Child Component</h2>
            </div>
        )
    }
}