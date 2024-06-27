
var sumbmitBtn = document.querySelector("#submit-password");

sumbmitBtn.onclick = function(){
    var pass = document.querySelector(".password");
    var truepass = "yatowubwubyam";
    if (pass.value === truepass){
        window.location.href = "snail.html";
    }
    else if (pass.value === ""){
        alert("Type something");
    }
    else {
        alert("Wrong");
    }
};

var turtle = document.querySelector(".turtle2");


turtle.onclick = function(){
    const animals = ["./images/frog2.png", "./images/frog3.png", "./images/frog4.png", "./images/frog5.png", "./images/frog6.png","./images/frog7.png"];
    const randomImage = Math.floor(Math.random() * animals.length);
    turtle.src = animals[randomImage];
};

