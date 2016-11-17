// this function is called when the user wants to hide or show
// the employee form. It just switches the visibility value
function showIt(){
    var form = document.getElementById("employeeForm");
    if(form.style.visibility == "visible"){
        form.style.visibility = "hidden";
    }
    else{
        form.style.visibility = "visible";
    }
}