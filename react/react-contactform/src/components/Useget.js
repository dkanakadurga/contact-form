import React, {Component} from 'react';
import Inputfield from './Inputfield';
import Dob from './Dob';
import axios from 'axios';

class Useget extends Component {
    constructor(props){
        super(props);
        this.state = {
           
            firstName: '',
            lastName: '',
            Dob:''
        }
    }
    handleClick = () => {
        console.log("button clickled");

        axios.get("http://localhost:3000/employee")
                 .then(response => { 
                    console.log(response);
                 }).catch(err =>{
                              console.log(err);
                         });


}
 
updateData = (target, value) => {
        this.setState({ [target]: value });
     console.log(value);

    };



    render() {
        return(
            <div>
                
        <Inputfield name = "firstName"  updateData={this.updateData} >First Name:</Inputfield>
        <Inputfield  name = "lastName" updateData={this.updateData}>Last Name:</Inputfield>
        <Dob name = "Dob" updateData = {this.updateData}>Dob</Dob>
        <button type="button" onClick = {this.handleClick}> Submit </button>
            </div>
        );
    };
}

export default Useget;