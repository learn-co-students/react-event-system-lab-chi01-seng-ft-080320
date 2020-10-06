// Code EyesOnMe Component Here
import React, { Component } from 'react';

class EyesOnMe extends Component {
    constructor(props){
        super()
   
    }
    focusHandler = (e) => {
        console.log('Good!')
    }
    blurHandler = (e) => {
        console.log('Hey! Eyes on me!')
    }

    render() {
        return (
            <button onFocus ={this.focusHandler} onBlur ={this.blurHandler}></button>
        )
      }
    
  }
  
  export default EyesOnMe
  