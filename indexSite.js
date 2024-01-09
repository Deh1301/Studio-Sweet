const svg= document.querySelector('svg')
const corpo = document.querySelector('body')
const button = document.querySelector('button')
const paragrafo = document.querySelector('p')

svg.addEventListener('mouseover',()=>{
    corpo.style.transition = '.2s'
    corpo.style.backgroundImage = 'url(img/imagemCapa/logo.png)'
    corpo.style.backgroundColor = 'black'
    button.style.backgroundColor = 'rgba(240, 248, 255, 0.329)'
    svg.style.color = 'rgba(240, 248, 255, 0.329)'
    paragrafo.style.color = 'rgba(240, 248, 255, 0.329)'
})

svg.addEventListener('mouseout',()=>{
    corpo.style.backgroundImage = 'url(img/imagens/logo.png)'
    corpo.style.backgroundColor = 'rgba(250, 209, 234, 0.485)'
    button.style.backgroundColor = 'rgb(160, 49, 230)'
    svg.style.color = 'rgb(160, 49, 230)'
    paragrafo.style.color = 'rgb(160, 49, 230)'

})