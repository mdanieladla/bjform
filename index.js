'use strict';

const form = document.querySelector('.form');
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const pass = document.querySelector('#password');
const confirmPass = document.querySelector('#confirmPass');
const msgName = document.querySelector('.err-msg-name');
const msgEmail = document.querySelector('.err-msg-email');
const msgPass = document.querySelector('.err-msg-pass');
const msgConfirmPass = document.querySelector('.err-msg-confirmPass');

let validationName;
let validationEmail;
let validationPass;
let valiidationPassConfirmed;

const validateName = () => {
  const nameValue = name.value.trim();
  const regx = /^[a-zA-Z\s]+$/;
  if (nameValue === '') {
    return (
      (msgName.innerHTML = 'Debe completar su nombre'),
      name.classList.add('invalid')
    );
  } else if (!regx.test(nameValue)) {
    return (msgName.innerHTML = 'Introduzca un nombre válido');
  } else {
    return (
      (msgName.innerHTML = ''),
      name.classList.remove('invalid'),
      name.classList.add('valid'),
      (validationName = true)
    );
  }
};

const validateEmail = () => {
  const rgx =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (email.value.trim() === '') {
    return (
      (msgEmail.innerHTML = 'Debe completar el email'),
      email.classList.add('invalid')
    );
  } else if (!rgx.test(email.value.trim())) {
    return (msgEmail.innerHTML = 'Email inválido');
  } else {
    return (
      (msgEmail.innerHTML = ''),
      email.classList.remove('invalid'),
      email.classList.add('valid'),
      (validationEmail = true)
    );
  }
};

const validatePass = () => {
  if (pass.value.trim() === '') {
    return (
      (msgPass.innerHTML = 'Debe introducir una clave'),
      pass.classList.add('invalid')
    );
  } else if (pass.value.trim().length < 8) {
    return (
      (msgPass.innerHTML = 'La clave debe tener al menos 8 caracteres'),
      pass.classList.add('invalid')
    );
  } else {
    return (
      (msgPass.innerHTML = ''),
      pass.classList.remove('invalid'),
      pass.classList.add('valid'),
      (validationPass = true)
    );
  }
};

const validateConfirmedPass = () => {
  if (confirmPass.value.trim() === '') {
    return (
      (msgConfirmPass.innerHTML = 'Debe confirmar su clave'),
      confirmPass.classList.add('invalid')
    );
  } else if (confirmPass.value.trim() !== pass.value.trim()) {
    return (
      (msgConfirmPass.innerHTML = 'La clave no coincide'),
      confirmPass.classList.add('invalid')
    );
  } else {
    (msgConfirmPass.innerHTML = ''),
      confirmPass.classList.remove('invalid'),
      confirmPass.classList.add('valid');
    valiidationPassConfirmed = true;
  }
};

form.addEventListener('submit', (ev) => {
  ev.preventDefault();

  validateName();
  validateEmail();
  validatePass();
  validateConfirmedPass();

  if (
    validationName &&
    validationEmail &&
    validationPass &&
    valiidationPassConfirmed
  ) {
    return alert('Formulario enviado con éxito'), location.reload();
  } else {
    return alert('Debe rellenar los campos');
  }
});

name.addEventListener('focusout', () => {
  validateName();
});

email.addEventListener('focusout', () => {
  validateEmail();
});

pass.addEventListener('focusout', () => {
  validatePass();
});

confirmPass.addEventListener('focusout', () => {
  validateConfirmedPass();
});
