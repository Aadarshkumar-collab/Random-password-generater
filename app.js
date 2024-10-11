const passwordbox = document.getElementById("input-pass");
const length = 12; // Fixed the spelling of "length"

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const symbol = "!#@$%^&*()-_+=<>?,.{}[]"; // Removed spaces from symbols and updated variable name
const number = "1234567890";

const allChars = upperCase + lowerCase + symbol + number;

function createPassword() {
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)]; // Added parentheses after Math.random()
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];
    password += number[Math.floor(Math.random() * number.length)];

    while (password.length < length) {
        password += allChars[Math.floor(Math.random() * allChars.length)]; // Fixed random char selection
    }
    passwordbox.value = password;
}

// Copy function
function copyPassword() {
        // Get the value from the input field
        const password = passwordbox.value;

        // Copy to clipboard using the clipboard API
        navigator.clipboard.writeText(password).then(() => {
            alert('Password copied to clipboard!');
        }).catch(err => {
            console.error('Failed to copy: ', err);
        });
    }

