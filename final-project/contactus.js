AOS.init({
});


const inputs = document.querySelectorAll(".input");


function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus");
}



function blurFunc() {
    let parent = this.parentNode;
    if (this.value == "") {
        parent.classList.remove("focus");
    }

}

inputs.forEach(input => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
})


function reg_php(uname, phone, email, message) {
      $.ajax({
        url: "index.php",
        type: "POST",
        data: { username: uname, phone: phone, email: email, message: message},
        success: function (result) {
          console.log(result);
          if (result == "Success!") {
            alert("You have successfully registered!");
          } else {
            alert(result);
          }
        },
      });
}
