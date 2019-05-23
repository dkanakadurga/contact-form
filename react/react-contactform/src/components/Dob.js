import React, { Component } from 'react';

class Dob extends Component {
    constructor(props) {
        super(props);
       
    }
    
    
  render() {
    return( 
        <div>
            <p>{this.props.children}</p>
            <input type ="Date" onChange={e=>this.props.updateData(this.props.name , e.target.value)}></input>
        </div>

    );
  };
}


export default Dob;