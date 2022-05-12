import "./style.css";

import elements from "./elements";
import compounds from "./compounds";

const elementsSection = document.querySelector(".elements");
for (const element of elements) {
  elementsSection.innerHTML += `<div class="element ${element.type}" data-symbol="${element.symbol}" draggable="true">
  <div class="element-top">
  <div class="number">${element.number}</div>
  <div class="weight">(${element.weight})</div>
  </div>
  
  <div class="symbol">${element.symbol}</div>
  <div class="name">${element.name}</div>
  <div class="controls hidden">
    <div class="minus">-</div>
    <img class="remove" src="trash.png" />
    <div class="plus">+</div>
  </div>
  <div class="count hidden">1</div>
`;
}

const compoundsSection = document.querySelector(".compounds");
for (const compound of compounds) {
  compoundsSection.innerHTML += `<div class="compound" data-index="${compounds.indexOf(
    compound
  )}">${indiceFormula(compound.formula)}</div>`;
}
const elementElements = document.querySelectorAll(".element");
const dropSection = document.querySelector(".element-drop");

function dragEnter(e) {
  e.preventDefault();
  e.target.classList.add("drag-over");
}

function dragOver(e) {
  e.preventDefault();
  e.target.classList.add("drag-over");
}

function dragLeave(e) {
  e.target.classList.remove("drag-over");
}

function drop(e) {
  e.preventDefault();
  e.target.classList.remove("drag-over");

  const droppedElement = document.querySelector(
    `.element[data-symbol="${e.dataTransfer.getData("text/plain")}"]`
  );
  document
    .querySelector(
      `.element[data-symbol="${e.dataTransfer.getData(
        "text/plain"
      )}"] > .controls`
    )
    .classList.remove("hidden");
  droppedElement.setAttribute("data-count", 1);
  droppedElement.lastElementChild.classList.remove("hidden");
  droppedElement.querySelector(".count").textContent = "1";

  dropSection.append(droppedElement);
  checkCompound();
}

function dragStart(e) {
  e.dataTransfer.setData("text/plain", e.target.getAttribute("data-symbol"));
}

elementElements.forEach((e) => {
  e.addEventListener("dragstart", dragStart);
});

dropSection.addEventListener("dragenter", dragEnter);
dropSection.addEventListener("dragover", dragOver);
dropSection.addEventListener("dragleave", dragLeave);
dropSection.addEventListener("drop", drop);

function checkCompound() {
  let elementList = {};
  const dropElements = document.querySelectorAll(".element-drop .element");
  dropElements.forEach((e) => {
    const symbol = e.getAttribute("data-symbol");
    elementList[symbol] = +e.getAttribute("data-count");
  });
  removeInfo();
  for (const comp in compounds) {
    const elementsList = compounds[comp].elements;
    if (objectsEqual(elementsList, elementList)) {
      compoundsSection
        .querySelector(`.compound[data-index="${comp}"]`)
        .classList.add("completed");
      displayInfo(comp);
    }
  }
}

function objectsEqual(o1, o2) {
  for (const key in o1) {
    if (o1[key] != +o2[key]) {
      return false;
    }
  }
  for (const key in o2) {
    if (o2[key] != +o1[key]) {
      return false;
    }
  }
  return true;
}

const elementRemoveBtns = document.querySelectorAll(".remove");
elementRemoveBtns.forEach((e) => {
  e.addEventListener("click", (e) => {
    const elem = e.target.parentElement.parentElement;
    elem.lastElementChild.classList.add("hidden");
    elem.querySelector(".controls").classList.add("hidden");
    elem.querySelector(".count").textContent = "0";
    elementsSection.append(elem);
    checkCompound();
  });
});

const elementMinusButtons = document.querySelectorAll(".minus");
elementMinusButtons.forEach((e) => {
  e.addEventListener("click", (e) => {
    const elem = e.target.parentElement.parentElement;
    if (elem.getAttribute("data-count") == 1) {
      elementsSection.append(elem);
      elem.lastElementChild.classList.add("hidden");
      elem.querySelector(".controls").classList.add("hidden");
    } else {
      elem.setAttribute("data-count", elem.getAttribute("data-count") - 1);
      elem.lastElementChild.textContent = elem.getAttribute("data-count");
    }
    checkCompound();
  });
});

const elementPlusButtons = document.querySelectorAll(".plus");
elementPlusButtons.forEach((e) => {
  e.addEventListener("click", (e) => {
    const elem = e.target.parentElement.parentElement;

    elem.setAttribute("data-count", +elem.getAttribute("data-count") + 1);
    elem.lastElementChild.textContent = elem.getAttribute("data-count");
    checkCompound();
  });
});

const infoSection = document.querySelector(".infos");

function displayInfo(index) {
  infoSection
    .querySelector(".l-image")
    .setAttribute("src", compounds[index].info.img1);
  infoSection
    .querySelector(".r-image")
    .setAttribute("src", compounds[index].info.img2);
  infoSection.classList.remove("hidden");
  infoSection.querySelector(".compound-header").innerHTML = indiceFormula(
    compounds[index].formula
  );

  infoSection.querySelector(".compound-name").textContent =
    compounds[index].name;
  infoSection.querySelector(".compound-info").textContent =
    compounds[index].info.text;
}

function removeInfo() {
  infoSection.classList.add("hidden");
}

function indiceFormula(formula) {
  return formula
    .split("")
    .map((e) => {
      if (!isNaN(+e)) {
        return `<sub>${e}</sub>`;
      } else {
        return e;
      }
    })
    .join("");
}
