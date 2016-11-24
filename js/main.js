var alumnasFotoNombre = [
	{
		foto : "img/alumna1.PNG",
		nombre : "Ramona"
	},
	{
		foto : "img/alumna2.PNG",
		nombre : "Lucia"
	},
	{
		foto : "img/alumna3.PNG",
		nombre : "Emilia"
	},
	{
		foto : "img/alumna4.PNG",
		nombre : "Lia"
	},

];

function getRandomInt(min, max) {
return Math.floor(Math.random() * (max - min + 1)) + min;
}

var alumnas = document.getElementById("alumnas-foto-nombre");
function mostrarAlumnas(){
	var numeroRandom = getRandomInt(0,alumnasFotoNombre.length-1);
	var objetoAlumna = alumnasFotoNombre[numeroRandom];
	console.log(objetoAlumna);
	$("#alumna-foto").attr("src", alumnasFotoNombre.foto);
	$("#alumna-nombre").text(alumnasFotoNombre.nombre);
}

$(document).ready(function() {
	console.log("HOLA");
	mostrarAlumnas();
	//$("select").on("change", function(){});
	
	
});

/*
$(document).ready(function() {
    var contador;
    //contador
    //Cargar los nombres de las alumnas
    nombres = ['Ramona',
        'Lucia', 'Emilia', 'Lia'
    ];
    //Seleccionar un nombre 
    var opcionesNombres;
    var src = 'img/'+nombres[contador]+'.PNG';
    $('#alumnas-foto-nombre').html('<img id="alumna-foto" src="'+src+'"/>');
    opcionesNombres = nombres[contador];
    //Comprobamos que la respuesta este correcta.
    $('#comprobar').click(function(e) {
        respuesta = $('input').val();
        if(respuesta.indexOf(opcionesNombres)>-1){
            alert('success','<strong>BUENAAAAA</strong>');
            localStorage['buenas']++;
        }
        else{
            alert('error','NO SABES!!');
        }        
    });
*/









