import React, { Component } from 'react'

export default class ShouldComponentUpdate extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  shouldComponentUpdate() {
    console.log("============> shouldComponentUpdate",this.state.count);
    if(this.state.count >= 5){
      return false
    }
    return true
  }

  //  shouldComponentUpdate(nextProps, nextState) {
  //   console.log("Checking update condition...");
  //   console.log("nextProps", nextProps);
  //   console.log("nextState", nextState);
  //   return nextState.count % 2 === 0; 
  // }

  render() {
    return (
      <div style={{ padding: "1rem" }}>
        <h3>Should Component Update</h3>

        <h4>Count :- {this.state.count}</h4>

        <button onClick={() => this.setState({ count: this.state.count + 1 })}>Increment</button>
      </div>
    )
  }
}
