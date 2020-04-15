import React, { Component } from 'react';
import ShouldComponentUpdate from  './components/ShouldComponentUpdate';
import Header from './components/Header';
import ComponentDidMount from './components/ComponentDidMount';
import ComponentDidUpdate from './components/ComponentDidUpdate';
import ComponentWillUnmount from './components/ComponentWillUnmount';
import Home from './components/Home';
import GetDerivedStateFromProps from './components/GetDerivedStateFromProps';

import { Switch , Route } from 'react-router-dom' ;



class App extends Component {
 
    render() {
      return (
        <div>
          <Header />  

          <Switch>
            <Route exact path="/" component = {Home} />
            <Route path="/componentdidmount" component = {ComponentDidMount} />
            <Route path="/componentdidupdate" component = {ComponentDidUpdate} />
            <Route path="/componentwillunmount" component = {ComponentWillUnmount} />
            <Route path="/shouldcomponentupdate" component = {ShouldComponentUpdate} />
            <Route path="/getderivedstatefromprops" component = {GetDerivedStateFromProps} />
          </Switch>
        </div>  

      
      )
    }

  }


export default App;
