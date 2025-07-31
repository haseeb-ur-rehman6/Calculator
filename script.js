let string = "";
let btns = document.querySelectorAll(".buttons");
let inp = document.querySelector("input");

Array.from(btns).forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      string = eval(string);
      inp.value = string;
    } 
    else if (e.target.innerHTML == "Del") {
      string = "";
      inp.value = string;
    }
    else {
      console.log(e.target);
      string = string + e.target.innerHTML;
      inp.value = string;
    }
  });
});
