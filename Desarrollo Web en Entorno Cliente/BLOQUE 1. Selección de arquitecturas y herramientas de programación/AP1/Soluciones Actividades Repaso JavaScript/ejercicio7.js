alert("Ejercicio 7");

let palindrome = (prompt("Dime el palindromo"));
palindrome = palindrome.toLowerCase();
palindrome = palindrome.replace(/\s/g, '');
let check = true;

for (let i = 0; i < palindrome.length; i++) {
    if (palindrome[i] !== palindrome[palindrome.length - 1 - i]) {
        check = false;
    }
}

if (check === true) {
    alert("Es un palindromo");
} else {
    alert("No es un palindromo");
}
