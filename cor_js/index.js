const colors = ['Red', 'Blue', 'Yellow', 'Pink', 'Green', 'Lightcoral', 'Lightblue']
const button = document.getElementById('btn')
const color = document.querySelector('.color') // o query puxa elementos das classes do html.
                                               // diferente do GetElement que puxa por Id. 

btn.addEventListener('click', function() {
    const randomColor = randomNumber()
    document.body.style.background = colors[randomColor]
    console.log(randomColor)
    color.textContent = colors[randomColor]
})

function randomNumber() {
    return Math.floor(Math.random() * colors.length) // o floor arredonda e multiplicamos pelo color
}                                                    // pois é o numero de cores que temos na array.
