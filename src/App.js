import React from 'react'
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      firstName: "",
      lastName: "",
      likesPizza: true
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

       <textarea
        value="yello"
       />
       <p>Check this box if you like pizza</p>
       <input
        type="checkbox"
        name="likesPizza"
        checked={this.state.likesPizza}
        onChange={this.handleChange}
       ></input>
      </div>
    );
  }
}

export default App;
