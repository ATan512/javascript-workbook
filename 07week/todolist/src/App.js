import React, { Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      inputValue: ''
    }
  }

//function to handle when the input field is changed
  handleInputChange = (e) => {
    this.setState({
      inputValue: e.target.value
    })
  };

//function to clear what the user entered
  handleClearInput = () => {
    this.setState({
      inputValue: ''
    })
  };

//function to add the items to the list array
  handleAdd = () => {
    const list = this.state.list;
    list.push(this.state.inputValue);
    this.setState({
      list: list,
      inputValue: ''
    })
  };

//this is what's seen on the page
  render() {
    return (
      <div>
        <h2>To Do List</h2>
        <p>Things to complete today</p>
        <input value = {this.state.inputValue} type = "text" onChange = {this.handleInputChange}/>
        <button onClick = {this.handleAdd}>Add to your list</button>
        <button onClick = {this.handleClearInput}>Clear input</button>
        <ol>
          {this.list}
          </ol>
      </div>
    );
  }
}

export default App;
