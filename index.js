// console.log('Hello World');

const firstSection = document.querySelector('.first-section');
const thanksSection = document.querySelector('.thanks-section');

const ratings = document.querySelectorAll('.btn');
const submitBtn = document.querySelector('.submit');
const number = document.querySelector('.number');

submitBtn.addEventListener('click', function () {
  thanksSection.classList.remove('hide');
  firstSection.classList.add('hide');
});

ratings.forEach(function (rating) {
  rating.addEventListener('click', function () {
    number.innerHTML = rating.innerHTML;
  });
});
