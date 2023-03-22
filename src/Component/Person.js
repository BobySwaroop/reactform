import React, { Component } from "react";


class Person extends Component{
    constructor(props){
        super(props);
        this.state = {
            name:"Boby Swaroop",
            city:"lucknow",
        }
    

    }
    buttonClickHandler = () =>{
        console.log(this.state);
        
    }
    
    render() {
        return (
            <div>
              <h2>  Name : This is class based Components and developer is {this.state.name} </h2>
              <button type="button" onClick={this.buttonClickHandler}>Click</button>
              
            </div>
        )
    }
}


export default Person