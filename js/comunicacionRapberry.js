//obtener numero de raspbery de la api de json-server
obtenerNumeros();
function obtenerNumeros(){
    const url = "https://my-json-server.typicode.com/juandamejia/inv-inteligente/numerosRaspberry"
    
    fetch(url)
        .then(res => res.json())
        .then(data => mostrarNumeros(data))
        .catch(error => console.error("Error:", error))
}

function mostrarNumeros(numerosRaspberry){
    const contenido = document.querySelector("#contenido .container");
    numerosRaspberry.forEach(numero => {
        // console.log(numero)
        const div = document.createElement("div");
        div.classList.add("box");

        const chart = document.createElement("div");
        chart.classList.add(`chart${numero.id}`);
        chart.textContent = numero.nivel;
        chart.dataset.percent = numero.nivel;

        const h2 = document.createElement("h2");
        h2.textContent = numero.area;
        // const porcentaje = (".chart1").attr('data-percent', 100);
        // chart.data.attr("data-percent", numero.nivel.toString());
        
        
        div.appendChild(chart);
        contenido.appendChild(div);
        div.appendChild(h2);

        $(function() {
            $('.chart1').easyPieChart({
                size: 160,
                barColor: "#45D3B4",
                scaleLength: 0,
                lineWidth: 5,
                trackColor: "#525151",
                lineCap: "circle",
                animate: 2000,
            });
        });
        $(function() {
            $('.chart2').easyPieChart({
                size: 160,
                barColor: "#E3B53E",
                scaleLength: 0,
                lineWidth: 5,
                trackColor: "#525151",
                lineCap: "circle",
                animate: 2000,
            });
        });
        $(function() {
            $('.chart3').easyPieChart({
                size: 160,
                barColor: "#EC6E2F",
                scaleLength: 0,
                lineWidth: 5,
                trackColor: "#525151",
                lineCap: "circle",
                animate: 2000,
            });
        });
});
}

