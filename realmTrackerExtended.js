//  COUNT NUMBER OF PLAYERS IN GAME
var numberOfPlayers = document.getElementsByClassName('rr-match-player').length;
//  COUNT NUMBER OF  TEAMS  IN GAME
var divs = document.getElementsByTagName('div');
var numberOfTeams = 0;
for (var i = 0; i < divs.length; i++) {
  if (divs[i].id.indexOf('team-') != - 1)
    numberOfTeams++;
}
//  CREATE NODE FOR INFORMATION
if (numberOfTeams != numberOfPlayers) {
  var node = document.createElement("span");
  node.appendChild( document.createTextNode(": " + numberOfTeams + " teams " + numberOfPlayers+ " players  ") );
} else {
  var node = document.createElement("span");
  node.appendChild( document.createTextNode(": " + numberOfPlayers+ " players  ") );
}
//  INSERT NODE INTO DOCUMENT
var squadMatchTitleBlockSmallTag = document.getElementsByTagName('small') [0];
squadMatchTitleBlockSmallTag.insertAdjacentElement('beforebegin', node);