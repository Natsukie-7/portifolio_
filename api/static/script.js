// abre e fecha o menu lateral em mobile

const menuMobile = document.querySelector('.menu-mobile');
const body = document.querySelector('body');

menuMobile.addEventListener('click', () => {
    menuMobile.classList.contains('bi-list')
        ? menuMobile.classList.replace('bi-list', 'bi-x')
        : menuMobile.classList.replace('bi-x', 'bi-list');
    body.classList.toggle('menu-nav-active');
});

// Fechar o menu ao clicar em um item

const navItem = document.querySelectorAll('.nav-item');
navItem.forEach(item => {
    item.addEventListener('click', () => {
        if (body.classList.contains("menu-nav-active")) {
            body.classList.remove("menu-nav-active")
            menuMobile.classList.replace("bi-x", "bi-list")
        }
    })
})


// animar todos os atributos que tiver o atributo data-anime

const item = document.querySelectorAll("[data-anime]")
const animeScroll = () => {
    const windowTop = window.pageYOffset + window.innerHeight * 0.90;
    
    item.forEach((element) => {
        if (windowTop > element.offsetTop){
            element.classList.add("animate");
        } else {
            element.classList.remove("animate");
        }
    })
}


window.addEventListener("scroll", ()=>{
    animeScroll()
})

// ativar o botão de loading
const btnEnviar = document.querySelector('#btn-enviar')
const btnEnviarLoader = document.querySelector('#btn-enviar-loader')

btnEnviar.addEventListener("click", () => {
    btnEnviarLoader.style.display = "block";
    btnEnviar.style.display = "none";
})

// tirar menssagem apos segundos
setTimeout(() => {
    document.querySelector('#alerta').style.display = 'none';
}, 5000)