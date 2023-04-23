// reference DOM
const selectId = document.querySelector('#pixel-board');
const buttonPosition = document.querySelector('#clear-board');
const selectColor = document.querySelectorAll('.color');
const selectBoard = document.querySelector('#generate-board');
const inputNumber = document.querySelector('#board-size');
let baseSquare = 5;

function handleColorPalette() {
  selectColor.forEach((color) => {
    color.addEventListener('click', (event) => {
      const currentColor = document.querySelector('.selected');
      currentColor.classList.remove('selected');
      event.target.classList.add('selected');
    });
  });
}

function changeColorPalette() {
  selectColor.forEach((colorPosition) => {
    const colorCurrent = colorPosition;

    const getColor = `rgb(${Math.random() * 256},${Math.random() * 256}
      ,${Math.random() * 256})`;
    colorCurrent.style.backgroundColor = getColor;
  });
  handleColorPalette();
}

function colorTransfer() {
  const selectDiv = document.querySelectorAll('.pixel');
  selectDiv.forEach((pixel) => {
    const pixelCurrent = pixel;
    pixel.addEventListener('click', () => {
      const getColorSelected = window
        .getComputedStyle(document.querySelector('.selected'));

      const newColor = getColorSelected.getPropertyValue('background-color');
      pixelCurrent.style.backgroundColor = newColor;
    });
  });
  }

function squareGenerator(index) {
  const selected = document.querySelector(`.column-${index}`);
  const creatSquad = document.createElement('div');
  creatSquad.classList.add('pixel');
  selected.append(creatSquad);
}

function buttonClear() {
  const selectDiv = document.querySelectorAll('.pixel');
  buttonPosition.addEventListener('click', () => {
    selectDiv.forEach((squares) => {
      const squareCurrent = squares;
      squareCurrent.style.backgroundColor = null;
    });
  });
}


function crateSquare() {
  for (let index = 0; index < baseSquare; index += 1) {
    const creatColunm = document.createElement('div');
    creatColunm.classList.add(`column-${index}`);
    selectId.append(creatColunm);

    for (let main = 0; main < baseSquare; main += 1) {
      squareGenerator(index);
    }
  }
  colorTransfer();
  buttonClear();
}

function sendNewBoard() {
  let valueNumber = inputNumber.value;
  if (valueNumber < 5) valueNumber = 5; 
  if (valueNumber > 50) valueNumber = 50; 

  if (inputNumber.value === '') {
    window.alert('Board inválido!');
  } else {
    selectId.innerHTML = '';
    baseSquare = valueNumber;
    crateSquare();
  }
}

selectBoard.addEventListener('click', sendNewBoard);

window.onload = () => {
  crateSquare();
  changeColorPalette();
};
