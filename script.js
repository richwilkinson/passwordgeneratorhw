//Generator functions

function getRandomLow() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
console.log(getRandomLow());

function getRandomUp() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
console.log(getRandomUp());

function getRandomNum() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
console.log(getRandomNum());

function getRandomSym() {
    const symbols = "!@#$%^&*()_+";
    return symbols[Math.floor(Math.random() * symbols.length)];
}
console.log(getRandomSym());
//generate random password
function generate(){
    //set password length/diversity
    let complexity = document.getElementById("slider").value;
    console.log("complexity")
    //possible password characters
    let values = "ABCDEFGHIJKLMNOPQRSTUVWYXZabcdefghijklmnopqrstuvwxyz123456789!@#$%^&*()_+";
    console.log("values")
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

//set default length display of 68
document.getElementById("length").innerHTML = "length: 68"

//function to set length in slider
document.getElementById("slider").oninput = function(){
    if( document.getElementById("slider").value > 0){
        document.getElementById("length").innerHTML = "length: " + document.getElementById("slider").value;
    }
    else{
        document.getElementById("length").innerHTML = "length: 1"
    }
}

//function to copy pass in clipboard
function copyPass(){
    document.getElementById("display").select();
    document.execCommand("copy");
    alert("Password copied!");
}
