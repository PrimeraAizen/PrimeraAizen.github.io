let display = document.getElementById("display");
let buttons = Array.from(document.getElementsByTagName("button"));

buttons.forEach((item) => {
  item.onclick = () => {
    switch (item.id) {
      case "clear":
        display.innerText = "";
        break;

      case "backspace":
        let string = display.innerText.toString();
        display.innerText = string.substr(0, string.length - 1);
        break;

      case "equal":
        if (display.innerText != "") {
          display.innerText = eval(display.innerText);
        } else {
          display.innerText = "Empty!";
        }
        break;

      default:
        display.innerText += item.id;
    }
  };
});
