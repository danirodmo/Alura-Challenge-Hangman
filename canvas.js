var pantalla = document.querySelector("#ahorcado");
var pincel = pantalla.getContext("2d");

deletreo=palabraElegida.split("");

function base(){
	pincel.fillStyle = "lightgrey";
	pincel.fillRect(0,0,1200,800);
	pincel.fillStyle = color;
	pincel.beginPath();
	pincel.lineTo(200,750);
	pincel.lineTo(300,700);
	pincel.lineTo(400,750);	
	pincel.fill();
}

function tuboVertical(){	
	pincel.beginPath();
	pincel.strokeStyle = color;
	pincel.fillRect(297.5,700,5,-400);

}function horca(){
	pincel.fillRect(297.5,300,200,5);
	pincel.strokeStyle = color;
	pincel.lineWidth = 5; 
	pincel.beginPath();
	pincel.moveTo(500,300);
	pincel.lineTo(500,350);
	pincel.stroke();
}
function cabeza(){
	pincel.beginPath();
	pincel.strokeStyle = color;
	pincel.lineWidth = 5; 
	pincel.arc(500,400,50,0,2*Math.PI);
	pincel.stroke();
}
function tronco(){
	pincel.strokeStyle = color;
	pincel.lineWidth = 5; 
	pincel.beginPath();
	pincel.moveTo(500,450);
	pincel.lineTo(500,630);
	pincel.stroke();
}
function brazoDe(){
	pincel.strokeStyle = color;
	pincel.lineWidth = 5; 
	pincel.beginPath();
	pincel.moveTo(500,520);
	pincel.lineTo(420,490);
	pincel.stroke();
}
function brazoIz(){
	pincel.strokeStyle = color;
	pincel.lineWidth = 5; 
	pincel.beginPath();
	pincel.moveTo(500,520);
	pincel.lineTo(580,490);
	pincel.stroke(); 
}
function piernaDe(){
	pincel.strokeStyle = color;
	pincel.lineWidth = 5; 
	pincel.beginPath();
	pincel.moveTo(500,630);
	pincel.lineTo(420,700);
	pincel.stroke();
}
function piernaIz(){
	pincel.strokeStyle = color;
	pincel.lineWidth = 5; 
	pincel.beginPath();
	pincel.moveTo(500,630);
	pincel.lineTo(580,700);
	pincel.stroke();
}

function ahorcado(){
	
	if(errores>=0){
		base();
	}
	if(errores>0){
		tuboVertical();
		horca();
	}    
	if(errores>1){
		cabeza();
	}
	if(errores>2){
		tronco();
	}
	if(errores>3){
		brazoDe();
	}
	if(errores>4){
		brazoIz();
	}
	if(errores>5){
		piernaIz();
	}
	if(errores>6){
		piernaDe();
		pincel.fillStyle = "red";
		pincel.font="30px arial";
		var x=600;
		var y=200;
		espacio=45;
		pincel.fillText("El juego ha terminado. La palabra era:",x,y);
		pincel.fillText('"'+palabraElegida+'"',x,(y+50));
	}
	letrasInsertadas();
	dibujarLetra();
	if (errores==7){
		document.removeEventListener("keyup",ingresarLetra);
	}
	if(mostrarPalabra==palabraElegida){

		winner();
	}
}

function dibujarLetra(){
	pincel.strokeStyle = color;
	pincel.font="40px Arial center" ;
	var x=605;
	var y=400;
	pincel.strokeText(mostrarPalabra,x,(y-10));
	pincel.fillText(mostrarPalabra,x,(y-10));
} 

function letrasInsertadas(x,y){
	pincel.strokeStyle = color;
	pincel.font="30px Arial";
	x=600;
	y=500;
	pincel.fillText("Letras Digitadas: ",x,y-50);
	pincel.fillText(letrasDigitadas,x,y);
}

function winner(){
	pincel.strokeStyle = "gold";
	pincel.fillStyle = color;
	pincel.font="40px arial center" ;
	var x=600;
	var y=200;
	pincel.strokeText("Felicidades, Ganaste",x,y);
	pincel.fillText("Felicidades, Ganaste",x,y);
}
