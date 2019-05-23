import React, { Component } from 'react';

class Inputfield extends Component {
    constructor(props) {
        super(props);
       
    }
    

   
    render() {
        return(
            <div>
             <p>{this.props.children}</p>
               <input type = "text" name = {this.props.name} onChange = {e=>this.props.updateData(this.props.name , e.target.value)}/>
            </div>
        );
    };
}



export default Inputfield;