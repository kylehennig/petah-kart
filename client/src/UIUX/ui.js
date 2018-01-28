const webServerLocation = 'localhost:8888';

// The functions for the UI and page changes
// joingame
// enter game ID to join that game
function joinGame(gameId) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', `${webServerLocation}/join/${gameId}`, true); // tyoe, location, isAsync
  xhr.setRequestHeader('Content-type', 'application/json');
  xhr.onload = () => {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        displayId(gameId);
        // TODO, relocate to client
      } else {
        // apparently, we don't like logging errors
        // console.error(xhr.statusText);
      }
    }
  };
  xhr.send();
}

// player enters the game ID to join here
function enterId() {
  const a = prompt('enter server code thing');
  joinGame(a);
}

// player chooses map, max players and passes into newgame
function createGame() {
  newGame(0, 3);
}

// takes the game ID from newgame as a callback and displays it
function displayId(gameId) {

}

// newgame
// this passes the information to the server (post request)
// recieves the new game ID from the server
function newGame(mapId, playerCount) {
  const xhr = new XMLHttpRequest();
  xhr.open('POST', `${webServerLocation}/new`, true); // tyoe, location, isAsync
  xhr.setRequestHeader('Content-type', 'application/json');
  xhr.onload = () => {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        displayId(xhr.responseText);
      } else {
        // apparently, we don't like logging errors
        // console.error(xhr.statusText);
      }
    }
  };
  xhr.send(JSON.stringify({ // do not changed the name map, or player_count
    map: mapId, //             the server expects this form.
    player_count: playerCount,
  }));
}

function clickJoin() {
  console.log('join');
  enterId();
}

function clickCreate() {
  console.log('create');
  createGame();
}

function clickCredits() {
  console.log('credits');
}

function clickSettings() {
  console.log('settings');
}
