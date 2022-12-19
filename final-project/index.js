AOS.init({
    // disable: "mobile"
    // once: true
});


function changePhone(picture) {
    let pic = document.querySelector('#iphone-img');
    pic.setAttribute('src', picture); 
    // pic.style.width = '585px';
}

function changeMac(picture) {
    let pic = document.querySelector('#mac-img');
    pic.setAttribute('src', picture); 
    // pic.style.width = '585px';
}

function changePad(picture) {
    let pic = document.querySelector('#ipad-img');
    pic.setAttribute('src', picture); 
    // pic.style.width = '585px';
}
