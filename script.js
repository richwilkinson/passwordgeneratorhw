//possible values
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let numbers = "123456789";
let symbols = "!@#$%^&*";

//Generate Random Password
function generate(){
    //set password length/diversity
    let complexity = document.getElementById("slider").value;

    let password = "";
    


    //create loop for password
    for(var i = 0; i <= complexity; i++){
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length -1)));
    }

    //add password to textbook/display area
    document.getElementById("display").value = password;

    //add password to previously created 
    document.getElementById("lastPass").innerHTML = password + "<br />"

}

