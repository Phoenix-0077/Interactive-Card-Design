//Function to validate the input details
console.log('This is me')


function validateForm(){
    //To validate input number
    var cardNumberError = document.getElementById('error-message-card-number');
    var monthError = document.getElementById('error-message-date');
    var yearError = document.getElementById('error-message-date');
    var cvcError = document.getElementById('error-message-cvc');
    var emptyNumber = document.forms["myForm"]["cardnumber"].value;
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
    cvcNumber = document.forms["myForm"]["cvcnumber"].value;
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