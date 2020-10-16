//generate random password
function generate(){
    //set password length/diversity
    let complexity = document.getElementById("slider").value;
    //possible password characters
    let values = "ABCDEFGHIJKLMNOPQRSTUVWYXZabcdefghijklmnopqrstuvwxyz123456789!@#$%^&*()_+";

    let password = "";

    //for loop to choose password character
    for(var i = 0; i <= complexity; i++){
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
    }

    //displays password in textbox
    document.getElementById("display").value = password;

    //add password to previously generated section
    document.getElementById("lastPass").innerHTML += password + "<br />";

}

//set default length display of 8
document.getElementById("length").innerHTML = "length: 8"
console.log(generate)
