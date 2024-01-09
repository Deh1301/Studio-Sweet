document.addEventListener("DOMContentLoaded", () => {
  const corpo = document.querySelector("body");
  const cabecalho = document.querySelector("header");
  const titulo = document.querySelector("#titulo");
  const black = document.querySelector("#escuro");
  const white = document.querySelector("#claro");
  const txt = document.querySelector("h3");
  const frase = document.querySelector("#texto");
  const studio = document.querySelector("h1");
  const imgs = document.querySelectorAll("#Imagens");
  const Imagens = document.querySelectorAll("#imgPrj");
  const cabecalhoPrj = document.querySelector("#projetos_parte");
  const logoStudio =  document.querySelector('#logoStudio')
  const logoJulia = document.querySelector('#logoJulia')
  const menuStudio = document.querySelector('#menuStudio')
  const sobre = document.querySelector('#sobre')
  const projeto = document.querySelector('#projetos')
  const botaoX = document.querySelector('.botaox')
  const txtprj = document.querySelector('#textoProjeto')
  const txtRodape = document.querySelector('#rodape')

  menuStudio.addEventListener('click', ()=>{
    menuStudio.style.display= 'none'
    botaoX.style.display = 'block'
    sobre.style.display = 'block'
    projeto.style.display = 'block'

  })

  botaoX.addEventListener('click',()=>{
    botaoX.style.display = 'none'
    menuStudio.style.display= 'block'
    sobre.style.display = 'none'
    projeto.style.display = 'none'

  })

  document.getElementById("sobre").addEventListener("click", (e) => {
    e.preventDefault();

    const texto = "texto";
    const textoSobre = document.getElementById(texto);

    textoSobre.scrollIntoView({
      behavior: "smooth",
    });
  });

  
  projeto.addEventListener('click', function () {
   
    const bemVindoPrjSection = document.querySelector('#embarqueStudio');

    bemVindoPrjSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  

  txtprj.addEventListener('mouseover', ()=>{
    txtprj.textContent = '"Uma fotografia é um instante de vida capturado para a eternidade."'
    txtprj.classList.add('rmTxtPrj')
    
  })

  txtprj.addEventListener('mouseout', ()=>{
    txtprj.textContent = 'Uma fotografia é um instante de vida capturado para a eternidade.'
    
  })

  

  black.addEventListener("click", () => {
    corpo.style.transition = "2s";
    corpo.style.backgroundImage = "url(img/pexels-matej-1158394.jpg)";
    corpo.style.backgroundAttachment = "fixed";
    black.style.display = "none";
    black.style.background = 'transparent'
    black.style.border = 'none'
    white.style.display = "block";
    txt.style.color = "aliceblue";
    frase.style.color = "aliceblue";
    studio.style.color = "aliceblue";
    cabecalho.style.backgroundColor = "rgb(117, 115, 116)";
    cabecalhoPrj.style.backgroundColor = "rgb(117, 115, 116)";
    titulo.style.color = 'aliceblue'
    sobre.style.color= 'black'
    projeto.style.color = 'black'
    sobre.style.fontWeight = 'bold'
    projeto.style.fontWeight = 'bold'
    corpo.classList.add('modo-noturno')
    frase.classList.add('texto-noturno')


    Imagens.forEach((img)=>{
      img.addEventListener('mouseover',()=>{
        img.style.transition = '1.5s'
        img.style.boxShadow = '3px 3px 3px rgba(255, 255, 255, 0.638)'
      })
      img.addEventListener('mouseout', ()=>{
        img.style.boxShadow = 'none'
      })
    })
  });

  white.addEventListener("click", () => {
    black.style.display = "block";
    corpo.style.backgroundImage = "url(img/pexels-miguel-á-padriñán-19670.jpg)";
    white.style.display = "none";
    white.style.border = 'none'
    white.style.background = 'transparent'
    txt.style.color = "black";
    frase.style.color = "black";
    studio.style.color = "black";
    cabecalho.style.backgroundColor = "rgba(250, 209, 234, 0.971)";
    cabecalhoPrj.style.backgroundColor = "rgba(250, 209, 234, 0.971)";
    titulo.style.color = 'black'
    corpo.classList.remove('modo-noturno');
    Imagens.forEach((img)=>{
      img.addEventListener('mouseover',()=>{
        img.style.transition = '1.5s'
        img.style.boxShadow = '3px 3px 3px rgba(0, 0, 0, 0.63)'
      })
      img.addEventListener('mouseout', ()=>{
        img.style.boxShadow = 'none'
      })
    })
  });

  imgs.forEach((img) => {
    img.addEventListener("click", () => {
      img.style.borderRadius = "0px";
    });
  });

  const retornar = document.querySelectorAll("#Imagens");
  retornar.forEach((imgs) => {
    imgs.addEventListener("mouseenter", () => {
      imgs.style.borderRadius = "50%";
    });
  });

  Imagens.forEach((img) => {
    img.addEventListener("mouseover", () => {
      img.style.borderRadius = "0px";
      
    });

    img.addEventListener("mouseout", () => {
      img.style.borderRadius = "0 500px";
      
    });

    
  });

  logoStudio.addEventListener('mouseover',()=>{
    logoStudio.style.display = 'none'
    logoJulia.style.display= 'block'
    

  })
  logoStudio.addEventListener('mouseout',()=>{
    logoJulia.style.display = 'none'
    logoStudio.style.display= 'block'
  })

  
  

  

  AOS.init()
});
