let data = [];
let game = 0;

function getPlayers() {
    const Http = new XMLHttpRequest();
    const url = 'http://localhost:8000/players/';
    Http.open("GET", url);
    Http.send();

    Http.onreadystatechange = (e) => {
        if (Http.responseText) {
            let response = JSON.parse(Http.responseText);
            let bigData = response.data;
            data = [];
            bigData.forEach(function(element) {
                data.push(element.attributes);

                let titleArray = element.attributes.title.split(", ");
                element.attributes.title = titleArray;
            });
            console.log(data);
            showGenre();
        }
    }
}