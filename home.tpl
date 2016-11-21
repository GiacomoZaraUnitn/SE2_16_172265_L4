<!DOCTYPE html>
<html>
    <head>
        
        <!-- including the view script -->
        <script src="view.js"></script>
    </head> 
    <body>
        <h1>Employees Management</h1>
        <h3>Insert ID employee:</h1>
        
        <!-- form for searching or deleting an employee, sends a POST request to server -->
        <form id = "searchForm" action ="/processID" method = "POST">
            <input type = "text" name = "inputID">
            <br>
            <br>
            <input type = "submit" value = "Search Employee" name = "SearchEmployee">
            <br>
            <br>
            <input type = "submit" value = "Delete Employee" name = "DeleteEmployee">
        </form>
        <br>
        <br>
        
        <!-- button for showing/hiding the employee form -->
        <button onclick = "showIt()">Show/Hide Form</button>
        <hr>
        
        <!-- employee form, for showing/inserting the employee's attributes -->
        <!-- the values are binded as template -->
        <form id = "employeeForm" action = "/insertEmployee" method = "POST" style = "visibility:hidden">
            <input type = "number" placeholder="ID" value= "(:ID:)" name = "ID">
            <br>
            <input type = "text" placeholder = "Name" value = "(:Name:)" name = "Name">
            <br>
            <input type = "text" placeholder = "Surname" value = "(:Surname:)" name = "Surname">
            <br>
            <input type = "number" placeholder = "Level" value = "(:Level:)" name = "Level">
            <br>
            <input type = "number" placeholder = "Salary" value = "(:Salary:)" name = "Salary">
            <br>
            <br>
            <input type="submit" value="Insert employee">
        </form>
    </body>
</html>