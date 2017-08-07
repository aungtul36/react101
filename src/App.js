import React, { Component } from 'react'
import './App.css'

class App extends Component {
  state  = {
    num1: 0,
    num2: 0,
    result: 0
  }
  num1Change = (e) => {
    this.setState({
      num1: e.target.value
    })
  }
  num2Change = (e) => {
    this.setState({
      num2: e.target.value
    })
  }
  clickSubmit = () => {
    this.setState({
      result: parseInt(this.state.num1) + parseInt(this.state.num2)
    })
  }
  render () {
    const { num1, num2, result } = this.state
    return (
      <div>
        num1 <input type="text" onChange={this.num1Change} /> <br/>
        num2 <input type="text" onChange={this.num2Change} />
        <button onClick={this.clickSubmit} >Submit</button>
        <h1> { result } </h1>
      </div>
    )
  }
}

export default App
