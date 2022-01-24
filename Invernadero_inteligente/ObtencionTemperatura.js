//variables
const temperatura = document.getElementById('temperatura');

//eventListener 
addEventListener('DOMContentLoaded', function(){
    getTemperatura();
});

function getTemperatura( element ){
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Santiago,cl&appid=e9b9f8f8d8f9f9b9f9b9f9b9f9b9f9b9')
    .then( res => res.json() )
    .then( data => {
        temperatura.innerHTML = data.main.temp;
    })
    .catch( err => console.log(err) );
}
console.log(temperatura);