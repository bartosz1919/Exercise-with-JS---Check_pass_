// Projekt 5 - Zadanie dla Ciebie 
// Sprawdź czy wpisane w input hasło pasuje do któegoś z hasel w tablicy. Jeśli tak wyświetl wiadomość w <div>
//wielkość liter nie ma znaczenia (wykorzystaj metodę .toUpperCase lub .toLowerCase - pamiętaj, że metody te działają na pojedyńczym elemencie typu string)

const input = document.querySelector("input");
const div = document.querySelector("div");
const passwords = ['jedEN', 'DwA'];
const messages = ["super", "działa!"]

const showMessage = (e) => {

    passwords.forEach((pass, index) => {

        let passConverted = pass.toLowerCase();
        let inputConverted = input.toLowerCase();


        console.log(passConverted, index, inputConverted);

        // if (pass[index].toLowerCase === input.value.toLowerCase) {
        //     div.textContent = messages[index];

        // }






    });







    //tutaj rozwiązanie
    // PS. nie skupiaj się na niczym innym w zadaniu niż porównanie i wyświetlenie ( nie rób czyszczenia inputa itp. nie są potrzebne, chyba że masz ochotę)
}

input.addEventListener("input", showMessage)