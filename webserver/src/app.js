const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
//const moment = require('moment');
const cors = require('cors');

//let contact = require("./contact")

// console.log(__dirname)
// console.log(path.join(__dirname, '../public'))

const app= express()
const publicDirectoryPath = path.join(__dirname, '../public')
//app.use('/contact', contact)
app.use(cors());

app.set('view engine', 'hbs')

app.use(express.static(publicDirectoryPath))





app.get('', (req, res) => {
    res.render('index', {
        title: 'Contact Form',
       
    })
})

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/contact', (req, res) => {

   if(!req.body.firstname){
       res.json({"sucess" : false,
    "errorMsg" : "Firstname is missing"})
        
    }else if(!req.body.lastname) {
        res.json({"sucess" : false,
        "errorMsg" : "Lastname is missing"})

    }else if(!req.body.dob === undefined) {
        res.json({"sucess" : false,
    "errorMsg" : "Dob is missing"})
    }else {
       
    res.send(`you have sent ${req.body.firstname}
    you have sent ${req.body.lastname} 
    you have sent ${req.body.dob}` )
     }
});

// app.put('/contact', (req, res) => {
//     res.send(`updated ${req.body.firstname}`)
// })

// app.get('/contact', (req, res) => {
//     fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
       
//        res.end( data );
//     });
//  })


// app.delete('/contact', (req, res) => {
   
//     fs.readFile(__dirname + "/" + "users.json", 'utf8', (err,data) => {
//         data = JSON.parse(data );
//         delete data["user" +2];
//         res.end( JSON.stringify(data));
//     });
// })
app.post('/employee', (req, res) => {
    if(req.body.employeename === undefined){
        res.json({"sucess" : false,
    "errorMsg" : "employeename missing"})
        
    }else if(req.body.lastname === undefined) {
        res.json({"sucess" : false,
        "errorMsg" : "Lastname is missing"})

    }else if(req.body.dob === undefined) {
        res.json({"sucess" : false,
    "errorMsg" : "Dob is missing"})
    }else {
       
    res.send(`you have sent ${req.body.employeename}
    you have sent ${req.body.lastname} 
    you have sent ${req.body.dob}` )
     }
})

app.get('/employee', (req, res) => {
    res.send([{ 
        EmployeeId: 01,
        EmployeeName: "Firsname1",
        lastname:"lastname1", 
        DOB: new Date("12-07-1980"),
        },
         { 
        EmployeeId: 02,
        EmployeeName: "Firsname2",
        lastname:"lastname2",
        DOB: new Date("08-23-1978"),
         },
         { 
        EmployeeId: 03,
        EmployeeName: "Firsname3",
        lastname:"lastname3", 
        DOB: new Date("08-24-1979"),
        },
        { 
        EmployeeId: 04,
        EmployeeName: "Firsname4",
        lastname:"lastname4", 
        DOB: new Date("01-31-1981"),
         },
         { 
        EmployeeId: 05,
        EmployeeName: "Firsname5",
        lastname:"lastname5", 
        DOB: new Date("01-29-1984"),
        },
        { 
        EmployeeId: 06,
        EmployeeName: "Firsname6",
        lastname:"lastname6", 
        DOB: new Date("07-07-1985"),
         },
        { 
        EmployeeId: 07,
        EmployeeName: "Firsname7",
        lastname:"lastname7",
        DOB: new Date("2-02-1982"),
        },
        { 
        EmployeeId: 08,
        EmployeeName: "Firsname8",
        lastname:"lastname8", 
        DOB: new Date("03-03-1983"),
         },
        { 
        EmployeeId: 09,
        EmployeeName: "Firsname9",
        lastname:"lastname9", 
        DOB: new Date("04-04-1984"),
        },
         { 
        EmployeeId: 10,
        EmployeeName: "Firsname10",
        lastname:"lastname10", 
        DOB: new Date("05-05-2005"),
         }]
        );
        })


app.put('/employee', (req, res) => {
    res.send(`employee ${req.body.firstname}`)
})

app.delete('/employee', (req, res) => {

    fs.readFile(__dirname + "/" + "employee.json", 'utf-8', (err, data) => {
        data = JSON.parse( data );
        delete data["employee" +1];
        res.end( JSON.stringify(data));
    });

})


// app.get('', (req, res) => {
//      res.send('Hello express')
// })
// app.get('/help', (req, res) => {
//     res.send("help")
// })

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})
 
