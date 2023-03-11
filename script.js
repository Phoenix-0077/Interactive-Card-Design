//Function to validate the input details
console.log('This is me')


function validateForm(){
    //To validate input number
    var emptyNumber = document.forms["myForm"]["cardnumber"].value;
    var cardNumberError = document.getElementById('error-message-card-number');
    if(emptyNumber == ""){
        cardNumberError.style.visibility = 'visible';
        return false;
    }
    if(isNaN(emptyNumber) == true){
        cardNumberError.style.visibility = 'visible';
        return false;
    }
    if(emptyNumber.length != 16){
        cardNumberError.style.visibility = 'visible';
        return false;
    }
    // To validate input date(month)
    var dateMonth = document.forms["myForm"]["month"].value;
    var monthError = document.getElementById('error-message-date');
    if(dateMonth == ""){
        monthError.style.visibility = 'visible';
        return false;
    }
    if(isNaN(dateMonth) == true){
        monthError.style.visibility = 'visible';
        return false;
    }
    if(dateMonth > 12){
        monthError.style.visibility = 'visible';
        return false;
    }
    //To validate input date(year)
    var dateYear = document.forms["myForm"]["year"].value;
    var yearError = document.getElementById('error-message-date');
    if(dateYear == ""){
        yearError.style.visibilty = 'visible';
        return false;
    }
    if(isNaN(dateYear) == true){
        yearError.style.visibility = 'visible';
        return false;
    }
    if(dateYear.length != 2){
        yearError.style.visibility = 'visible';
        return false;
    }
    //To validate cvc number
    var cvcNumber = document.forms["myForm"]["cvcnumber"].value;
    var cvcError = document.getElementById('error-message-cvc');
    if(cvcNumber == ""){
        cvcError.style.visibility = "visible";
        return false;
    }
    if(isNaN(cvcNumber) == true){
        cvcError.style.visibility = "visible";
        return false;
    }
    if(cvcNumber.length != 3){
        cvcError.style.visibility = "visible";
        return false;
    }
}


// Function to display details on the live card
// submit.addEventListener('click', function(e){
//     alert('This is me');
//     e.preventDefault();
// });

