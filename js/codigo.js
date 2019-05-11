var bAtras;
var bAlante;
var imagen;
var imagenActual = 0;
var min = 0;
var max = 4;
var botonera;
var intervalId;
var tiempo = 3000;

function comprobar(){

	if(imagenActual===(max+1)){
		imagenActual=min;
	}

	if(imagenActual===(min-1)){
		imagenActual=max;
	}
}

function cambiarImagen(){
	clearInterval(intervalId);
	comprobar();
	imagen.src = "images/" + imagenActual + ".jpg";
	botonera[imagenActual].checked = true;
	intervalId = setInterval(alante,tiempo);
}


function atras(){
	imagenActual--;
	cambiarImagen();
}

function alante(){
	imagenActual++;
	cambiarImagen();
}

function actualizarImagenConRadio(i){
	for (var i = 0; i < botonera.length ; i++) {
		if (botonera[i].checked) {
			imagenActual = i;
			break;
		}
	}
	cambiarImagen();
}

function setManejadorEventos(){
	bAtras.addEventListener("click",atras);
	bAlante.addEventListener("click",alante);
	for (var i = 0; i < botonera.length ; i++) {
		botonera[i].addEventListener("click",actualizarImagenConRadio);
	}	
}

function init(){
	imagen = document.imagen;
	bAtras = document.form.atras;
	bAlante = document.form.alante;
	botonera = document.form.botonera;
	botonera[0].checked = true;
	intervalId = setInterval(alante,tiempo);
}

window.onload = function(){
	init();
	setManejadorEventos();
};