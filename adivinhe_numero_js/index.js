let computerNumber
let numbers = []
let attempts = 0
let maxGuesses = 6


function newGame() {
    window.location.reload()
}

function inicio() {
    computerNumber = Math.floor(Math.random() * 101)
    //console.log(computerNumber)
}

function compareNumbers() {
   const userNumber = Number(document.getElementById('inputBox').value)
   numbers.push(' ' + userNumber) // push pega os dados de certa variável
   document.getElementById('guesses').innerHTML = numbers


    if(attempts < maxGuesses){
        if (userNumber > computerNumber) {
            document.getElementById('textOutput').innerHTML = 'Seu número é mais alto do que o escolhido.'
            document.getElementById('inputBox').value = ''
            attempts++ // quando esse if for executado ele adiciona mais 1 nas tentativas
            document.getElementById('attempts').innerHTML = attempts
           }
           else if (userNumber < computerNumber) {
            document.getElementById('textOutput').innerHTML = 'Seu número é mais baixo do que o escolhido.'
            document.getElementById('inputBox').value = ''
            attempts++ // quando esse if for executado ele adiciona mais 1 nas tentativas
            document.getElementById('attempts').innerHTML = attempts
           }
           else { // ou seja, se o número for igual...
            document.getElementById('textOutput').innerHTML = 'Parabéns!! Você acertou!'
            attempts++ // quando esse if for executado ele adiciona mais 1 nas tentativas
            document.getElementById('attempts').innerHTML = 'Você tentou ' + attempts + ' vezes.'
            document.getElementById('inputBox').setAttribute('Readonly', 'Readonly')
           }
    }
    else { // se o número de tentativas for menor do que o estipulado...
        document.getElementById('textOutput').innerHTML = 'Poxa vida, você perdeu! O número misterioso era: ' + computerNumber
        document.getElementById('inputBox').setAttribute('Readonly', 'Readonly') 
    }

}