//Generate Random Password
function generate(){
    //set password length/diversity
    let complexity = document.getElementById("slider").value;

    //possible values
    let values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789!@#$%^&*";

    let password = "";

    //create loop for password
    for(var i = 0; i <= complexity; i++){
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length -1)));
    }

    document.getElementById("display").value = password;
}

