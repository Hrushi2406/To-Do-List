import React, { Component } from 'react';
import {BrowserRouter,Route} from "react-router-dom";
import form from './Form';
import login from './login';

class App extends Component {

  render(){
    return(
      <BrowserRouter>
        <Route exact path="/" component={login}/>
        <Route exact path="/todolist" component={form}/>
      </BrowserRouter>


    );
  }
}

export default App;
