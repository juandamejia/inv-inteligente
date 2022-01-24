//logica 
documnet.querySelector(#temperatura).addEventListener("sumbit", guardarT);

function guardarT(){
    let temperatura = document.querySelector(#temperatura).value;
    addTemperatura(temperatura);
    document.querySelector(#Temperatura).value = "";
}
