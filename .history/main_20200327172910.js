// Projekt 5 - Zadanie dla Ciebie 
// Sprawdź czy wpisane w input hasło pasuje do któegoś z hasel w tablicy. Jeśli tak wyświetl wiadomość w <div>
//wielkość liter nie ma znaczenia (wykorzystaj metodę .toUpperCase lub .toLowerCase - pamiętaj, że metody te działają na pojedyńczym elemencie typu string)

const input = document.querySelector("input");
const div = document.querySelector("div");
const passwords = ['jedEN', 'DwA'];
const messages = ["super", "działa!"]

const showMessage = (e) => {

    passwords.forEach((pass, index) => {

        if (pass.toLocaleLowerCase() === input.value.toLocaleLowerCase()) {
            div.textContent = messages[index];

        }


        // program test
        // console.log(passConverted, index, inputConverted);



    });







}

input.addEventListener("input", showMessage)