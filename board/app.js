const board = document.querySelector('#board')
const squareNumber= 500;
const colors = ['red','green','blue']

for (let i = 0; i <squareNumber;i++){
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover',()=>
    setColor(square))
    
    square.addEventListener('mouseleave',()=>
    removeColor(square))
    
    board.append(square)  

}

function setColor(el) {
    const color = getRandomCol()
    el.style.backgroundColor = color
    el.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
    
}

function removeColor(el){
    el.style.backgroundColor = '#1d1d1d'
    el.style.boxShadow = `0 0 2px #000`
  
}

function getRandomCol() {
   
    return colors[Math.floor(Math.random() * colors.length)]
}