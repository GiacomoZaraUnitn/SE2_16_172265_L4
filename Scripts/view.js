/* 
    this function cares about making the form visible when 
    any page different from homepage is loaded 
    (e.g.: after an employee was searched) 
*/
window.onload = function(){
    var formG = document.getElementById("employeeForm");
    if(window.location.pathname.substr(1) != ""){
        formG.style.visibility = "visible";
    }
}

/* 
    this function is called when the user wants to hide or show
    the employee form. It just switches the visibility value
*/
function showIt(){
    var form = document.getElementById("employeeForm");
    if(form.style.visibility == "visible"){
        form.style.visibility = "hidden";
    }
    else{
        for(var i = 0; i < 5; i++){
            form.elements[i].value = "";
        }
        form.style.visibility = "visible";
    }
}







