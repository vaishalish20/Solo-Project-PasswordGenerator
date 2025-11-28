const characters = [
    // Uppercase A–Z
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
    "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",

    // Lowercase a–z
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
    "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",

    // Numbers 0–9
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",

    // Symbols
    "!", "@", "#", "$", "%", "^", "&", "*", "(", ")",
    "-", "_", "=", "+", "[", "]", "{", "}", ";", ":",
    "'", "\"", "<", ">", ",", ".", "?", "/", "\\", "|", "`", "~"
];

let n = 15;
let passwordEl1 = document.getElementById("password1")
let passwordEl2 = document.getElementById("password2")

function generatePasswords() {
    passwordEl1.textContent = ""
    passwordEl2.textContent = ""
    // Note:Remeber random function have () too.

    for (let i = 0; i < n; i++) {
        let random1 = Math.floor(Math.random() * characters.length);
        let random2 = Math.floor(Math.random() * characters.length);

        passwordEl1.textContent += characters[random1]
        passwordEl2.textContent += characters[random2]
    }

}

