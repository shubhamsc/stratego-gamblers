window.onload = function() {
  drawGrid('battlefield', 10, 10, 90, -10);
  drawGrid('redArmyCaptured',10,1,110,1);
  drawGrid('blueArmyCaptured',10,1,130,1);
  updateBattleField('redArmy');
};
