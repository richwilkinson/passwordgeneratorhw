//generate random password
function create(){
    //set password length/diversity
    let complexity = document.getElementById("slider").value;
    //possible password characters
    let values = "ABCDEFGHIJKLMNOPQRSTUVWYXZabcdefghijklmnopqrstuvwxyz123456789!@#$%^&*()_+"

    let password = "";

    //for loop to choose password character
    for(var i = 0; i <= complexity; i++){
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(value.legth - 1)));
    }


}
