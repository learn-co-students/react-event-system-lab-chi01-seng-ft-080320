
import React from 'react';

class Keypad extends React.Component {

  InputPassword = () => console.log('Entering password...')

  render() {
    return (
      <div>
        <input 
          type="password"
          onKeyUp={this.InputPassword} 
        />
      </div>
    )
  }
}

export default Keypad;