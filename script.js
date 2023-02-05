var cardName = document.getElementById("cardname");
var cardNumber = document.getElementById("cardnumber");
var cardDate = document.getElementsByClassName("date");
var cvcNumber = document.getElementById("cvcnumber");
var submit = document.getElementsByTagName("button");
var error = document.getElementsByClassName("error");
var tag = document.getElementsByTagName("a");
var Input = document.getElementsByTagName("input")
var nameCard = document.getElementById("card-name")

//Function to display error message
submit.addEventListener('click', function(){
    if (cardName.value = false);
        document.error.style.display = "grid";
        document.tag.href = "index.html";
    if (cardNumber.value = false);
        document.error.style.display = "grid";
        document.tag.href = "index.html";
    if (cardDate.value = null);
        document.error.style.display = "grid";
        document.tag.href = "index.html";
    if (cvcNumber.value = null);
        document.error.style.display = "grid";
        document.tag.href = "index.html";
})

//Function to display details on the live card
Input.addEventListener("active", Function(){
    nameCard.innerHTML = cardName.value

})