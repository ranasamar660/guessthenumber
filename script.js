document.addEventListener('DOMContentLoaded', () => {
    let tryContainer = document.querySelector('#try');
    let btn = document.getElementById('guess');
    let restart = document.getElementById('restart');
    let tries;
    let gameNum;
    const maxTries = 10;

    restart.style.display = "none";

    function initialize() {
        tries = maxTries;
        gameNum = Math.floor(Math.random() * 100) + 1;
        restart.style.display = "none";
        btn.style.display = "block";
        document.getElementById("message").innerHTML = "";
        document.getElementById("userInput").value = '';
        document.getElementById("userInput").disabled = false;
        updateTries();

    }

    function checkGuess() {
        let userNum = parseInt(document.getElementById("userInput").value, 10);

        if (isNaN(userNum)) {
            document.getElementById("message").innerHTML = "Please enter a valid number!";
            document.getElementById("message").style.color = 'orange';
            return;
        }

        if (tries > 0) {
            if (userNum === gameNum) {
                document.getElementById("message").innerHTML = "🎉 Congratulations! Your guess is correct";
                document.getElementById("message").style.color = 'green';
                btn.style.display = "none";
                document.getElementById("userInput").disabled = true;
                restart.style.display = "block";
            } else if (userNum > gameNum) {
                document.getElementById("message").innerHTML = "Your number is too high. Try again!";
                document.getElementById("message").style.color = 'red';
            } else {
                document.getElementById("message").innerHTML = "Your number is too low. Try again!";
                document.getElementById("message").style.color = 'red';
            }
            tries--;
            updateTries();
        }

        if (tries === 0 && userNum !== gameNum) {
            document.getElementById("message").innerHTML = "You Lost! The correct number was " + gameNum;
            document.getElementById("message").style.color = 'black';
            btn.style.display = "none";
            document.getElementById("userInput").disabled = true;
            restart.style.display = "block";
        }

        document.getElementById("userInput").value = '';
    }

    function updateTries() {
        tryContainer.textContent = ` ${tries}`;
    }

    
    btn.addEventListener('click', checkGuess);
    restart.addEventListener('click', initialize);
    window.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && btn.style.display !== "none") {
            checkGuess();
        }
    });

    initialize();
});
