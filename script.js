let playersData = [];

function getPlayers() {
    const Http = new XMLHttpRequest();
    const url = 'http://localhost:8000/players/';
    Http.open("GET", url);
    Http.send();

    Http.onreadystatechange = (e) => {
        if (Http.responseText) {
            let response = JSON.parse(Http.responseText);
            playersData = response.data;
            console.log(playersData);
            createPlayersRows();

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