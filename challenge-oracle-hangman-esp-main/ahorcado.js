var errores=0;
var iniciarJuego=false;
var palabras=["HOLOCAUSTO","ARRUINAR","GENERICO","AHORCADO","DESARROLLADOR","AUDACES","SUGERENCIA","GIRASOL","SOYA","MURCIELAGO","ARBITRARIO"];

//Dibujar el ahorcado
var pantalla = document.querySelector("#ahorcado");
var pincel = pantalla.getContext("2d");        
pincel.fillStyle = "lightgrey";
pincel.fillRect(0,0,1200,800);
//var color="darkblue";

//Dibujar base
pincel.fillStyle = color;
pincel.beginPath();
pincel.lineTo(200,750);
pincel.lineTo(300,700);
pincel.lineTo(400,750);	
pincel.fill();

//if(error==10){
//Dibujar tubo vertical
function tuboVertical(){	
	pincel.beginPath();
	pincel.fillRect(297.5,700,5,-400);
}
function horca(){
	//Dibujar tubo horizontal
	pincel.fillRect(297.5,300,200,5);
	//Dibujar horca
	pincel.strokeStyle = color;
	pincel.lineWidth = 5; 
	pincel.beginPath();
	pincel.moveTo(500,300);
	pincel.lineTo(500,350);
	pincel.stroke();
}
function cabeza(){
	//Dibujar cabeza
	pincel.beginPath();
	pincel.strokeStyle = color;
	pincel.lineWidth = 5; 
	pincel.arc(500,400,50,0,2*Math.PI);
	pincel.stroke();
}
function tronco(){
	//Dibujar tronco
	pincel.strokeStyle = color;
	pincel.lineWidth = 5; 
	pincel.beginPath();
	pincel.moveTo(500,450);
	pincel.lineTo(500,630);
	pincel.stroke();
}
function brazoDe(){
	//Dibujar brazo derecho
	pincel.strokeStyle = color;
	pincel.lineWidth = 5; 
	pincel.beginPath();
	pincel.moveTo(500,520);
	pincel.lineTo(420,490);
	pincel.stroke();
}
function brazoIz(){
	//Dibujar brazo izquierdo
	pincel.strokeStyle = color;
	pincel.lineWidth = 5; 
	pincel.beginPath();
	pincel.moveTo(500,520);
	pincel.lineTo(580,490);
	pincel.stroke(); 
}
function piernaDe(){
	//Dibujar pierna derecha
	pincel.strokeStyle = color;
	pincel.lineWidth = 5; 
	pincel.beginPath();
	pincel.moveTo(500,630);
	pincel.lineTo(420,700);
	pincel.stroke();
}
function piernaIz(){
	//Dibujar pierna izquierda
	pincel.strokeStyle = color;
	pincel.lineWidth = 5; 
	pincel.beginPath();
	pincel.moveTo(500,630);
	pincel.lineTo(580,700);
	pincel.stroke();
}
function mostrarPalabra(){
	
}
tuboVertical();
horca();
cabeza();
tronco();
brazoDe();
brazoIz();
piernaIz();
piernaDe();

//Jugar al ahorcado
function sortearPalabra(){
        return palabras[Math.round(Math.random()*(palabras.length-1))];
}

palabras=sortearPalabra();

if(errores==8){
    document.write("El juego ha terminado. La palabra era: "+palabras);
}
console.log(palabras);

var letrasCorrectas=[];

var letrasDigitadas;
function ingresarLetra(){
	letrasDigitadas=document.querySelector("#insertar-letra").value.toUpperCase();
	document.querySelector("#nueva-letra").value=letrasDigitadas;
	console.log(letrasDigitadas);
}
letrasDigitadas=;
//letrasDigitadas=ingresarLetra();
console.log(letrasDigitadas);

//letrasCorrectas.push(letrasDigitadas);
function almacenarLetras(){
	letrasCorrectas.push(letrasDigitadas);
}
almacenarLetras();
console.log(letrasCorrectas);

/*
document.addEventListener('keydown',function press(event){
    //letrasCorrectas.push(event.key);
	//return letrasCorrectas;
    letrasCorrectas=event.key.toUpperCase();
	//letrasCorrectas.push(press);
    //alert(letrasCorrectas);
	//console.log(letrasCorrectas);
	//letrasCorrectas.push();
	
});*/

function letrasInsertadas(x,y,espacio){
	pincel.strokeStyle = color;
	pincel.font="30px arial";
	x=600;
	y=500;	
	espacio=45;
	pincel.fillText("Letras ingresadas: ",x,y);
	
	//pincel.fillText("Letras ingresadas: "+letrasCorrectas,x,y);
	
}
//letrasInsertadas();

//letrasCorrectas.push("r","tR");
console.log(letrasCorrectas);

var deletreo=palabras.split("");
console.log(deletreo);

//Dibujar las rayas de cada letra
var x=600;
var y=400;
var espacio=5;
var raya= 40;

console.log(deletreo.length);
function dibujarRaya(){
	pincel.strokeStyle = color;
	pincel.lineWidth = 3; 
	pincel.beginPath();
	pincel.moveTo(x,y);
	pincel.lineTo(x+raya,y);
    pincel.moveTo(x+raya+espacio,y);
	pincel.stroke();
	x=x+raya+espacio;
}
for (var i=1;i<=deletreo.length;i++){
	dibujarRaya();
}

function dibujarLetra(x,y,espacio,i){
	pincel.strokeStyle = color;
	pincel.font="50px verdana bold center" ;
	x=605;
	y=400;
	espacio=45;
	for (var i=0;i<deletreo.length;i++){
		pincel.strokeText(deletreo[i],x,(y-10));
		pincel.fillText(deletreo[i],x,(y-10));
		x=x+espacio;  
	}
}
console.log();
dibujarLetra();


//letrasCorrectas.push(letra);
//for(var posicion=1;posicion<=deletreo.length;posicion++){
//	if(presion==deletreo[posicion]){
	//	letrasCorrectas.push(letra);
//	}
//}
console.log(letrasCorrectas);
/*if(letra){
    var letrasCorrectas=[];
	letrasCorrectas.push();
}else{
    var letrasIncorrectas=[];
}*/



