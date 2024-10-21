const submitForm = () => {
    const button = document.getElementById("formButton");

    const inputs = [
        document.getElementById("nameForm"),
        document.getElementById("emailForm"),
        document.getElementById("messageForm"),
        document.getElementById("formButton")
    ];
    
    button.addEventListener("click", (e) => {
        for (let input of inputs) {
            let submitted = document.createElement("i");
            if (input===button) {
                let userInput = "Submitted!";
                submitted.textContent = userInput;
            } else {
                let userInput = input.value;
                submitted.textContent = userInput;
                submitted.style.color = "#A9A9A9";
                submitted.style.wordBreak = "break-word";
            }
            
            input.replaceWith(submitted);
        }
    });
};