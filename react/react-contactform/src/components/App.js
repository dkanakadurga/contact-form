import React, {Component} from 'react';
import Inputfield from './Inputfield';
import Dob from './Dob';
import axios from 'axios'



class App extends Component {
    constructor(props){
        super(props);
        this.state = {
           
            firstName: '',
            lastName: '',
            Dob:''
        }
    }

    handleClick = () => {
       const contactDetails = {
           "firstname" : this.state.firstName,
           "lastname" : this.state.lastName,
           "Dob" : this.state.Dob
       }
       console.log(contactDetails);
       const promise1 = new Promise((resolve, reject) => {
       axios.post("http://localhost:3000/contact", contactDetails, {
        headers:{
            'content-Type': 'application/json;charset=UTF-8',
              'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': 'true',
                'Access-Control-Allow-Methods': 'DELETE, PUT, GET, POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
                
        }
    }).then(response => {
        
        console.log(response);
    }).catch(err =>{
        console.log(err);
      });
    resolve(contactDetails);
})
promise1.then(value => {
}, reason => {
    console.log(reason);
});

        
        console.log("was clicked");
        console.log(this.state.firstName);
        console.log(this.state.lastName);
        console.log(this.state.Dob);
    }

    updateData = (target, value) => {
        this.setState({ [target]: value });
     console.log(target);

    };
  render() {
       return (
    <div>
       
        <Inputfield name = "firstName"  updateData={this.updateData} >First Name:</Inputfield>
        <Inputfield  name = "lastName" updateData={this.updateData}>Last Name:</Inputfield>
        <Dob name = "Dob" updateData = {this.updateData}>Dob</Dob>
        <button type="button" onClick = {this.handleClick}> Submit </button>
    </div>
    );
}; 
}


// class Inputfield extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { name: ''};
//     }
    

//     handleChange = (event) => {
//       this.setState({name: event.target.value})
//     };
//     render() 
//     {
//         return(
//             <div>
//              <h4>{this.props.name}</h4>
//              <input type = "text" onChange={this.handleChange} value = {this.state.name}></input>
//             </div>
//         )
//     }
// }

export default App;
