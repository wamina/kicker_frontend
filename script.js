let playersData = [];

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

window.onload = function() {
    getPlayers();
}

function createPlayersRows() {
    console.log(playersData);

    playersData.forEach(player => {
        console.log(player);
        var newRow = document.getElementById('playersTable').insertRow();

        newRow.innerHTML = "<tr><td>" + player.attributes.name + "</td><td>" + player.attributes.standort + "</td></tr>";


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