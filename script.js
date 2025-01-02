

let gameNum = Math.floor(Math.random() * 100) + 1; 
 

function checkGuess() {
    let userNum = document.getElementById("userInput").value; 

    if (userNum == gameNum) {
        document.getElementById("message").innerHTML = "🎉 Congratulations! Your guess is correct";
        document.getElementById("message").style.color = 'green';
    } else if (userNum > gameNum) {
        document.getElementById("message").innerHTML = "Your number is too high. Try again!";
        document.getElementById("message").style.color = 'red';
    } else {
        document.getElementById("message").innerHTML = "Your number is too low. Try again!";
        document.getElementById("message").style.color = 'red';
    }
}