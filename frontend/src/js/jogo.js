
// Pega o label de pontos
const pontos = document.querySelector('#pontos')
//criar o labirinto vazio
const canvas = document.getElementById('labirinto')
const context = canvas.getContext('2d')

// const keyBoardListener = createKeyboardListener()
// keyBoardListener.subscribeObserver(game.moveRato)

// draw()

// function draw() {

//     console.log(state)
//     //Apaga todo o desenho anterior
//     context.clearRect(0,0,canvas.height,canvas.width)
//     //Desenha o rato na tela
//     let rato = game.rato
//     context.fillStyle = 'grey'
//     context.fillRect(rato.x, rato.y, 1, 1)

//     //Desenha os queijos
//     for (const queijoID in game.queijos) {
//         let queijo = game.queijos[queijoID]
//         context.fillStyle = 'yellow'
//         context.fillRect(queijo.x, queijo.y, 1, 1)
//     }
//     //Desenha as paredes
//     for (const paredeID in game.paredes) {
//         let parede = game.paredes[paredeID] 
//         context.fillStyle = 'black'
//         context.fillRect(parede.x, parede.y, 1, 1)
//     } 
//     requestAnimationFrame(draw)
// }
    