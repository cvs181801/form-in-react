import React from 'react'
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      firstName: "",
      lastName: "",
      likesPizza: true,
      pineapple: ""
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const {name, value, type, checked} = event.target
    type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]:value }) //we need to wrap "checkbox" in wuotes. Similar to how we do this when referencing an atribute in the DOM api syntax (example: elementName.getAttribute("class")
  }

  render() {
    const pineappleText = this.state.pineapple === "yes" ? "You like pineapple on pizza!" : "You do not like pinapple on pizza, or you haven't answered yet"
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
        <br/>
        <p>Pineapple on pizza? </p>
        <br/>
       <label>
        <input
          type="radio"
          name="pineapple"
          checked={this.state.pineapple === "yes"}
          onChange={this.handleChange}
          value="yes"
        /> Yes
       </label> 

       <label>
        <input
          type="radio"
          name="pineapple"
          checked={this.state.pineapple === "no"}
          onChange={this.handleChange}
          value="no"
        /> No
       </label> 
       </form>
     
       <h2>{pineappleText}</h2>
      </div>
    );
  }
}

export default App;
