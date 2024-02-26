'use strict';

// аккордеон

const accordionItemHeaders = document.querySelectorAll(".faq__item");

accordionItemHeaders.forEach(accordionItemHeader => {
  accordionItemHeader.addEventListener("click", event => {

    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.querySelector(".faq__content");
    if (accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    }
    else {
      accordionItemBody.style.maxHeight = 0;
    }

  });
});


// фиксированная цена 

const slider = document.getElementById("slider");
const days = document.getElementById("days");
const salary = document.getElementById("salary");
const orders = document.getElementById("orders");

slider.addEventListener("input", function () {
  const value = parseInt(slider.value);

  switch (value) {
    case 1:
      slider.style.cssText = 'background: linear-gradient(to right, black 0%, #EEEFF1 0%);'
      days.textContent = "12";
      salary.innerHTML = "52&nbsp;000&nbsp;₽";
      orders.textContent = "300";
      break;
    case 2:
      slider.style.cssText = 'background: linear-gradient(to right, black 33%, #EEEFF1 33%);'
      days.textContent = "16";
      salary.innerHTML = "64&nbsp;000&nbsp;₽";
      orders.textContent = "400";
      break;
    case 3:
      slider.style.cssText = 'background: linear-gradient(to right, black 66%, #EEEFF1 66%);'
      days.textContent = "20";
      salary.innerHTML = "80&nbsp;000&nbsp;₽";
      orders.textContent = "500";
      break;
    case 4:
      slider.style.cssText = 'background: linear-gradient(to right, black 100%, #EEEFF1 100%);'
      days.textContent = "24";
      salary.innerHTML = "102&nbsp;000&nbsp;₽";
      orders.textContent = "600";
      break;
  }
});

// modal window 

const closeBtn = document.querySelector('#close');
const modalMenu = document.querySelector('#modal_menu__wrapper');
const mobMenu = document.querySelector('#mob-menu');

mobMenu.addEventListener('click', () => {
  modalMenu.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
  modalMenu.style.display = 'none';
})

// main form

const mainForm = document.querySelector('#main-form');

mainForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const nameInput = mainForm.querySelector('#main-form_name');
  let dateInput = mainForm.querySelector('#main-form_date');
  const phoneInput = mainForm.querySelector('#main-form_phone');

  let dateInputMask = function dateInputMask(elm) {
    elm.addEventListener('keypress', function (e) {
      if (e.keyCode < 47 || e.keyCode > 57) {
        e.preventDefault();
      }

      let len = elm.value.length;

      // If we're at a particular place, let the user type the slash
      // i.e., 12.12.1212
      if (len !== 1 || len !== 3) {
        if (e.keyCode == 47) {
          e.preventDefault();
        }
      }

      // If they don't add the slash, do it for them...
      if (len === 2) {
        elm.value += '.';
      }

      // If they don't add the slash, do it for them...
      if (len === 5) {
        elm.value += '.';
      }
    });
  };

  dateInputMask(dateInput);


  const url = 'https://api.telegram.org/bot7045749206:AAGOxShzwlm9wrC1Fhfk6U7KlJ_cz5azrt4/sendMessage';

  const text = `Сообщение из формы\r\n\r\nФИО: ${nameInput.value}\r\nДата рождения: ${dateInput.value}\r\nТелефон: ${phoneInput.value}`;

  const formData = new FormData();
  formData.append('chat_id', 298658489);
  formData.append('parse_mode', 'Markdown');
  formData.append('text', text);

  const response = await fetch(url, {
    method: 'POST',
    body: formData
  });

  nameInput.value = '';
  phoneInput.value = '';
  dateInput.value = '';

  alert('Заявка отправлена!');
})

//modal form

const modalForm = document.querySelector('#modal-form');

modalForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const nameInput = modalForm.querySelector('#modal-form_name');
  const phoneInput = modalForm.querySelector('#modal-form_phone');

  const url = 'https://api.telegram.org/bot7045749206:AAGOxShzwlm9wrC1Fhfk6U7KlJ_cz5azrt4/sendMessage';

  const text = `Заказ звонка\r\n\r\nФИО: ${nameInput.value}\r\nТелефон: ${phoneInput.value}`;

  const formData = new FormData();
  formData.append('chat_id', 298658489);
  formData.append('parse_mode', 'Markdown');
  formData.append('text', text);

  const response = await fetch(url, {
    method: 'POST',
    body: formData
  });

  nameInput.value = '';
  phoneInput.value = '';

  alert('Заявка отправлена!');
})