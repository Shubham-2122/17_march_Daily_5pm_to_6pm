import React, { Component } from 'react'

class ClassLife extends Component {
    constructor()
    {
        super();
        this.state = {
            name : "shubham"
        }
    }
    // Mounting
    componentDidMount()
    {
        console.log("compoennt initial value")
    }
    // shouldComponentUpdate(){
    //     console.log("hello")
    // }
    // update
    componentDidUpdate()
    {
        console.log("compeont change data")
    }

    componentWillUnmount(){
        console.log("null value")
    }
  render() {
    
    
    
    return (
      <div>

        3 phase 
        1) mouting :- initial phase compoent did mouting
        2) update :- initial state change 
        3) unmouting :- mull no change three
        <h1>This for life cycle</h1>

        <h1>hello {this.state.name}</h1>

        <button onClick={()=>this.setState({name : "vivek"})}>Change name</button>
      </div>
    )
  }
}

export default ClassLife
