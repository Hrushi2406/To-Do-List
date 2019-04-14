  import React, { Component } from 'react';
  import './styles.css'




  class Form extends Component {

  constructor(props) {
    super(props)
    this.state = {
        input: '',
      newListIteam: []
    }
    this.changedText = this.changedText.bind(this)
  }

  changedText(e){
  this.setState({
      input: e.target.value
  });
  }

  submit(input){
    this.setState(state => ({
      newListIteam: [...state.newListIteam, input],
      input: ''
    }))
  }




  render() {
    return(
        <div>
            <div className="box" id="heading">
              <h1>To-Do List</h1>
            </div>
          <div className="box">
         {
            this.state.newListIteam.map( (item) =>   <div className="item">
              <input type="checkbox" />
              <p>{item}</p>
             </div>)
            }
          <div className="item input">
            <input type = "text"
              onChange={this.changedText}
              value={this.state.input}
              placeholder="Add your to do" />
            <button className="btn btn-lg btn-info" onClick={() => this.submit(this.state.input)}>+</button>
                </div>
            </div>
        </div>
    );
  }


  }


  export default Form;
