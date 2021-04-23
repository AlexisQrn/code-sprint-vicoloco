// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}


const APIKEY = '9dec74cfb2f077cd97d3da533d852a7b';

let apiCall = function (city) {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric&lang=fr`;

    fetch(url)
        .then((response) =>
            response.json().then((data) => {
                console.log(data);
                document.querySelector('#city').innerHTML = "<i class='fas fa-building'></i>" + data.name;
                document.querySelector('#temps').innerHTML = "<i class='fas fa-sun'></i>" + data.main.temp + '°';
                document.querySelector('#humidity').innerHTML = "<i class='fas fa-tint'></i>" + data.main.humidity + '%';
                document.querySelector('#wind').innerHTML = "<i class='fas fa-wind'></i>" + data.wind.speed + 'km/h';


                const temperature = data.main.temp
                console.log(temperature);



                let word = '';


                if (temperature > 35) {
                    word = 'really nigga'
                    console.log(word)
                }

                if (temperature > 25) {
                    word = 'fire'
                    console.log(word)
                }

                if (temperature > 15) {
                    word = 'sun'
                    console.log(word)
                }

                if (temperature < 15) {
                    word = 'cold'
                    console.log(word)
                }

                if (temperature < 0) {
                    word = 'snow'
                    console.log(word)
                }



                sendApiRequest(word);

                const village = data.name;

                if (village == 'Bordeaux') {
                    console.log('Bordeauuuux')

                    document.getElementById("backgroundimg").style.backgroundImage = "url('img/Bordeaux.jpg')";
                }

                if (village == 'Toulouse') {
                    console.log('Toulooooouse')

                    document.getElementById("backgroundimg").style.backgroundImage = "url('img/Toulouse.jpg')";
                }

                if (village == 'Lyon') {
                    console.log('Bouuh')

                    document.getElementById("backgroundimg").style.backgroundImage = "url('img/Lyon.jpg')";
                }

                if (village == 'Paris') {
                    console.log('PSG on est là')

                    document.getElementById("backgroundimg").style.backgroundImage = "url('img/Paris.jpg')";
                }

                if (village == 'Nantes') {
                    console.log('Cest ou cette ville')

                    document.getElementById("backgroundimg").style.backgroundImage = "url('img/Nantes.jpg')";
                }

                if (village == 'Marseille') {
                    console.log('Ouais pas ouf')

                    document.getElementById("backgroundimg").style.backgroundImage = "url('img/Marseille.jpg')";
                }







            })

        )
        .catch((err) => console.log('Erreur : ' + err));







};

// barre de recherche 

document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();

    let ville = document.querySelector('#inputCity').value;

    apiCall(ville);



    // lance un gif avec la valeur entré dans l'input GIF (même sans recherche)
});

// La ville affiché de base 

apiCall('Bordeaux');


    // Si la Temperature est en dessous de 10 degres = froid 
    // valeur  assigné 
    // 

