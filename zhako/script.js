let a = Array(document.getElementsByClassName("block"));

function change(element) {
  let b = element.innerHTML;
  switch (b) {
    case "Animals":
      for (let i = 0; i < document.getElementsByClassName("car").length; i++) {
        document.getElementsByClassName("car")[i].style.display = "none";
      }
      for (
        let i = 0;
        i < document.getElementsByClassName("fruit").length;
        i++
      ) {
        document.getElementsByClassName("fruit")[i].style.display = "none";
      }
      break;
    case "Cars":
      for (
        let i = 0;
        i < document.getElementsByClassName("animal").length;
        i++
      ) {
        document.getElementsByClassName("animal")[i].style.display = "none";
      }
      for (
        let i = 0;
        i < document.getElementsByClassName("fruit").length;
        i++
      ) {
        document.getElementsByClassName("fruit")[i].style.display = "none";
      }
      break;
    case "Fruits":
      for (
        let i = 0;
        i < document.getElementsByClassName("animal").length;
        i++
      ) {
        document.getElementsByClassName("animal")[i].style.display = "none";
      }
      for (let i = 0; i < document.getElementsByClassName("car").length; i++) {
        document.getElementsByClassName("car")[i].style.display = "none";
      }
      break;
  }
}
