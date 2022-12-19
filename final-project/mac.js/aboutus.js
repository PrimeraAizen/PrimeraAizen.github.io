const nav = document.querySelector('#nav');  //selector
const nav__btn = document.querySelector('#nav__btn');
const nav__btn__img = document.querySelector('#nav__btn__img');


nav__btn.onclick = () => {
    if (nav.classList.toggle('open')) {
        nav__btn__img.src = "img/NAV CLOSE.svg"
    } else {
        nav__btn__img.src = "img/NAV.svg"
    }
}


AOS.init({
    // disable: "mobile"
    // once: true
});