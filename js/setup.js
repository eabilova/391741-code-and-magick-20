'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARD_NUMBER = 4;

var setup = document.querySelector('.setup');
setup.classList.remove('hidden');

document.querySelector('.setup-similar').classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var fragment = document.createDocumentFragment();
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var getWizardData = function (data) {
  var dataNumber = Math.floor(Math.random() * data.length);
  return data[dataNumber];
};

var getMagicians = function () {
  var magician = {};
  magician.name = getWizardData(WIZARD_NAMES) + ' ' + getWizardData(WIZARD_SURNAMES);
  magician.coatColor = getWizardData(COAT_COLOR);
  magician.eyesColor = getWizardData(EYES_COLOR);
  return magician;
};

var renderWizards = function () {
  for (var i = 0; i < WIZARD_NUMBER; i++) {
    var newMagician = getMagicians();
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = newMagician.name;
    wizardElement.querySelector('.wizard-coat').style.fill = newMagician.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = newMagician.eyesColor;

    fragment.appendChild(wizardElement);
  }
};

var setupNode = function () {
  similarListElement.appendChild(fragment);
};

renderWizards();
setupNode();
