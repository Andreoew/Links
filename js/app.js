// const btn = document.querySelector('#btn')
const buttons = document.querySelectorAll('#buttons-container button');
// const btnDarkBlue = document.querySelector('.btn-dark-blue');
const btn = document.querySelector('.btn');
const classBody = document.body;

function BtnLight() {
  classBody.classList.remove('dark-blue', 'pink', 'dark-pink');
  classBody.classList.add('light');
}

function BtnDarkBlue() {
  classBody.classList.remove('light', 'pink', 'dark-pink');
  classBody.classList.add('dark-blue');
}

function BtnPink() {
  classBody.classList.remove('light', 'dark-blue', 'dark-pink');
  classBody.classList.add('pink');
}

function BtnDarkPink() {
  classBody.classList.remove( 'light', 'pink' , 'dark-blue' );
  classBody.classList.add('dark-pink');
}

buttons.forEach((btn, classBody) => {
  btn.addEventListener('click', (e) => {
    // const value = e.target.value;

    if (classBody === 0) {
      BtnLight();
    } else if (classBody === 1) {
      BtnDarkBlue();
    }
    else if (classBody === 2) {
      BtnPink();
    }else if(classBody === 3) {
      BtnDarkPink();
    }

    console.log(btn);
    console.log(classBody);
  })
})

