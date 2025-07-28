// State :- its is varible . we can store a data 
// state :- to chnage data same in file
// construct :- this.state as object 
// we can data change body this.setstate
// read and change 


import React, { Component } from 'react'
import Image from './Image';

class ClassState extends Component {
  constructor(){
    super();
    this.state = {
        name : "Vivek",
        counter : 0,
        isImage : true
    }
  }
  
    render() {
    //  let name ="vivek";
        console.log(this.state.name)
    return (
      <div>
        <h1>hello {this.state.name}</h1>
        {/* inbuilt as react class */}
        <button onClick={()=>this.setState({name : "divya"})}>Change name</button>
        <button onClick={()=>this.setState({name:"jiger sir"})}>Change name2</button>

        <h1>Hello count : {this.state.counter}</h1>

        {/* sum = sum + 1 */}
        <button onClick={()=>this.setState({counter : this.state.counter + 1})}>Increment</button>

        <button onClick={()=>this.setState({counter:this.state.counter - 1})}>Decrement</button>

        <button onClick={()=>this.setState({counter:this.state.counter = 0})}>Zero old</button>
         <button onClick={()=>this.setState({counter:this.state.counter * 0})}>Zero multi</button>

          <button onClick={()=>this.setState({counter: 0})}>Zero</button>

            <br /> <br />
          <button onClick={()=>this.setState({isImage : false})}> Hide </button>
          <button onClick={()=>this.setState({isImage:true})}>Show</button>

          <button onClick={()=>this.setState()}>Toggle</button>

        {(this.state.isImage)?<Image />:null}
        
      </div>
    )
  }
}

export default ClassState
