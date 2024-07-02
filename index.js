document.addEventListener('DOMContentLoaded', function () {
    let score = document.querySelector("#result");

    // Get question mark img
    let questionMark = document.querySelector("#question-mark");

    //password-info
    let passwordInfo = document.querySelector("#newpost");

    // Get the modal
    let modal = document.querySelector("#myModal");

    // Get the button that opens the modal
    let btn = document.querySelector("#myBtn");

    // Get the p that holds the text
    const txtResult = document.querySelector("#text-result");


    //function for displaying the modal
    function modalDisplay() {
        modal.style.display = "block";
    };
    var buttons = document.querySelectorAll('button');

    // Function to play sound
    function playSound() {
        var sound = document.getElementById('buttonSound');
        sound.play();
    }

    // Attach event listener to each button
    buttons.forEach(function (button) {
        button.addEventListener('click', playSound);
    });

    //function for computing the scores and displaying the modal
    btn.addEventListener("click", function () {
        let audio = new Audio('/sounds/clicking.mp3');
        audio.play();
        displayAll();
        modalDisplay();
        if (score === 5) {
            txtResult.innerHTML = "Yey! You got 5 correct answers!&#129395 &#128525 <br/><br/> Now, You need to tell yam the secret code. Then he will give you the password. <br/><br/>  Secret code : yamwubwubyato";
            hideRestart();
        }
        else if (score === 4) {
            txtResult.innerHTML = "One more! <br/><br/> You got 4 correct answers &#129321 <br/><br/> Password Hint: 1 word";
        }
        else if (score === 3) {
            txtResult.innerHTML = "Almost there! <br/><br/> You got 3 correct answers &#129321 <br/><br/> Password Hint: 1 word";
        }
        else if (score === 2) {
            txtResult.innerHTML = "Good job! <br/><br/> You got 2 correct answers &#128548;  <br/><br/> Password Hint: Contains 13 letters";
        }
        else if (score === 1) {
            txtResult.innerHTML = "Nice! <br/><br/> You got 1 correct answer &#128513 <br/><br/> Password Hint: 5 syllables";
        }
        else {
            txtResult.innerHTML = "Oh no!<br/><br/> You got 0 correct answer &#128560  <br/><br/> No hint for you";
        }

    });


    function displayAll() {
        displayForQ1();
        displayForQ2();
        displayForQ3();
        displayForQ4();
        displayForQ5();
    };

    function displayForQ1() {
        let ans1 = "shrek";
        let q1 = document.querySelector("#q1");

        if (q1.value === ans1) {
            score++;
            return score;
        }
        else if (q1.value === "") {
            return "Null";
        }
        else {
            return score;
        }

    };

    function displayForQ2() {
        let ans2 = "11/01/2023";
        let q2 = document.querySelector("#q2");

        if (q2.value === ans2) {
            score++;
            return score;
        }
        else if (q2.value === "") {
            return "Null";
        }
        else {
            return score;
        }

    };

    function displayForQ3() {
        let ans3 = "dear";
        let q3 = document.querySelector("#q3");

        if (q3.value === ans3) {
            score++;
            return score;
        }
        else if (q3.value === "") {
            return "Null";
        }
        else {
            return score;
        }
    };

    function displayForQ4() {
        let ans4 = "eat it";
        let q4 = document.querySelector("#q4");

        if (q4.value === ans4) {
            score++;
            return score;
        }
        else if (q4.value === "") {
            return "Null";
        }
        else {
            return score;
        }
    };
    function displayForQ5() {
        let ans5 = "7";
        let q5 = document.querySelector("#q5");

        if (q5.value === ans5) {
            score++;
            return score;
        }
        else if (q5.value === "") {
            return "Null";
        }
        else {
            return score;
        }
    };

    $("#restart").click(function () {
        let audio = new Audio('/sounds/clicking.mp3');
        audio.play();
        document.location.reload();

    });

    questionMark.addEventListener("click", function () {
        // Toggle the hidden class on the paragraph element
        passwordInfo.classList.toggle('hidden');
    });

    function hideRestart() {
        document.querySelector("#restart").style.display = "none";
    }
    //password authenticator

    let homeBtn = document.querySelector(".quiz");

});
