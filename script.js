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

slider.addEventListener("input", function() {
  const value = parseInt(slider.value);

  switch(value) {
    case 1:
      slider.style.cssText  = 'background: linear-gradient(to right, black 0%, transparent 0%);'
      days.textContent = "12";
      salary.innerHTML = "52&nbsp;000&nbsp;₽";
      orders.textContent = "300";
      break;
    case 2:
      slider.style.cssText  = 'background: linear-gradient(to right, black 33%, transparent 33%);'
      days.textContent = "16";
      salary.innerHTML = "64&nbsp;000&nbsp;₽";
      orders.textContent = "400";
      break;
    case 3:
      slider.style.cssText  = 'background: linear-gradient(to right, black 66%, transparent 66%);'
      days.textContent = "20";
      salary.innerHTML = "80&nbsp;000&nbsp;₽";
      orders.textContent = "500";
      break;
    case 4:
      slider.style.cssText  = 'background: linear-gradient(to right, black 100%, transparent 100%);'
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