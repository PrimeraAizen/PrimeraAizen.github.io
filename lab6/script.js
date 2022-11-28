function closed(element) {
  // if (element.parentElement.parentElement.style.maxHeight == "50px") {
  //   element.parentElement.parentElement.style.maxHeight = "250px";
  //   element.parentElement.parentElement.querySelector("#car").style.maxWidth =
  //     "200px";
  //   element.parentElement.parentElement.querySelector(
  //     "#text"
  //   ).style.visibility = "visible";
  // } else {
  //   element.parentElement.parentElement.style.maxHeight = "50px";
  //   element.parentElement.parentElement.querySelector("#car").style.maxWidth =
  //     "0";
  //   element.parentElement.parentElement.querySelector(
  //     "#text"
  //   ).style.visibility = "hidden";
  // }
  element.parentElement.parentElement.style.display = "none";
}

function change(element) {
  let a = element.querySelector("#basket").src;
  if (
    a ==
    "https://i.pinimg.com/originals/cb/c5/24/cbc52492c8a9b9e707e0bb67b6363dda.jpg"
  ) {
    element.querySelector("#basket").src =
      "https://www.clipartmax.com/png/middle/218-2180991_money-bag-of-dollars-vector-icon.png";
  } else {
    element.querySelector("#basket").src =
      "https://i.pinimg.com/originals/cb/c5/24/cbc52492c8a9b9e707e0bb67b6363dda.jpg";
  }
}

