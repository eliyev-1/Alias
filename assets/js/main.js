let body = document.querySelector('body')
let header__menu = document.querySelector('.header__menu')
let navbar__showHidemenu = document.querySelector('.navbar__showHidemenu')
let header__menu__left = document.querySelector('.header__menu__left')
let header__menu__right__left__menulist = document.querySelector('.header__menu__right__left__menulist')
let ul = document.querySelector('ul')
navbar__showHidemenu.addEventListener('click',function(){
    header__menu.classList.toggle('active')
    header__menu.classList.toggle('header__menu')
    header__menu__left.classList.toggle('active')
    header__menu__left.classList.toggle('header__menu__left__hideShow')
    header__menu__left.classList.toggle('header__menu__left')
   
    header__menu__right__left__menulist.classList.toggle('header__menu__right__left__menulist')
    ul.classList.toggle('ulActive')
    ul.classList.toggle('ul')
})

let xidmetler = document.querySelector('.xidmetler')
let Qanunvericilik = document.querySelector('.Qanunvericilik')
let QanunvericilikList = document.querySelector('.QanunvericilikList')
let xidmetlerList = document.querySelector('.xidmetlerList')
xidmetler.addEventListener('click',function(){
    xidmetlerList.classList.toggle('displayShow')
   
})
Qanunvericilik.addEventListener('click',function(){
    
    QanunvericilikList.classList.toggle('displayShow')
})
