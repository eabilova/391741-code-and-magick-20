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

window.renderStatistics = function (context, players, times) {
  renderBoard(context, BOARD_X + BOARD_GAP, BOARD_Y + BOARD_GAP, 'rgba(0, 0, 0, 0.7)');
  renderBoard(context, BOARD_X, BOARD_Y, '#ffffff');
  context.font = '16px PT Mono';
  context.fillStyle = '#000';
  context.fillText('Ура вы победили!', BOARD_X + BOARD_INNER_GAP, BOARD_Y + BOARD_INNER_GAP);
  context.fillText('Список результатов:', BOARD_X + BOARD_INNER_GAP, BOARD_Y + BOARD_INNER_GAP + FONT_HEIGHT);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    context.fillStyle = 'hsl(255, 100%, 49%)';
    if (players[i] === 'Вы') {
      context.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      var saturation = rand(0, 100);
      context.fillStyle = 'hsl(255,' + saturation + '%, 49%)';
    }
    var playerBar = (barHeight * times[i]) / maxTime;
    var barMargin = (barHeight - playerBar + BOARD_Y + BOARD_INNER_GAP + FONT_HEIGHT * 2);
    var positionX = BOARD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * i;
    context.fillRect(positionX, barMargin + BOARD_GAP, BAR_WIDTH, playerBar);
    context.fillStyle = '#000';
    context.fillText(players[i], positionX, BOARD_Y + BOARD_HEIGHT - BOARD_INNER_GAP);
    context.fillText(Math.round(times[i]), positionX, barMargin);
  }
};
