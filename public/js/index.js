const btnLeft = document.querySelector("#btnLeft");
const btnRight = document.querySelector("#btnRight");
const paraCon = document.querySelector(".info-con");

let x = 1;

btnLeft.addEventListener("click", function () {
  if (x == 1) {
    x = 4;
  } else {
    x--;
  }

  if (x == 1) {
    paraCon.innerText =
      "Cafeaua este o băutură care nu conține calorii și contribuie la completarea necesarului de substanțe minerale ca fier, potasiu, magneziu și mangan.";
  } else if (x == 2) {
    paraCon.innerText =
      "Creșterea abilității de concentrare și stimularea sistemului nervos central";
  } else if (x == 3) {
    paraCon.innerText =
      "Polifenolii și antioxidanții prezenți în cafea protejează în fața dezvoltării celulelor canceroase";
  } else if (x == 4) {
    paraCon.innerText =
      "Consumul exagerat de cafea poate avea efecte nedorite și chiar urmări periculoase. De aceea, specialiștii recomandă limitarea consumului la șase cești zilnic.";
  }
});

btnRight.addEventListener("click", function () {
  if (x == 4) {
    x = 1;
  } else {
    x++;
  }

  if (x == 1) {
    paraCon.innerText =
      "Cafeaua este o băutură care nu conține calorii și contribuie la completarea necesarului de substanțe minerale ca fier, potasiu, magneziu și mangan.";
  } else if (x == 2) {
    paraCon.innerText =
      "Creșterea abilității de concentrare și stimularea sistemului nervos central";
  } else if (x == 3) {
    paraCon.innerText =
      "Polifenolii și antioxidanții prezenți în cafea protejează în fața dezvoltării celulelor canceroase";
  } else if (x == 4) {
    paraCon.innerText =
      "Consumul exagerat de cafea poate avea efecte nedorite și chiar urmări periculoase. De aceea, specialiștii recomandă limitarea consumului la șase cești zilnic.";
  }
});
