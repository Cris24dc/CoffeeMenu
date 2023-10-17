const btnLeft = document.querySelector("#btnLeft");
const btnRight = document.querySelector("#btnRight");
const paraCon = document.querySelector(".info-con");
const title = document.querySelector(".title");
const plate = document.querySelector(".right-con");

var x = 1;

btnLeft.addEventListener("click", function () {
  if (x == 1) {
    x = 4;
  } else {
    x--;
  }
  if (x == 1) {
    console.log("1");
    title.innerText = "Espresso";
    paraCon.innerText = "30ml espresso";
    plate.classList.add("rot1");
    plate.classList.remove("rot2");
    plate.classList.remove("rot3");
    plate.classList.remove("rot4");
    plate.classList.remove("rot21");
    plate.classList.remove("rot22");
    plate.classList.remove("rot23");
    plate.classList.remove("rot24");
    plate.style.animation = "none";
    plate.offsetHeight;
    plate.style.animation = null;
  } else if (x == 2) {
    console.log("2");
    title.innerText = "Americano";
    paraCon.innerText = "30ml espresso \n \n 450ml apa fierbinte";
    plate.classList.remove("rot1");
    plate.classList.add("rot2");
    plate.classList.remove("rot3");
    plate.classList.remove("rot4");
    plate.classList.remove("rot21");
    plate.classList.remove("rot22");
    plate.classList.remove("rot23");
    plate.classList.remove("rot24");
    plate.style.animation = "none";
    plate.offsetHeight;
    plate.style.animation = null;
  } else if (x == 3) {
    console.log("3");
    title.innerText = "Cappuccino";
    paraCon.innerText = "30ml espresso \n \n 160ml spuma de lapte";
    plate.classList.remove("rot1");
    plate.classList.remove("rot2");
    plate.classList.add("rot3");
    plate.classList.remove("rot4");
    plate.classList.remove("rot21");
    plate.classList.remove("rot22");
    plate.classList.remove("rot23");
    plate.classList.remove("rot24");
    plate.style.animation = "none";
    plate.offsetHeight;
    plate.style.animation = null;
  } else if (x == 4) {
    console.log("4");
    title.innerText = "Caffe Latte";
    paraCon.innerText = "30ml espresso \n \n 200ml lapte";
    plate.classList.remove("rot1");
    plate.classList.remove("rot2");
    plate.classList.remove("rot3");
    plate.classList.add("rot4");
    plate.classList.remove("rot21");
    plate.classList.remove("rot22");
    plate.classList.remove("rot23");
    plate.classList.remove("rot24");
    plate.style.animation = "none";
    plate.offsetHeight;
    plate.style.animation = null;
  }
  plate.style.animation = "rotation2 1.5s";
});

btnRight.addEventListener("click", function () {
  if (x == 4) {
    x = 1;
  } else {
    x++;
  }
  if (x == 1) {
    console.log("1");
    title.innerText = "Espresso";
    paraCon.innerText = "30ml espresso";
    plate.classList.add("rot1");
    plate.classList.remove("rot2");
    plate.classList.remove("rot3");
    plate.classList.remove("rot4");
    plate.classList.remove("rot21");
    plate.classList.remove("rot22");
    plate.classList.remove("rot23");
    plate.classList.remove("rot24");
    plate.style.animation = "none";
    plate.offsetHeight;
    plate.style.animation = null;
  } else if (x == 2) {
    console.log("2");
    title.innerText = "Americano";
    paraCon.innerText = "30ml espresso \n \n 450ml apa fierbinte";
    plate.classList.remove("rot1");
    plate.classList.add("rot2");
    plate.classList.remove("rot3");
    plate.classList.remove("rot4");
    plate.classList.remove("rot21");
    plate.classList.remove("rot22");
    plate.classList.remove("rot23");
    plate.classList.remove("rot24");
    plate.style.animation = "none";
    plate.offsetHeight;
    plate.style.animation = null;
  } else if (x == 3) {
    console.log("3");
    title.innerText = "Cappuccino";
    paraCon.innerText = "30ml espresso \n \n 160ml spuma de lapte";
    plate.classList.remove("rot1");
    plate.classList.remove("rot2");
    plate.classList.add("rot3");
    plate.classList.remove("rot4");
    plate.classList.remove("rot21");
    plate.classList.remove("rot22");
    plate.classList.remove("rot23");
    plate.classList.remove("rot24");
    plate.style.animation = "none";
    plate.offsetHeight;
    plate.style.animation = null;
  } else if (x == 4) {
    console.log("4");
    title.innerText = "Caffe Latte";
    paraCon.innerText = "30ml espresso \n \n 200ml lapte";
    plate.classList.remove("rot1");
    plate.classList.remove("rot2");
    plate.classList.remove("rot3");
    plate.classList.add("rot4");
    plate.classList.remove("rot21");
    plate.classList.remove("rot22");
    plate.classList.remove("rot23");
    plate.classList.remove("rot24");
    plate.style.animation = "none";
    plate.offsetHeight;
    plate.style.animation = null;
  }
  plate.style.animation = "rotation1 1.5s";
});
