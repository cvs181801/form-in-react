import React from 'react'
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      firstName: "",
      lastName: ""
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const {name,value} = event.target;
    this.setState({
      [name]:value
    })

  }
  render() {
    return (
      <div className="App">
      <input
      type="text"
      name="firstName"
      placehoder="first name"
      onChange={this.handleChange}
      >
      </input>
      <input 
       type="text"
       name="lastName"
       placehoder="last name"
       onChange={this.handleChange}
       ></input>

       <h1>{this.state.firstName} {this.state.lastName}</h1>
      </div>
    );
  }
}

export default App;
