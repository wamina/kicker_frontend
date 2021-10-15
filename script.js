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
            console.log(playersData);
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
            console.log(gamesData);
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
    Http.open("POST", url);

    Http.setRequestHeader('Content-type', 'application/json');
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
    console.log(playersData);

    playersData.forEach(player => {
        console.log(player);
        var newRow = document.getElementById('playersTable').insertRow();

        newRow.innerHTML = "<tr><td>" + player.attributes.name + "</td><td>" + player.attributes.standort + "</td></tr>";


    })
}

function createGamesRows() {
    console.log(gamesData);

    gamesData.forEach(game => {
        console.log(game);
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
    console.log(playersData);


    var select = document.createElement("select");
    select.name = "Spieler 1";
    select.id = "player1"



    playersData.forEach(player => {
        console.log(player);

        var option = document.createElement("option");
        option.value = player.attributes.name;
        option.text = player.attributes.name;
        select.appendChild(option);

    })
    var label = document.createElement("label");
    label.innerHTML = "Spieler 1"
    label.htmlFor = "player1";

    document.getElementById("container1").appendChild(select);
}

function createPlayersDropdown2() {
    console.log(playersData);


    var select = document.createElement("select");
    select.name = "Spieler 2";
    select.id = "player2"



    playersData.forEach(player => {
        console.log(player);

        var option = document.createElement("option");
        option.value = player.attributes.name;
        option.text = player.attributes.name;
        select.appendChild(option);

    })
    var label = document.createElement("label");
    label.innerHTML = "Spieler 2"
    label.htmlFor = "player2";

    document.getElementById("container2").appendChild(select);
}

function createPlayersDropdown3() {
    console.log(playersData);


    var select = document.createElement("select");
    select.name = "Spieler 3";
    select.id = "player3"



    playersData.forEach(player => {
        console.log(player);

        var option = document.createElement("option");
        option.value = player.attributes.name;
        option.text = player.attributes.name;
        select.appendChild(option);

    })
    var label = document.createElement("label");
    label.innerHTML = "Spieler 3"
    label.htmlFor = "player3";

    document.getElementById("container3").appendChild(select);
}

function createPlayersDropdown4() {
    console.log(playersData);


    var select = document.createElement("select");
    select.name = "Spieler 4";
    select.id = "player4"



    playersData.forEach(player => {
        console.log(player);

        var option = document.createElement("option");
        option.value = player.attributes.name;
        option.text = player.attributes.name;
        select.appendChild(option);

    })
    var label = document.createElement("label");
    label.innerHTML = "Spieler 4"
    label.htmlFor = "player4";

    document.getElementById("container4").appendChild(select);
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
    console.log(valuep4);

    var pos1 = document.getElementById("playerPos1");
    var valuepos1 = pos1.options[pos1.selectedIndex].value;

    var pos2 = document.getElementById("playerPos2");
    var valuepos2 = pos2.options[pos2.selectedIndex].value;

    var pos3 = document.getElementById("playerPos3");
    var valuepos3 = pos3.options[pos3.selectedIndex].value;

    var pos4 = document.getElementById("playerPos4");
    var valuepos4 = pos4.options[pos4.selectedIndex].value;
    console.log(valuepos4);

    var ort = document.getElementById("standort");
    var valueort = ort.options[ort.selectedIndex].value;
    console.log(valueort);

    var winner = document.getElementById("winner");
    var valuewinner = winner.options[winner.selectedIndex].value;

    var winner1 = "";
    var winner2 = "";
    if (valuewinner === "team1") {
        console.log(valuewinner);
        winner1 = valuep1;
        winner2 = valuep2;
    }
    if (valuewinner === "team2") {
        console.log(valuewinner);
        winner1 = valuep3;
        winner2 = valuep4;
    }

    var datetime = new Date().toLocaleString();
    console.log(datetime);

    var game = {
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
    postGame(game);
}