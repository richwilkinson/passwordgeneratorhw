//generate random password
function generate(){
    //set password length/complexity
    const complexity = document.getElementById("slider").value;

    //set possible password values
    const values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789!@#$%^&*";

    let password = "";

    //create for loop to choose password
    for(var i=0; i <= complexity; i++) {
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
    }

    //add password to display
    document.getElementById("display").value = password;

    //add password to created section
    document.getElementById("lastPass").innerHTML += password + "<br />";
}

//set default length display of 8
document.getElementById("length").innerHTML = "length: 8";

//set length
document.getElementById("slider").oninput = function(){
    if (document.getElementById("slider").value > 0){
        document.getElementById("length").innerHTML = "length: " + document.getElementById("slider").value;
    } else{
        document.getElementById("length").innerHTML = "length: 1";
    }
}

//function to copy password
function copypassword(){
    document.getElementById("display").select();

    document.execCommand("Copy");

    alert("password copied!")
}



