'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARD_COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_WIZARD = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var WIZARD_NUMBER = 4;

var fragment = document.createDocumentFragment();
var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = document.querySelector('.setup-close');
var setupUserName = document.querySelector('.setup-user-name');
var wizardForm = document.querySelector('.setup-wizard-form');
var setupSubmit = wizardForm.querySelector('.setup-submit');

var getWizardData = function (data) {
  var dataNumber = Math.floor(Math.random() * data.length);
  return data[dataNumber];
};

setupUserName.addEventListener('invalid', function () {
  setupUserName.setCustomValidity('');
  if (setupUserName.validity.tooShort) {
    setupUserName.setCustomValidity('Имя не может быть короче 2-х символов.');
  } else if (setupUserName.validity.tooLong) {
    setupUserName.setCustomValidity('Имя не может быть длиннее 25 символов.');
  } else if (setupUserName.validity.valueMissing) {
    setupUserName.setCustomValidity('Имя не может быть пустым.');
  }
});

var onPopupEscPress = function (evt) {
  if (evt.key === 'Escape' && document.activeElement !== setupUserName) {
    evt.preventDefault();
    closePopup();
  }
};

// закрытие и открытие попап

var openPopup = function () {
  setup.classList.remove('hidden');

  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');

  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    closePopup();
  }
});

// отправка формы

var sendFormData = function (evt) {
  evt.preventDefault();
  closePopup();
};

wizardForm.addEventListener('submit', sendFormData);
setupSubmit.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    sendFormData();
  }
});


// создание объекта волшебника

var getMagicians = function () {
  var magician = {};
  magician.name = getWizardData(WIZARD_NAMES) + ' ' + getWizardData(WIZARD_SURNAMES);
  magician.coatColor = getWizardData(COAT_COLOR);
  magician.eyesColor = getWizardData(EYES_COLOR);
  return magician;
};

// Генерирование волшебников

var renderWizards = function () {
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  for (var i = 0; i < WIZARD_NUMBER; i++) {
    var newMagician = getMagicians();
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = newMagician.name;
    wizardElement.querySelector('.wizard-coat').style.fill = newMagician.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = newMagician.eyesColor;

    fragment.appendChild(wizardElement);
  }
};

// Добавление волшебников в попап

var setupNode = function () {
  document.querySelector('.setup-similar').classList.remove('hidden');
  var similarListElement = document.querySelector('.setup-similar-list');
  similarListElement.appendChild(fragment);
};

renderWizards();
setupNode();

// изменение цвета мантии
var wizardCoat = setup.querySelector('.wizard-coat');

wizardCoat.addEventListener('click', function () {
  wizardCoat.style.fill = getWizardData(WIZARD_COAT_COLOR);
});

// изменение цвета глаз
var wizardEyes = setup.querySelector('.wizard-eyes');

wizardEyes.addEventListener('click', function () {
  wizardEyes.style.fill = getWizardData(WIZARD_EYES_COLOR);
});

// изменение цвета фаербола
var setupFireball = setup.querySelector('.setup-fireball-wrap');

setupFireball.addEventListener('click', function () {
  var fireballColorValue = setupFireball.children[1];
  var fireballColor = getWizardData(FIREBALL_WIZARD);
  setupFireball.style.backgroundColor = fireballColor;
  fireballColorValue.value = fireballColor;
});


