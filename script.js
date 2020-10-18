//values of different variables
let characterAmountRange = document.getElementById("characterAmountRange")

let characterAmountNumber = document.getElementById("characterAmountNumber")

let includeUppercaseElement = document.getElementById("includeUppercase")

let includeNumberElement = document.getElementById("includeNumber")

let includeSymbolElement = document.getElementById("includeSymbol")

let form = document.getElementById("passwordGeneratorForm")

let display = document.getElementById("display")

let uppercase_char_code = arrayLowHigh(65, 90)

let lowercase_char_code = arrayLowHigh(97, 122)

let number_char_code = arrayLowHigh(48, 57)

let symbol_char_code = arrayLowHigh(33, 47).concat(arrayLowHigh(58, 64)
)
//event listeners for button/checkboxes
characterAmountNumber.addEventListener("input", syncCharacterAmount)
characterAmountRange.addEventListener("input", syncCharacterAmount) 

form.addEventListener("submit", e => {
    e.preventDefault()
    let characterAmount = characterAmountNumber.value
    let includeUppercase = includeUppercaseElement.checked
    let includeNumber = includeNumberElement.checked
    let includeSymbol = includeSymbolElement.checked
    let password = generatePassword(characterAmount, includeUppercase,
        includeNumber, includeSymbol)
        display.value = password
    })
    //function that generates password
    function generatePassword(characterAmount, includeUppercase,
        includeNumber, includeSymbol) {
            let charCodes = lowercase_char_code
            if (includeUppercase) charCodes = charCodes.concat(uppercase_char_code)
            if (includeNumber) charCodes = charCodes.concat(number_char_code)
            if (includeSymbol) charCodes = charCodes.concat(symbol_char_code)
            //loop that pushes assigned characters

            let passwordCharacters = []
            for (let i = 0; i < characterAmount; i++) {
                let characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
                passwordCharacters.push(String.fromCharCode(characterCode))
            }
            return passwordCharacters.join('')
        }
        //creates random characters and assigns them to an array
        function arrayLowHigh(low, high) {
            let array = []
            for (let i = low; i <= high; i++) {
                array.push(i)
            }
            return array
        }
        //determines character count
        function syncCharacterAmount(e) {
            let value = e.target.value
            characterAmountNumber.value = value
            characterAmountRange.value = value
        }
        //function for copy button
        function myFunction() {
            /* Get the text field */
            var copyText = document.getElementById("display");
          
            /* Select the text field */
            copyText.select();
          
            /* Copy the text inside the text field */
            document.execCommand("copy");
          
            /* Alert the copied text */
            alert("Copied the text: " + copyText.value);
          }