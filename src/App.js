import React, { Component } from 'react';
import { Switch , Route } from 'react-router-dom' ;

import Header from './Header';

class App extends Component {
 
    render() {
      return (
        <div>
          <Header />  

          <Switch>
            <Route exact path="/" component = {Home} />
            <Route exact path="/stuff" component = {Stuff} />
          </Switch>
        </div>  

      
      )
    }

  }


const Home = () => (
    <div> Home </div>
  )
  
const Stuff = () => (
    <div> STUFF </div>
    )

export default App;
