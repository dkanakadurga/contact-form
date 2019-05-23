import React, {Component} from 'react';
import axios from 'axios';
import ReactTable from "react-table";
import "react-table/react-table.css";
//import styles from '../../public/style.css';
import Table from 'react-bootstrap/Table';
//const Shuffle = window.Shuffle;





class DisplayTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emprec: []
        }
        this.element = React.createRef();
        this.sizer = React.createRef();
        // this.shuffleInstance = new Shuffle(this.element, {
        //     itemSelector: '.empTable',
        //     sizer: this.sizer
        // });
        
}

componentDidMount() {
    axios.get("http://localhost:3000/employee")
    .then(response => { 
       
       console.log(response.data);
       let emprec = response.data.map(obj => (
           
           {
            EmployeeId : obj.EmployeeId,
            EmployeeName: obj.EmployeeName,
            lastname: obj.lastname,
            DOB: obj.DOB}   
           ))
       this.setState({emprec});
          
       }).catch(err =>{
                 console.log(err);
            });

    //    this.shuffle = new Shuffle(this.element.current, {
    //        itemSelector: '.empTable',
    //        sizer: this.sizer.current,
    //    });

}
compareBy(key) {
    return function(a, b)
    {
        if (a[key] < b[key]) return -1;
        if (a[key] > b[key]) return 1;
        return 0;
      };
    }
     
    

sortRow(key) {
  
    let arrayCopy = [...this.state.emprec];
   
    arrayCopy.sort(this.compareBy(key));
    
    this.setState({emprec: arrayCopy});
}

render() {
    if(this.state.emprec[0])
     {
         var date1 = new Date(this.state.emprec[0].DOB);
       
     }

    let table1 = (
   
        <Table className = "empTable">
       
       
               <thead>
                <tr>
                    <th><a href = "#" onClick = {() => this.sortRow('EmployeeId')}>EmployeeId</a></th>
                    <th><a href = "#" onClick = {() => this.sortRow('EmployeeName')}>EmployeeName</a></th>
                    <th><a href = "#" onClick = {() => this.sortRow('lastname')}>lastname</a></th>
                    <th><a href = "#"onClick = {() => this.sortRow('DOB')}>DOB</a></th>
                </tr>
                </thead>
            {this.state.emprec.map((rec, key) =>
                <tbody>
                    
                <tr key = {key} > 
                <td>{rec.EmployeeId}</td>
                <td>{rec.EmployeeName}</td>
                <td>{rec.lastname}</td>
                <td>{ new Date(rec.DOB).toDateString()}</td>
            </tr> 
            </tbody>
            
            )}
        </Table>
          
     );

     return table1 
    }

               }
export default DisplayTable;