document
  .querySelector('.registration')
  .addEventListener('submit', function (event) {
    console.log('daun');
    event.preventDefault();
    const elemtAll = document.querySelectorAll('.empty');
    // prettier-ignore
    const arrayReg = [
      /^[А-ЯЁA-Z][а-яёa-z]+\s[А-ЯЁA-Z]\.\s[А-ЯЁA-Z]\.$/,
      /^[A-Z]{2}\s№\d{6}$/,
      /^[А-ЯЁA-Z]{4}$/,
      /^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.(19|20)\d{2}$/,
      /^м\.\s\d{6}$/
    ];
    for (let i = 0; i < arrayReg.length; i++) {
      elemtAll[i].value.trim();
      console.log('_________');
      console.log(elemtAll[i].value);
      console.log(elemtAll[i].value.match(arrayReg[i]));
      if (!arrayReg[i].test(elemtAll[i].value)) {
        elemtAll[i].style.border = '2px solid red';
      } else {
        elemtAll[i].style.border = '2px solid #ddd';
      }
      if (elemtAll[i].value === '') {
        elemtAll[i].style.border = '2px solid red';
      }
    }
  });
/*const nameDOM = document.querySelector(".name").value.trim();
    const groupDOM = document.querySelector(".group").value.trim();
    const variantDOM = document.querySelector(".variant").value.trim();
    const phoneDOM = document.querySelector(".phone").value.trim();
    const emailDOM = document.querySelector(".email").value.trim();
    const submitDOM = document.querySelector(".submit").value.trim();*/
