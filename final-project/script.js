let menu = document.getElementsByClassName("desktop-nav")[0]
let menuButton = document.getElementsByClassName("menu-icon-container")[0];
menuButton.addEventListener("click", function() {
    document.getElementsByClassName("nav-container").classList.add("active");
})
