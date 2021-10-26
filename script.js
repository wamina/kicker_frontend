let playersData = [];
let gamesData = [];

function getPlayers() {
    const Http = new XMLHttpRequest();
    const url = 'http://localhost:8000/players/';
    Http.open("GET", url);
    Http.send();

    Http.onreadystatechange = (e) => {
        if (Http.responseText && playersData.length === 0) {
            let response = JSON.parse(Http.responseText);
            playersData = response.data;
            if (window.location.pathname === "/players.html") {
                createPlayersRows();
            }
            if (window.location.pathname === "/index.html") {
                createPlayersDropdown1();
                createPlayersDropdown2();
                createPlayersDropdown3();
                createPlayersDropdown4();
            }


        }
    }
}

function getGames() {
    const Http = new XMLHttpRequest();
    const url = 'http://localhost:8000/games/';
    Http.open("GET", url);
    Http.send();

    Http.onreadystatechange = (e) => {
        if (Http.responseText && gamesData.length === 0) {
            let response = JSON.parse(Http.responseText);
            gamesData = response.data;
            if (window.location.pathname === "/games.html") {
                createGamesRows();
            }
        }
    }
}

function postGame(params) {

    const Http = new XMLHttpRequest();
    const url = 'http://localhost:8000/games/';
    var paramsString = JSON.stringify(params);
    Http.open("POST", url, true);

    Http.setRequestHeader('Content-Type', 'application/vnd.api+json');
    Http.send(paramsString);

    Http.onreadystatechange = function() {
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            alert(Http.responseText);
        }
    }
}

window.onload = function() {
    getPlayers();
    getGames();
}

function createPlayersRows() {

    playersData.forEach(player => {
        var newRow = document.getElementById('playersTable').insertRow();

        newRow.innerHTML = "<tr><td>" + player.attributes.name + "</td><td>" + player.attributes.standort + "</td></tr>";


    })
}

function createGamesRows() {

    gamesData.forEach(game => {
        var newRow = document.getElementById('gamesTable').insertRow();

        newRow.innerHTML = "<tr><td>" + game.attributes.standort + "</td><td>" + game.attributes.datetime + "</td><td>" + game.attributes.player1 + "</td><td>" + game.attributes.posP1 + "</td><td>" + game.attributes.player2 + "</td><td>" + game.attributes.posP2 + "</td><td>" + game.attributes.player3 + "</td><td>" + game.attributes.posP3 + "</td><td>" + game.attributes.player4 + "</td><td>" + game.attributes.posP4 + "</td><td>" + game.attributes.winner1 + "</td><td>" + game.attributes.winner2 + "</td></tr>";


    })
}

function openForm() {
    document.getElementById("newGame").style.display = "block";
}

function closeForm() {
    document.getElementById("newGame").style.display = "none";
}


function createPlayersDropdown1() {

    var select = document.createElement("select");
    select.name = "Spieler 1";
    select.id = "player1"

    playersData.forEach(player => {

        var option = document.createElement("option");
        option.value = player.attributes.name;
        option.text = player.attributes.name;
        select.appendChild(option);

    })
    var label = document.createElement("label");
    label.innerHTML = "Spieler 1"
    label.htmlFor = "player1";

    let arrow = document.createElement("div");
    arrow.classList.add("select_arrow");


    document.getElementById("container1").appendChild(select);
    document.getElementById("container1").appendChild(arrow);
}

function createPlayersDropdown2() {


    var select = document.createElement("select");
    select.name = "Spieler 2";
    select.id = "player2"



    playersData.forEach(player => {

        var option = document.createElement("option");
        option.value = player.attributes.name;
        option.text = player.attributes.name;
        select.appendChild(option);

    })
    var label = document.createElement("label");
    label.innerHTML = "Spieler 2"
    label.htmlFor = "player2";

    let arrow = document.createElement("div");
    arrow.classList.add("select_arrow");


    document.getElementById("container2").appendChild(select);
    document.getElementById("container2").appendChild(arrow);
}

function createPlayersDropdown3() {

    var select = document.createElement("select");
    select.name = "Spieler 3";
    select.id = "player3"



    playersData.forEach(player => {

        var option = document.createElement("option");
        option.value = player.attributes.name;
        option.text = player.attributes.name;
        select.appendChild(option);

    })
    var label = document.createElement("label");
    label.innerHTML = "Spieler 3"
    label.htmlFor = "player3";

    let arrow = document.createElement("div");
    arrow.classList.add("select_arrow");


    document.getElementById("container3").appendChild(select);
    document.getElementById("container3").appendChild(arrow);
}

function createPlayersDropdown4() {


    var select = document.createElement("select");
    select.name = "Spieler 4";
    select.id = "player4"


    playersData.forEach(player => {

        var option = document.createElement("option");
        option.value = player.attributes.name;
        option.text = player.attributes.name;
        select.appendChild(option);

    })
    var label = document.createElement("label");
    label.innerHTML = "Spieler 4"
    label.htmlFor = "player4";

    let arrow = document.createElement("div");
    arrow.classList.add("select_arrow");


    document.getElementById("container4").appendChild(select);
    document.getElementById("container4").appendChild(arrow);
}

function saveValues() {
    var p1 = document.getElementById("player1");
    var valuep1 = p1.options[p1.selectedIndex].value;

    var p2 = document.getElementById("player2");
    var valuep2 = p2.options[p2.selectedIndex].value;

    var p3 = document.getElementById("player3");
    var valuep3 = p3.options[p3.selectedIndex].value;

    var p4 = document.getElementById("player4");
    var valuep4 = p4.options[p4.selectedIndex].value;

    var pos1 = document.getElementById("playerPos1");
    var valuepos1 = pos1.options[pos1.selectedIndex].value;

    var pos2 = document.getElementById("playerPos2");
    var valuepos2 = pos2.options[pos2.selectedIndex].value;

    var pos3 = document.getElementById("playerPos3");
    var valuepos3 = pos3.options[pos3.selectedIndex].value;

    var pos4 = document.getElementById("playerPos4");
    var valuepos4 = pos4.options[pos4.selectedIndex].value;

    var ort = document.getElementById("standort");
    var valueort = ort.options[ort.selectedIndex].value;

    var winner = document.getElementById("winner");
    var valuewinner = winner.options[winner.selectedIndex].value;

    var winner1 = "";
    var winner2 = "";
    if (valuewinner === "team1") {
        winner1 = valuep1;
        winner2 = valuep2;
    }
    if (valuewinner === "team2") {
        winner1 = valuep3;
        winner2 = valuep4;
    }

    var datetime = new Date().toLocaleString();

    var game = {
        "data": {
            "type": "Game",
            "attributes": {
                "standort": valueort,
                "datetime": datetime,
                "player1": valuep1,
                "posP1": valuepos1,
                "player2": valuep2,
                "posP2": valuepos2,
                "player3": valuep3,
                "posP3": valuepos3,
                "player4": valuep4,
                "posP4": valuepos4,
                "winner1": winner1,
                "winner2": winner2
            }
        }
    }
    postGame(game);
}