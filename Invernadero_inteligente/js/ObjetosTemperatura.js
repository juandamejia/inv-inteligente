let Temperatura = [];

function addTemperatura(temperatura) {
    eventpreventdefault();
    let nuevaTemperatura = {
        temperatura: temperatura,
        // fecha: new Date().toLocaleString()
    };
    Temperatura.push(nuevaTemperatura);
    console.log(nuevaTemperatura)
}