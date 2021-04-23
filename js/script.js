let startBtn = document.querySelector('#start')
let container = document.querySelector('.container')

startBtn.addEventListener('click', startTheGame)

let low = 1
let high = 10


function startTheGame(e){
    startBtn.remove()
    let correct_ans = Math.floor(Math.random() * (high - low + 1) + low);
    let form = document.createElement('form')
    let label = document.createElement('label')
    label.innerHTML = `Guess a number between ${low} and ${high} (inclusive):`
    form.appendChild(label)
    let input = document.createElement('input')
    input.setAttribute('type', 'number')
    input.setAttribute('id', 'guessed-number')
    form.appendChild(input)
    let button = document.createElement('input')
    button.setAttribute('type', 'submit')
    button.setAttribute('id', 'submitButton')
    button.style.marginLeft = '10px'
    form.appendChild(button)
    container.appendChild(form)
    let chances = 3;
    form.addEventListener('submit', (e) => {
        if(document.querySelector('#guessed-number').value === ''){
            alert('Enter a Number')
        }
        else {
            let givenNumber = parseInt(document.querySelector('#guessed-number').value)
            document.getElementById('guessed-number').value = ''
            if (chances > 0) {
                if (givenNumber < correct_ans) {
                    alert('Correct answer is greater!' + ' Remaining chance: ' + (--chances))
                } else if (givenNumber > correct_ans) {
                    alert('Correct answer is smaller!' + ' Remaining chance: ' + (--chances))
                } else {
                    let div = document.createElement('div')
                    div.className = 'win'
                    div.appendChild(document.createTextNode('Game is over! You Win!'))
                    container.appendChild(div)
                    document.getElementById("guessed-number").disabled = true;
                    document.getElementById("submitButton").disabled = true;
                    let restartBtn = document.createElement('button')
                    restartBtn.appendChild(document.createTextNode('Restart'))
                    restartBtn.style.marginTop = '15px'
                    container.appendChild(restartBtn)
                    restartBtn.addEventListener('click', e => {
                        restartBtn.remove()
                        label.remove()
                        input.remove()
                        button.remove()
                        div.remove()
                        startTheGame(e)
                    })
                }
            }
            if (chances === 0) {
                let div = document.createElement('div')
                div.className = 'lose'
                div.appendChild(document.createTextNode('Game is over! You lose!'))
                container.appendChild(div)
                document.getElementById("guessed-number").disabled = true;
                document.getElementById("submitButton").disabled = true;
                let restartBtn = document.createElement('button')
                restartBtn.appendChild(document.createTextNode('Restart'))
                restartBtn.style.marginTop = '15px'
                container.appendChild(restartBtn)
                restartBtn.addEventListener('click', e => {
                    restartBtn.remove()
                    label.remove()
                    input.remove()
                    button.remove()
                    div.remove()
                    startTheGame(e)
                })
            }
        }
        e.preventDefault()
    })
    e.preventDefault()
}
