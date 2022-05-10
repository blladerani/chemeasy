import "./style.css";

let elements = [
  {
    number: 1,
    symbol: "H",
    name: "Hidrojen",
  },
  {
    number: 8,
    symbol: "O",
    name: "Oksijen",
  },
];

let compounds = [
  {
    formula: "H2O",
    name: "su",
    elements: {
      H: 2,
      O: 1,
    },
    info: "Su, Dünya üzerinde bol miktarda bulunan ve tüm canlıların yaşaması için vazgeçilmez olan, kokusuz ve tatsız bir kimyasal bileşiktir.[4] Sıklıkla renksiz olarak tanımlanmasına rağmen kızıl dalga boylarında ışığı hafifçe emmesi nedeniyle mavi bir renge sahiptir.[4] ",
  },
  {
    formula: "H2O3",
    name: "nig",
    elements: {
      H: 2,
      O: 3,
    },
  },
];
const elementsSection = document.querySelector(".elements");
for (const element of elements) {
  elementsSection.innerHTML += `<div class="element" data-symbol="${element.symbol}" draggable="true">
  <div class="number">${element.number}</div>
  <div class="symbol">${element.symbol}</div>
  <div class="name">${element.name}</div>
  <div class="controls hidden">
    <div class="minus">-</div>
    <div class="remove">R</div>
    <div class="plus">+</div>
  </div>
  <div class="count hidden">1</div>
`;
}

const compoundsSection = document.querySelector(".compounds");
for (const compound of compounds) {
  compoundsSection.innerHTML += `<div class="compound" data-index="${compounds.indexOf(
    compound
  )}">${compound.formula}</div>`;
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

  for (const comp in compounds) {
    const elementsList = compounds[comp].elements;
    if (objectsEqual(elementsList, elementList)) {
      console.log(comp);
      compoundsSection
        .querySelector(`.compound[data-index="${comp}"]`)
        .classList.add("completed");
    }
  }
}

function objectsEqual(o1, o2) {
  for (const key in o1) {
    if (o1[key] != +o2[key]) {
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
      elem.querySelector(".count").textContent = "0";
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
