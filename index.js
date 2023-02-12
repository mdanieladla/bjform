'use strict';
const form = document.querySelector('.form');

let id = (id) => document.getElementById(id);

let name = id('name');
let email = id('email');
let password = id('password');
let confirmPass = id('confirmPass');

let classes = (classes) => document.getElementsByClassName(classes);
let errMsg = classes('err-msg');
let errImg = classes('err');
let okImg = classes('okay');
let container = classes('container');

let validate = (id, classs, message) => {
  if (id.value.trim() === '') {
    errMsg[classs].innerHTML = message;
    container[classs].style.border = '2px solid #fa5252';
    errImg[classs].style.opacity = '1';
    okImg[classs].style.opacity = '0';
  } else {
    errMsg[classs].innerHTML = '';
    container[classs].style.border = '2px solid #69db7c';
    errImg[classs].style.opacity = '0';
    okImg[classs].style.opacity = '1';
  }
};

form.addEventListener('submit', (ev) => {
  ev.preventDefault();

  validate(name, 0, 'Rellena este campo');
  validate(email, 1, 'Rellena este campo');
  validate(password, 2, 'Rellena este campo');
  validate(confirmPass, 3, 'Rellena este campo');
});
