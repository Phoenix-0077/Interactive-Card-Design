var cardName = document.querySelector("cardname");
var cardNumber = document.getElementById("cardnumber");
var cardDate = document.getElementsByClassName("date");
var cvcNumber = document.getElementById("cvcnumber");
var submit = document.getElementById("button");
var error = document.getElementsByClassName("error");
var tag = document.getElementsByTagName("a");
var input = document.getElementsByTagName("input")
var nameCard = document.getElementById("card-name")
var label = document.getElementsByTagName("label")


//Function to validate the input details
console.log('This is me')


function validateForm(){
    var emptyName = document.forms["myForm"]["cardname"].value;
    if(emptyName == ""){
        alert("Name and number must be filled");
        return false;
    }
    var emptyNumber = document.forms["myForm"]["cardnumber"].value;
    if(emptyNumber == ""){
        alert("Name and number must be filled");
        return false;
    }
    if(typeof emptyNumber == ""){
        alert("Number entered is invalid");
        return false;
    }else{
        return true; 
    }
}


// Function to display details on the live card
// submit.addEventListener('click', function(e){
//     alert('This is me');
//     e.preventDefault();
// });

