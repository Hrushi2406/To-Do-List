  import React, { Component } from 'react';
  import './styles.css'
  import trash from './trash.svg'




  class Form extends Component {

  constructor(props) {
    super(props)
    this.state = {
        input: '',
      toDos: [],
      currentFilter: {checked: false, name: 'HRusi'}
    }
    this.textChangeHandler = this.textChangeHandler.bind(this)
    this.delete = this.delete.bind(this)
    this.filter = this.filter.bind(this)
    this.checkboxHandler = this.checkboxHandler.bind(this)
  }

  textChangeHandler(e){
  this.setState({
      input: e.target.value
  });
}

  submit(e){

  var list = this.state.toDos.filter(list => list.checked == this.state.currentFilter.cond);
  console.log(list);
    this.setState(state => ({
      toDos: [...this.state.toDos,{checked: false, item: e}],
      currentFilter: {checked: false , name:''},
      input: ''
    }))
  }

delete(e){

  var input = e.target.value;
  var editedList = this.state.toDos;
    for (var i=0; i<editedList.length; i++) {
    if (editedList[i].item === input) {
        editedList.splice(i, 1);
    }
  }

  this.setState(state => ({
    toDos: editedList
  }))

  }


checkboxHandler(e){
var checkedItem;
  var input = e.target.value;
  var listOfTodos = this.state.toDos;
    for (var i=0; i<listOfTodos.length; i++) {
    if (listOfTodos[i].item === input) {
      this.state.toDos[i].checked = e.target.checked;
    }
  }
  if(e.target.checked == true)
  {e.target.checked = false}
  else{e.target.checked = true}

  console.log(listOfTodos);
  this.setState({
    input:'',
    toDos: listOfTodos
  });

}

filter(e){
  console.log(e.target.value);
  var selectedFilter = e.target.value
  if(selectedFilter === "Pending"){
    this.setState({
      currentFilter: {checked: false , name: e.target.value }
    })
  }
  if(selectedFilter === "Completed"){
    this.setState({
      currentFilter: {checked: true , name: e.target.value }
    })
  }

}

checkit(e){
if(e.target.checked == true)
    {e.target.checked = true}
}



  render() {
    return(
        <div>
            <div className="box" id="heading">
              <h1>To-Do List</h1>
            </div>

            <div className="filterBox">
                <select className = "filter"  value= {this.state.toDos.checked} onChange={this.filter}>

                  <option value="Pending">Pending</option>
                  <option value="Completed">Completed</option>
                </select>
            </div>

          <div className="box">

            {
                // this.state.toDos.filter(list => list.checked == true);

              this.state.toDos.filter(list => list.checked == this.state.currentFilter.checked).map((list,index) =>   <div className="item" key={index}>
                <input type="checkbox" value={list.item} onClick={this.checkboxHandler}  input />
                <p >{list.item}</p>
                <button type="submit" className="button" value={list.item} onClick={this.delete}><i class="fas fa-trash-alt fa-1x"></i></button>
               </div>)
            }

          <div className="item input">

            <input type = "text"
              onChange={this.textChangeHandler}
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
