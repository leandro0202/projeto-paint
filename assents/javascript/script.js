

var tela = document.getElementById('tela')
var c = tela.getContext('2d')
criarTela()

function criarTela(){
    c.fillStyle = 'white'
    c.fillRect(0, 0, 800, 600)
}

var desenho = function(event){

    var x = event.pageX - tela.offsetLeft
    var y = event.pageY - tela.offsetTop

    c.fillStyle = cor
    c.beginPath()
    c.arc(x, y, 10, 0, 2*3.14)
    c.fill()
}
document.addEventListener('click', function(e){
    const el = e.target
    if(el.classList.contains('azul')){
        corAzul()    
    }
    if(el.classList.contains('vermelho')){
        corVermelho()    
    }
    if(el.classList.contains('amarelo')){
        corAmarelo()    
    }
    if(el.classList.contains('verde')){
        corVerde()    
    }
    if(el.classList.contains('preta')){
        corPreta()    
    }
    if(el.classList.contains('laranja')){
        corLaranja()    
    }
    if(el.classList.contains('pink')){
        corPink()    
    }
    if(el.classList.contains('roxo')){
        corRoxa()    
    }
    if(el.classList.contains('borracha')){
        apagar()    
    }

})



let area = 3

function corVermelho(){
    cor = 'red'
    area = 3
}
function corAzul(){
    cor = 'blue'
    area = 3
}
function corAmarelo(){
    cor = 'yellow'
    area = 3
}
function corVerde(){
    cor = 'green'
    area = 3
}
function corPreta(){
    cor = 'black'
    area = 3
}
function corLaranja(){
    cor = 'orange'
    area = 3
}
function corPink(){
    cor = ' rgb(184, 22, 130)'
    area = 3
}
function corRoxa(){
    cor = ' rgb(53, 5, 50)'
    area = 3
}
function apagar(){
    cor = 'white'
    area = 20
}



tela.addEventListener('mousedown', function(e){
    tela.onmousemove = desenho
})
tela.addEventListener('mouseup', function(e){
    tela.onmousemove = ''
})
