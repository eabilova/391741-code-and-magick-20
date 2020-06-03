'use strict';

var BOARD_WIDTH = 420;
var BOARD_HEIGHT = 270;
var BOARD_X = 100;
var BOARD_Y = 10;
var BOARD_GAP = 10;
var BOARD_INNER_GAP = 25;
var BAR_WIDTH = 40;
var BAR_GAP = 50;
var FONT_HEIGHT = 20;

var barHeight = (BOARD_HEIGHT - (BOARD_INNER_GAP * 2) - (FONT_HEIGHT * 3) - BOARD_GAP);

var renderBoard = function (context, x, y, color) {
  context.fillStyle = color;
  context.fillRect(x, y, BOARD_WIDTH, BOARD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

function rand(min, max) {
  return min + Math.random() * (max - min);
}

function getRandomColor(context, player) {
  if (player === 'Вы') {
    context.fillStyle = 'rgba(255, 0, 0, 1)';
  } else {
    var saturation = Math.round(rand(0, 100));
    context.fillStyle = 'hsl(255,' + saturation + '%, 49%)';
  }
}

function renderTextName(context, player, x) {
  context.fillStyle = '#000';
  context.fillText(player, x, BOARD_Y + BOARD_HEIGHT - BOARD_INNER_GAP);
}

function renderTextScore(context, time, x, margin) {
  context.fillStyle = '#000';
  context.fillText(Math.round(time), x, margin);
}

function renderBar(context, x, margin, playerBar) {
  context.fillRect(x, margin + BOARD_GAP, BAR_WIDTH, playerBar);
}

window.renderStatistics = function (context, players, times) {
  renderBoard(context, BOARD_X + BOARD_GAP, BOARD_Y + BOARD_GAP, 'rgba(0, 0, 0, 0.7)');
  renderBoard(context, BOARD_X, BOARD_Y, '#ffffff');
  context.font = '16px PT Mono';
  context.fillStyle = '#000';
  context.fillText('Ура вы победили!', BOARD_X + BOARD_INNER_GAP, BOARD_Y + BOARD_INNER_GAP);
  context.fillText('Список результатов:', BOARD_X + BOARD_INNER_GAP, BOARD_Y + BOARD_INNER_GAP + FONT_HEIGHT);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    var playerBar = (barHeight * times[i]) / maxTime;
    var barMargin = (barHeight - playerBar + BOARD_Y + BOARD_INNER_GAP + FONT_HEIGHT * 2);
    var positionX = BOARD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * i;

    getRandomColor(context, players[i]);
    renderBar(context, positionX, barMargin, playerBar);
    renderTextName(context, players[i], positionX);
    renderTextScore(context, times[i], positionX, barMargin);
  }
};
