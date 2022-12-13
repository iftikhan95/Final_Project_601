const firstName   = document.getElementById("firstName");
const lastName    = document.getElementById("lastName");
const facilitator = document.getElementById("comments");
const email       = document.getElementById("email");
const para_one    = document.getElementById("p1");

let formValid     = false;
const displayMessage = document.getElementById("errorMessage");


let firstnameValid = false; 
let lastnameValid = false;
let facilitatorValid = false; 

function firstNameVld(){
    if (/^[a-zA-Z]+$/.test(firstName.value)){
        firstName.style.color = "green";
        firstName.style.borderBlockColor = "green";
        return true;
    }else{
        firstName.style.borderBlockColor = "red";
        firstName.style.color = "red";
        displayMessage.textContent = "First Name Invalid. A-Z accepted only!";
        return false;
    }
}

function lastNameVld(){
    if (/^[a-zA-Z]+$/.test(lastName.value)){
        lastName.style.color = "green";
        lastName.style.borderBlockColor  = "green";
        return true;
    }else{
        lastName.style.borderBlockColor = "red";
        lastName.style.color = "red";
        displayMessage.textContent = "Last Name Invalid. A-Z accepted only!";
        return false;
    }
}


function submitFn(){

    firstnameValid   = firstNameVld();
    lastnameValid    = lastNameVld();


    if(!firstnameValid){
        displayMessage.textContent = "First Name Invalid. A-Z accepted only!";
    }

    if(!lastnameValid){
        displayMessage.textContent = "Last Name Invalid. A-Z accepted only!";
    }
    
    if(firstnameValid == false && lastnameValid == false){
        displayMessage.textContent = "Last and First Name Invalid. A-Z accepted only!";
    }

    formValid = (firstnameValid && lastnameValid && email.value.length != 0);


    if(!formValid){

    }else{
        localStorage.setItem('Last_Name',lastName.value);
        localStorage.setItem('First_Name',firstName.value);
        localStorage.setItem('Comment',comments.value);
        localStorage.setItem('Email',email.value);
        displayMessage.textContent = "Enter Valid Email!";
    }
}

