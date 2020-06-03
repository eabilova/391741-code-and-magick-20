'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

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

var magicians = [{
  name: getWizardData(WIZARD_NAMES) + ' ' + getWizardData(WIZARD_SURNAMES),
  coatColor: getWizardData(COAT_COLOR),
  eyesColor: getWizardData(EYES_COLOR)
},
{
  name: getWizardData(WIZARD_NAMES) + ' ' + getWizardData(WIZARD_SURNAMES),
  coatColor: getWizardData(COAT_COLOR),
  eyesColor: getWizardData(EYES_COLOR)
},
{
  name: getWizardData(WIZARD_NAMES) + ' ' + getWizardData(WIZARD_SURNAMES),
  coatColor: getWizardData(COAT_COLOR),
  eyesColor: getWizardData(EYES_COLOR)
},
{
  name: getWizardData(WIZARD_NAMES) + ' ' + getWizardData(WIZARD_SURNAMES),
  coatColor: getWizardData(COAT_COLOR),
  eyesColor: getWizardData(EYES_COLOR)
}
];

for (var i = 0; i < 4; i++) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = magicians[i].name;
  wizardElement.querySelector('.wizard-coat').style.fill = magicians[i].coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = magicians[i].eyesColor;

  fragment.appendChild(wizardElement);
}

similarListElement.appendChild(fragment);

