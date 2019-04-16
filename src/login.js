import React, { Component } from 'react';
import './Login.css'

class login extends Component {
  render(){
     return(
    <section class="top">
      <div class="">
        <input type="text" name="username" value="" placeholder="Username" autofocus/>
      </div>
      <div class="">
        <input type="password" name="password" value="123" placeholder="Password"/>
      </div>
      <div class="Other-option">
        <a class="btn btn-dark btn-lg" href="/todolist">Log In</a>
      </div>
    </section>
    //   <div>
    //     <input type="text" placeholder="username"/>
    //     <input type="password" placeholder="password"/>
    //
    //   </div>
    );
  }
}

export default login;
