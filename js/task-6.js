const refs = {
  inputNum: document.querySelector('[type="number"]'),
  btnCreate: document.querySelector('[data-create]'),
  btnDestroy: document.querySelector('[data-destroy]'),
  boxes: document.querySelector('#boxes'),
};

let size = 30;

function createBoxes(amount) {
  let markup = '';

  for (let i = 0; i < amount; i += 1) {
    markup += `<div style="background-color: ${getRandomHexColor()}; width: ${size}px; height: ${size}px"></div>`;

    size += 10;
  }

  return markup;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function destroyBoxes() {
  refs.boxes.innerHTML = '';
}

refs.btnCreate.addEventListener('click', () => {
  const amount = refs.inputNum.value;
  refs.inputNum.value = '';
  destroyBoxes();

  if (amount < 1 || amount > 100) {
    return;
  }

  refs.boxes.insertAdjacentHTML('beforeend', createBoxes(amount));
});

refs.btnDestroy.addEventListener('click', () => {
  destroyBoxes();
  size = 30;
});
