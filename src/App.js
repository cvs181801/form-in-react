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
    const {name, value, type, checked} = event.target

    //type === checkbox ? this.setState({ [name]: checked }) : this.setState({ [name]:value })
    //const {name, value} = event.target
    //this.setState({ [name]:value })
  }

  render() {
    return (
      <div className="App">
        <form>
      <input
      type="text"
      name="firstName"
      placeholder="first name"
      onChange={this.handleChange}
      value={this.state.firstName}
      >
      </input>
      <input 
       type="text"
       name="lastName"
       placeholder="last name"
       onChange={this.handleChange}
       value={this.state.lastName}
       ></input>

       <h1>{this.state.firstName} {this.state.lastName}</h1>

       <textarea
        value={"yello"}
       />
      
       <label>
        <input
          type="checkbox"
          name="likesPizza"
          checked={this.state.likesPizza}
          onChange={this.handleChange}
        /> Check this box if you like pizza
       </label> 
       </form>
      </div>
    );
  }
}

export default App;
