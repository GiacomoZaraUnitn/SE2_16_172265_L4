var express = require("express");           
var app = express();                        
var bind = require("bind");
var model = require("./model.js");
var bodyParser = require('body-parser');

// setting parameters and conditions of the connection
app.listen(8081, "127.0.0.1");
app.use(express.static(__dirname + '/Scripts'));
app.use(bodyParser.urlencoded({ extended: false }));

// handling the request for inserting an employee
app.post('/insertEmployee', function(req, res){
    
    // call the insert function on the parameters inserted by the user
    model.insertEmployee(req.body.ID, req.body.Name, req.body.Surname, req.body.Level, req.body.Salary);
    
    // keep the values into the form
    bind.toFile('home.tpl', 
            {
                ID : req.body.ID,
                Name : req.body.Name,
                Surname : req.body.Surname,
                Level : req.body.Level,
                Salary : req.body.Salary
            }, 
            function(data){
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end(data);
            }
        )
});

// handling the request for searching or deleting an employee
app.post('/processID', function(req, res){
    
    // if the employee with the ID inserted by the user doesn't exist...
    if(model.searchEmployee(req.body.inputID) == -1){    
        
        // bind an empty object (i.e.: show empty form)
        bind.toFile('home.tpl', 
            {
                ID : "",
                Name : "",
                Surname : "",
                Level : "",
                Salary : ""
            }, 
            function(data){
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end(data);
            }
        )
    }
    
    // otherwise, if the user hit the search button...
    else if(req.body.SearchEmployee != undefined){
        console.log("Otherwise");
        
        // ...find the index
        var index = model.searchEmployee(req.body.inputID);
        
        // bind the object with the template and return the updated page
        bind.toFile('home.tpl', 
            {
                ID : model.employees[index].id,
                Name : model.employees[index].name,
                Surname : model.employees[index].surname,
                Level : model.employees[index].level,
                Salary : model.employees[index].salary
            }, 
            function(data){
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end(data);
            }
        )
    }
    
    // otherwise, if the user hit the delete button...
    else{
        
        // ...call the delete function
        model.deleteEmployee(req.body.inputID);
        
        // fill the form with empty values
        bind.toFile('home.tpl', 
            {}, 
            function(data){
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end(data);
            }
        )
    }
});

// starting the server
app.use('/', function(req, res){
 bind.toFile('home.tpl', 
    {
        ID : "",
        Name : "",
        Surname : "",
        Level : "",
        Salary : ""
    }, 
    function(data) 
    {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data);
    });
     
});


