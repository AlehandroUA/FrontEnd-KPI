document
  .querySelector('.registration')
  .addEventListener('submit', function (event) {
    event.preventDefault();
    const elemtAll = document.querySelectorAll('.empty');
    let wasError = false;
    // prettier-ignore
    const arrayReg = [
      /^[А-ЯЁA-Z][а-яёa-z]+\s[А-ЯЁA-Z]\.\s[А-ЯЁA-Z]\.$/,
      /^[A-Z]{2}\s№\d{6}$/,
      /^[А-ЯЁA-Z]{4}$/,
      /^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.(19|20)\d{2}$/,
      /^м\.\s\d{6}$/
    ];
    const arrayValues = [];
    for (let i = 0; i < arrayReg.length; i++) {
      elemtAll[i].value.trim();
      if (!arrayReg[i].test(elemtAll[i].value)) {
        elemtAll[i].style.border = '2px solid red';
        wasError = true;
      } else {
        elemtAll[i].style.border = '2px solid #ddd';
        arrayValues.push(elemtAll[i].value);
      }
      if (elemtAll[i].value === '') {
        elemtAll[i].style.border = '2px solid red';
        wasError = true;
      }
    }
    console.log(arrayValues.join('\n'));
    if (!wasError) {
      let newWin = window.open('about:blank', 'hello', 'width=200,height=200');
      newWin.document.write(arrayValues.join('<br>'));
    }
  });

let selectedOption = 4;

const createTable = function (rows, cols) {
  const table = document.getElementById('numberTable');
  let number = 1;
  for (let i = 0; i < rows; i++) {
    const row = document.createElement('tr');
    for (let j = 0; j < cols; j++) {
      const cell = document.createElement('td');
      cell.textContent = number;
      cell.addEventListener('mouseover', function () {
        if (parseInt(cell.textContent) === selectedOption) {
          cell.style.backgroundColor = getRandomColor();
        }
      });
      cell.addEventListener('click', function () {
        if (parseInt(cell.textContent) === selectedOption) {
          cell.style.backgroundColor =
            document.getElementById('colorPicker').value;
        }
      });
      cell.addEventListener('dblclick', function () {
        if (parseInt(cell.textContent) === selectedOption) {
          highlightDiagonal(
            table,
            i,
            j,
            document.getElementById('colorPicker').value
          );
        }
      });
      row.appendChild(cell);
      number++;
    }
    table.appendChild(row);
  }
};

const getRandomColor = function () {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const highlightDiagonal = function (table, row, col, color) {
  for (let i = 0; i < table.rows.length; i++) {
    const cell = table.rows[i].cells[table.rows.length - 1 - i];
    cell.style.backgroundColor = color;
  }
};

createTable(6, 6);
