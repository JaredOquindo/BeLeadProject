function askForInput() {
    // Display a prompt dialog box
    var userInput = prompt("Please enter your name:");

    // Check if the user provided input
    if (userInput !== null) {
        // Display the input in the HTML document
        document.getElementById("output").innerText = "Hello, " + userInput + "!";
    } else {
        // Handle the case where the user cancelled the prompt
        document.getElementById("output").innerText = "No input provided.";
    }
}
