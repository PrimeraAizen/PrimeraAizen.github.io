function change(element){
    let a = element.innerHTML;
    switch(a){
        case "Products":
            document.getElementById("img").src="mer2.jpg";
            document.getElementById("text1").innerHTML = "Hey, It's s class"
            break;
        
        case "About Us":
            document.getElementById("img").src="mer3.jpg";
            document.getElementById("text1").innerHTML = "It's cls class";
            break;
    }
    $("#img").animate({left: '+=100px', opacity:'0'}, 'slow')       
    $("#img").animate({left: '-=100px', opacity:'1'}, 'slow')       
}

function big(element) {
    element.style.fontSize = "30px";
}

function small(element) {
    element.style.fontSize = "23px";
}

function load(){
    $(".text").animate({opacity: '1'}, 'slow');

}