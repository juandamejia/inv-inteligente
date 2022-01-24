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

const typed = new Typed('.typed',{
 strings:[
   '<i class="text_log">Invernadero Inteligente</i>', 
     '<i class="text_log">Smart Greenhouse</i>', 
    '<i class="text_log">智能温室</i>', 
     '<i class="text_log">Serra Intelligente</i>',
     '<i class="text_log">умная теплица</i>',
     '<i class="text_log">Serre intelligente</i>'
     ],
stringsElements:'#cadenas-texto',
    typeSpeed: 75,
	startDelay: 300, 
	backSpeed: 75, 
	smartBackspace: true, 
	shuffle: true, 
	backDelay: 1500, 
	loop: true, 
	loopCount: false, 
	showCursor: true, 
	cursorChar: '|', 
	contentType: 'html', 
});

document.getElementById("btn_open").addEventListener("click", open_close_menu);

//Declaramos variables
var side_menu = document.getElementById("menu_side");
var btn_open = document.getElementById("btn_open");
var body = document.getElementById("body");

//Evento para mostrar y ocultar menú
    function open_close_menu(){
        body.classList.toggle("body_move");
        side_menu.classList.toggle("menu__side_move");
    }

//Si el ancho de la página es menor a 760px, ocultará el menú al recargar la página

if (window.innerWidth < 760){

    body.classList.add("body_move");
    side_menu.classList.add("menu__side_move");
}

//Haciendo el menú responsive(adaptable)

window.addEventListener("resize", function(){

    if (window.innerWidth > 760){

        body.classList.remove("body_move");
        side_menu.classList.remove("menu__side_move");
    }

    if (window.innerWidth < 760){

        body.classList.add("body_move");
        side_menu.classList.add("menu__side_move");
    }

});