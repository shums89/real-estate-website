/* Фильтр на мобильных устройствах */
const sidebarToggleBtn = document.querySelector('.menu-icon-wrapper');
const menuIcon = document.querySelector('.menu-icon');
const sidebar = document.querySelector('.sidebar');



sidebarToggleBtn.addEventListener('click', () => {
  menuIcon.classList.toggle('menu-icon-active');
  sidebar.classList.toggle('sidebar--mobile-active');
});

/* Показать еще 3 карточки */
const btnShowCards = document.querySelector('.btn-more');
const hiddenCards = document.querySelectorAll('.card-link--hidden');

btnShowCards.addEventListener('click', () => {
  hiddenCards.forEach(card => {
    card.classList.remove('card-link--hidden');
  });
});

/* Показать/скрыть контент внутри виджетов */
const widgets = document.querySelectorAll('.widget');

widgets.forEach(widget => {
  widget.addEventListener('click', evt => {
    if (evt.target.classList.contains('widget__title')) {
      evt.target.classList.toggle('widget__title--active');
      evt.target.nextElementSibling.classList.toggle('widget__body--hidden');
    }
  });
});

/* Близость к метро, кнопка Любая  */
const checkBoxAny = document.querySelector('#location-05');
const topLocationCheckboxes = document.querySelectorAll('[data-location-param]');

checkBoxAny.addEventListener('change', () => {
  if (checkBoxAny.checked) {
    topLocationCheckboxes.forEach((item) => {
      item.checked = false;
    });
  }
});

topLocationCheckboxes.forEach((item) => {
  item.addEventListener('change', () => {
    if (checkBoxAny.checked) {
      checkBoxAny.checked = false;
    }
  });
});

/* Показать скрытые доп опции */
const showMoreOptions = document.querySelector('.widget__btn-show-hidden');
const hiddenCheckboxes = document.querySelectorAll('.checkbox--hidden');

showMoreOptions.addEventListener('click', (evt) => {
  evt.preventDefault();
  if (showMoreOptions.dataset.options === 'hidden') {
    hiddenCheckboxes.forEach(item => {
      item.style.display = 'block';
    });
    showMoreOptions.innerText = 'Скрыть дополнительные опции';
    showMoreOptions.dataset.options = 'visible';
  } else {
    hiddenCheckboxes.forEach(item => {
      item.style.display = 'none';
    });
    showMoreOptions.innerText = 'Показать ещё';
    showMoreOptions.dataset.options = 'hidden';
  }

});