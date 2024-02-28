// Wait for the DOM to fully load before running the script
document.addEventListener('DOMContentLoaded', function() {
    // Get the button element and listen for a click event
    const checkBtn = document.getElementById('check-btn');
    checkBtn.addEventListener('click', function() {
        // When the button is clicked, get the value from the input field
        const textInput = document.getElementById('text-input').value;
        // Find the div where results will be displayed
        const resultDiv = document.getElementById('result');

        // Check if the input field is empty
        if (!textInput) {
            // If it is, alert the user to provide a value
            alert('Please input a value');
            return; // Stop the function if no input is provided
        }

        // Process the text: convert to lowercase and remove all non-alphanumeric characters
        const processedText = textInput.toLowerCase().replace(/[\W_]/g, '');
        // Check if the processed text is a palindrome by comparing it to its reverse
        const isPalindrome = processedText === processedText.split('').reverse().join('');

        // Update the result div with a message indicating whether or not the text is a palindrome
        resultDiv.textContent = isPalindrome 
            ? `${textInput} is a palindrome` // If true, it's a palindrome
            : `${textInput} is not a palindrome`; // If false, it's not a palindrome
    });
});
