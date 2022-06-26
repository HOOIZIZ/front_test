"strict mode";
const optionsGlass = [
  {
    1: {
      name: "Прямоугольник",
      img: "./assets/glassForm_cube.png",
      value: 1,
      classes: ["optionsGlass", "options_glass"],
    },

    1.5: {
      name: "Круг (овал)",
      img: "./assets/glassForm_circle.png",
      value: 1.5,
      classes: ["optionsGlass", "options_glass"],
    },
  },
];
const optionsProcessing = [
  {
    1: {
      name: "Без обработки",
      img: "./assets/without_processing.png",
      value: 1,
      classes: ["optionProc", "options_proc"],
    },
    1.5: {
      name: "С шлифовкой",
      img: "./assets/grinding.png",
      value: 1.5,
      classes: ["optionsGlass", "options_proc"],
    },
    1.8: {
      name: "С полировкой",
      img: "./assets/polishing.png",
      value: 1.8,
      classes: ["optionProc", "options_proc"],
    },
  },
];

function defineProperty(prop) {
  for (let k = 0; k < prop.length; k++) {
    let propertyName = prop[k].name;
    let defaultValue = prop[k].value;
    Object.defineProperty(window, propertyName, {
      get() {
        return defaultValue;
      },
      set(v) {
        console.log(`Установили новое значение ${v} для ${propertyName}`);
        defaultValue = v;
        sumFunc();
      },
    });
  }
}

let tooltipGlass = false;
let tooltipProc = false;

let arr = [
  { name: "valueLength", value: 0 },
  { name: "valueWidth", value: 0 },
  { name: "valueGlass", value: 1 },
  { name: "valueProc", value: 1 },
  { name: "valueCount", value: 1 },
];
let valueSum = 0.0;

defineProperty(arr);

let optionVisibleGlass = false;
let optionVisibleProc = false;

const select_glass = document.getElementById("select_glass");
//const hint_glass = document.getElementById("hint_glass");
//const hint_proc = document.getElementById("hint_proc");
//const tooltip_glass = document.getElementById("tooltip_glass");
//const tooltip_proc = document.getElementById("tooltip_proc");
const clear = document.getElementById("clear");
const warning = document.getElementById("warning");
const sumNumber = document.getElementById("sumNumber");
const selectedOptionGlass = document.getElementById("selectedOptionGlass");
const selectedOptionProc = document.getElementById("selectedOptionProc");
const selectGlass = document.getElementById("selectGlass");
const select_processing = document.getElementById("select_processing");
const selectProc = document.getElementById("selectProc");

const minus = document.getElementById("minus");
const count = document.getElementById("count");
const plus = document.getElementById("plus");

const lenght = document.getElementById("lenght");
const width = document.getElementById("width");

minus.addEventListener("click", (e) => {
  if (valueCount == 1) {
    return;
  }
  valueCount -= 1;
  count.innerText = valueCount;
});

plus.addEventListener("click", (e) => {
  valueCount += 1;
  count.innerText = valueCount;
});

clear.addEventListener("click", clearFn);
lenght.addEventListener("input", validate);
width.addEventListener("input", validate);

hint_glass.addEventListener("click", (e) => {
  tooltipGlass = !tooltipGlass;
  let { clientX, clientY } = e;
  clientX = clientX - 50;
  clientY = clientY - 140;
  if (tooltipGlass) {
    if (tooltipProc) {
      tooltipProc = false;
      tooltip_proc.style.display = "none";
    }
    tooltip_glass.style.display = "";
    tooltip_glass.style.top = clientY + "px";
    tooltip_glass.style.left = clientX + "px";
    return;
  }
  tooltip_glass.style.display = "none";
});
hint_proc.addEventListener("click", (e) => {
  tooltipProc = !tooltipProc;
  let { clientX, clientY } = e;
  clientX = clientX - 50;
  clientY = clientY - 150;
  if (tooltipProc) {
    if (tooltipGlass) {
      tooltipGlass = false;
      tooltip_glass.style.display = "none";
    }
    tooltip_proc.style.display = "";
    tooltip_proc.style.top = clientY + "px";
    tooltip_proc.style.left = clientX + "px";
    return;
  }
  tooltip_proc.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (!e.target.closest(".title") && !e.target.closest(".options")) {
    optionVisibleGlass = false;
    setVisible(optionsGlass, optionVisibleGlass, select_glass, selectGlass);
    optionVisibleProc = false;
    setVisible(
      optionsProcessing,
      optionVisibleProc,
      select_processing,
      selectProc
    );
  }
  if (!e.target.closest(".tooltip") && !e.target.closest(".hint")) {
    tooltipGlass = false;
    tooltipProc = false;
    tooltip_proc.style.display = "none";
    tooltip_glass.style.display = "none";
  }
});

select_glass.addEventListener("click", (e) => {
  if (e.target.closest("#select_glass")) {
    {
      optionVisibleGlass = !optionVisibleGlass;
      setVisible(
        optionsGlass,
        optionVisibleGlass,
        optionVisibleProc,
        optionsProcessing
      );
      if (optionVisibleProc) {
        optionVisibleProc = false;
      }
    }
  }
});

select_processing.addEventListener("click", (e) => {
  if (e.target.closest("#select_processing")) {
    {
      optionVisibleProc = !optionVisibleProc;
      setVisible(
        optionsProcessing,
        optionVisibleProc,
        optionVisibleGlass,
        optionsGlass
      );
      if (optionVisibleGlass) {
        optionVisibleGlass = false;
      }
    }
  }
});

function uploadOptions(arr, select) {
  let insert = `<div id = '${arr[0][1].classes[0]}' style = "display: none">`;
  for (k in arr[0]) {
    insert =
      insert +
      `<div class="options" id="${arr[0][1].classes[1]}" value = "${arr[0][k].value}">
	  <div>
		  <img src="${arr[0][k].img}" alt="type">
		  <p> ${arr[0][k].name} </p>
	  </div>
  </div>`;
  }
  select.insertAdjacentHTML("afterend", insert);
  let ss = document.querySelector("#" + arr[0][1].classes[0]);
  ss.addEventListener("click", selectOption);
}

function setVisible(e, ov, isOpenOther, toDeleteOpenArr) {
  let hideOptions = document.getElementById(e[0][1].classes[0]);
  if (ov) {
    if (isOpenOther) {
      let hideOptions = document.getElementById(
        toDeleteOpenArr[0][1].classes[0]
      );
      if (hideOptions) {
        hideOptions.style.display = "none";
      }
    }
    hideOptions.style.display = "";
    return;
  }

  if (hideOptions) {
    hideOptions.style.display = "none";
  }
}

function selectOption(e) {
  let id = e.target.offsetParent.id;
  if (id == "options_glass") {
    let hideOptions = document.getElementById(optionsGlass[0][1].classes[0]);
    const value = e.target.offsetParent.getAttribute("value");
    valueGlass = Number(value);
    const clicked = optionsGlass[0][value];
    selectedOptionGlass.innerHTML = `
		<img src="${clicked.img}" alt="type">
		<p> ${clicked.name} </p>
		<img class="arrow arrow_rotate" src="./assets/arrow.png" alt="arrow">
		`;
    optionVisibleGlass = false;
    hideOptions.style.display = "none";
  }
  if (id == "options_proc") {
    let hideOptions = document.getElementById(
      optionsProcessing[0][1].classes[0]
    );
    const value = e.target.offsetParent.getAttribute("value");
    valueProc = Number(value);
    const clicked = optionsProcessing[0][value];

    selectedOptionProc.innerHTML = `
	<img src="${clicked.img}" alt="type">
	<p> ${clicked.name} </p>
	<img class="arrow arrow_rotate" src="./assets/arrow.png" alt="arrow">
	`;
    optionVisibleProc = false;
    hideOptions.style.display = "none";
  }
}

function validate(e) {
  if (e.target.value == "") {
    if (e.target.className == "classLenght") {
      valueLength = 0;
    }
    if (e.target.className == "classWidth") {
      valueWidth = 0;
    }
    warning.style.display = "";
    e.target.classList.add("warn");
    return;
  }
  if (valueLength > 0 && valueWidth > 0) {
    warning.style.display = "none";
  }
  e.target.classList.remove("warn");
  if (e.target.className == "classLenght") {
    valueLength = Number(e.target.value);
  }
  if (e.target.className == "classWidth") {
    valueWidth = Number(e.target.value);
  }
}

function sumFunc() {
  valueSum =
    (valueLength / 1000) *
    (valueWidth / 1000) *
    1500 *
    valueGlass *
    valueProc *
    valueCount;
  //(this.lenghtValue / 1000 * this.widthValue / 1000) * 1500 * this.value_gf * this.value_pt * this.count
  sumNumber.innerText = valueSum.toFixed(3);
}

function clearFn() {
  valueLength = 0;
  valueWidth = 0;
  valueGlass = 1;
  valueProc = 1;
  valueCount = 1;
  lenght.value = "";
  width.value = "";

  selectedOptionGlass.innerHTML = `
	<img src="${optionsGlass[0][1].img}" alt="type">
	<p> ${optionsGlass[0][1].name} </p>
	<img class="arrow arrow_rotate" src="./assets/arrow.png" alt="arrow">
	`;
  selectedOptionProc.innerHTML = `
	<img src="${optionsProcessing[0][1].img}" alt="type">
	<p> ${optionsProcessing[0][1].name} </p>
	<img class="arrow arrow_rotate" src="./assets/arrow.png" alt="arrow">
	`;

  count.innerText = 1;
}

uploadOptions(optionsGlass, select_glass); // for glass
uploadOptions(optionsProcessing, select_processing); // for proc
